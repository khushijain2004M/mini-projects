(function () {
        "use strict";
        var icons = ["✦", "◆", "●", "▲", "☾", "♬", "⚡", "☁"],
          cards = [],
          open = [],
          moves = 0,
          start = 0,
          timer,
          locked = false,
          $ = function (x) {
            return document.getElementById(x);
          };
        function shuffle(a) {
          for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1)),
              x = a[i];
            a[i] = a[j];
            a[j] = x;
          }
          return a;
        }
        function game() {
          clearInterval(timer);
          cards = shuffle(
            icons.concat(icons).map(function (x, i) {
              return { id: i, icon: x, done: false };
            }),
          );
          open = [];
          moves = 0;
          start = 0;
          locked = false;
          $("moves").textContent = 0;
          $("time").textContent = 0;
          $("status").textContent = "";
          draw();
        }
        function draw() {
          $("game").innerHTML = "";
          cards.forEach(function (x, i) {
            var b = document.createElement("button");
            b.className =
              "tile" + (x.done ? " done" : open.includes(i) ? " open" : "");
            b.textContent = x.done || open.includes(i) ? x.icon : "?";
            b.onclick = function () {
              flip(i);
            };
            $("game").appendChild(b);
          });
        }
        function flip(i) {
          if (locked || cards[i].done || open.includes(i)) return;
          if (!start) {
            start = Date.now();
            timer = setInterval(function () {
              $("time").textContent = Math.floor((Date.now() - start) / 1000);
            }, 250);
          }
          open.push(i);
          draw();
          if (open.length === 2) {
            moves++;
            $("moves").textContent = moves;
            locked = true;
            setTimeout(function () {
              var a = cards[open[0]],
                b = cards[open[1]];
              if (a.icon === b.icon) {
                a.done = b.done = true;
              }
              open = [];
              locked = false;
              draw();
              if (
                cards.every(function (x) {
                  return x.done;
                })
              ) {
                clearInterval(timer);
                var sec = Math.floor((Date.now() - start) / 1000),
                  best = Number(localStorage.getItem("echotiles:best") || 0);
                if (!best || moves < best) {
                  best = moves;
                  localStorage.setItem("echotiles:best", best);
                }
                $("best").textContent = best;
                $("status").textContent =
                  "Complete in " + moves + " moves and " + sec + " seconds ✓";
              }
            }, 650);
          }
        }
        $("restart").onclick = game;
        $("best").textContent = localStorage.getItem("echotiles:best") || "—";
        game();
      })();
