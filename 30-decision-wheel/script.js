(function () {
        "use strict";
        var colors = [
            "#ef4444",
            "#8b5cf6",
            "#38bdf8",
            "#ec4899",
            "#14b8a6",
            "#f59e0b",
          ],
          items = [
            { name: "Build", w: 1 },
            { name: "Learn", w: 1 },
            { name: "Rest", w: 1 },
            { name: "Explore", w: 1 },
          ],
          history = [],
          angle = 0,
          spinning = false,
          $ = function (x) {
            return document.getElementById(x);
          },
          canvas = $("wheel"),
          ctx = canvas.getContext("2d");
        function save() {
          localStorage.setItem("orbitchoice:v1", JSON.stringify(items));
        }
        try {
          items = JSON.parse(localStorage.getItem("orbitchoice:v1")) || items;
        } catch (x) {}
        function draw() {
          var total = items.reduce(function (a, x) {
              return a + x.w;
            }, 0),
            at = -Math.PI / 2;
          ctx.clearRect(0, 0, 500, 500);
          items.forEach(function (x, i) {
            var arc = (x.w / total) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(250, 250);
            ctx.arc(250, 250, 235, at, at + arc);
            ctx.fillStyle = colors[i % colors.length];
            ctx.fill();
            ctx.save();
            ctx.translate(250, 250);
            ctx.rotate(at + arc / 2);
            ctx.textAlign = "right";
            ctx.fillStyle = "#fff";
            ctx.font = "bold 17px system-ui";
            ctx.fillText(x.name, 215, 6);
            ctx.restore();
            at += arc;
          });
          options();
        }
        function options() {
          $("options").innerHTML = "";
          items.forEach(function (x, i) {
            var row = document.createElement("div");
            row.className = "option";
            row.innerHTML =
              "<input><input type='number' min='1' max='10'><button>×</button>";
            row.children[0].value = x.name;
            row.children[1].value = x.w;
            row.children[0].oninput = function () {
              x.name = this.value.slice(0, 30);
              save();
              draw();
            };
            row.children[1].onchange = function () {
              x.w = Math.max(1, Math.min(10, +this.value || 1));
              save();
              draw();
            };
            row.children[2].onclick = function () {
              if (items.length > 2) {
                items.splice(i, 1);
                save();
                draw();
              }
            };
            $("options").appendChild(row);
          });
        }
        function pick() {
          var total = items.reduce(function (a, x) {
              return a + x.w;
            }, 0),
            r =
              (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296) *
              total;
          for (var i = 0; i < items.length; i++) {
            r -= items[i].w;
            if (r < 0) return i;
          }
          return items.length - 1;
        }
        $("spin").onclick = function () {
          if (spinning) return;
          spinning = true;
          var win = pick(),
            total = items.reduce(function (a, x) {
              return a + x.w;
            }, 0),
            before = items.slice(0, win).reduce(function (a, x) {
              return a + x.w;
            }, 0),
            center = ((before + items[win].w / 2) / total) * 360,
            target = 360 - center;
          angle += 1440 + ((((target - angle) % 360) + 360) % 360);
          canvas.style.transform = "rotate(" + angle + "deg)";
          $("winner").textContent = "Spinning…";
          setTimeout(
            function () {
              spinning = false;
              $("winner").textContent = "Winner: " + items[win].name;
              history.unshift(items[win].name);
              history = history.slice(0, 5);
              $("history").textContent = history.join(" · ");
            },
            matchMedia("(prefers-reduced-motion:reduce)").matches ? 20 : 3250,
          );
        };
        $("add").onclick = function () {
          if (items.length < 12) {
            items.push({ name: "Option " + (items.length + 1), w: 1 });
            save();
            draw();
          }
        };
        draw();
      })();

(function () {
        "use strict";
        var colors = [
          "#ef4444",
          "#8b5cf6",
          "#38bdf8",
          "#ec4899",
          "#14b8a6",
          "#f59e0b",
          "#06b6d4",
          "#e879f9",
        ];
        var presets = {
          custom: ["Build", "Learn", "Rest", "Explore"],
          food: [
            "Biryani",
            "Dosa",
            "Pizza",
            "Momos",
            "Pasta",
            "Thali",
            "Burger",
            "Noodles",
          ],
          movie: [
            "Action",
            "Comedy",
            "Thriller",
            "Sci-Fi",
            "Drama",
            "Animation",
            "Mystery",
            "Romance",
          ],
          activity: [
            "Read",
            "Walk",
            "Code",
            "Call a friend",
            "Watch a movie",
            "Cook",
            "Music",
            "Create",
          ],
          workout: [
            "Full body",
            "Yoga",
            "Running",
            "Cycling",
            "Push day",
            "Pull day",
            "Leg day",
            "Recovery",
          ],
          study: [
            "JavaScript",
            "DSA",
            "English",
            "Aptitude",
            "System design",
            "Database",
            "Cloud",
            "Revision",
          ],
        };
        var travel = [
          ["Manali", "nature adventure", "mid"],
          ["Goa", "relax adventure", "mid"],
          ["Jaipur", "culture city", "budget"],
          ["Rishikesh", "nature adventure", "budget"],
          ["Udaipur", "culture relax", "mid"],
          ["Kasol", "nature relax", "budget"],
          ["Mumbai", "city culture", "mid"],
          ["Ladakh", "nature adventure", "premium"],
          ["Kerala", "nature relax", "premium"],
          ["Varanasi", "culture", "budget"],
          ["Dubai", "city adventure", "premium"],
          ["Bali", "nature relax", "premium"],
        ];
        var $ = function (id) {
            return document.getElementById(id);
          },
          canvas = $("wheel"),
          ctx = canvas.getContext("2d"),
          items,
          history = [],
          angle = 0,
          spinning = false,
          lastWinner = null;
        try {
          items = JSON.parse(localStorage.getItem("orbitchoice:v2"));
        } catch (e) {}
        if (!Array.isArray(items) || items.length < 2)
          items = presets.custom.map(function (name) {
            return { name: name, w: 1 };
          });
        try {
          history = JSON.parse(
            localStorage.getItem("orbitchoice:history") || "[]",
          );
        } catch (e) {}
        function save() {
          localStorage.setItem("orbitchoice:v2", JSON.stringify(items));
          localStorage.setItem("orbitchoice:history", JSON.stringify(history));
        }
        function setItems(names) {
          items = names
            .slice(0, 30)
            .filter(Boolean)
            .map(function (name) {
              return { name: name, w: 1 };
            });
          if (items.length < 2)
            items = [
              { name: "Yes", w: 1 },
              { name: "No", w: 1 },
            ];
          lastWinner = null;
          save();
          draw();
        }
        function draw() {
          var total = items.reduce(function (sum, item) {
              return sum + item.w;
            }, 0),
            at = -Math.PI / 2;
          ctx.clearRect(0, 0, 500, 500);
          items.forEach(function (item, i) {
            var arc = (item.w / total) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(250, 250);
            ctx.arc(250, 250, 235, at, at + arc);
            ctx.fillStyle = colors[i % colors.length];
            ctx.fill();
            ctx.strokeStyle = "#090e1a";
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.save();
            ctx.translate(250, 250);
            ctx.rotate(at + arc / 2);
            ctx.textAlign = "right";
            ctx.fillStyle = "#fff";
            ctx.font = "700 16px system-ui";
            ctx.fillText(item.name.slice(0, 24), 215, 6);
            ctx.restore();
            at += arc;
          });
          renderOptions();
          $("history").textContent = history.length
            ? history.join(" · ")
            : "None yet";
          $("probability").textContent =
            items.length + " choices · weighted selection";
        }
        function renderOptions() {
          $("options").innerHTML = "";
          items.forEach(function (item, i) {
            var row = document.createElement("div");
            row.className = "option";
            row.innerHTML =
              "<input aria-label='Option name'><input aria-label='Weight' type='number' min='1' max='10'><button aria-label='Remove option'>×</button>";
            row.children[0].value = item.name;
            row.children[1].value = item.w;
            row.children[0].onchange = function () {
              item.name = this.value.trim().slice(0, 30) || "Untitled";
              save();
              draw();
            };
            row.children[1].onchange = function () {
              item.w = Math.max(1, Math.min(10, +this.value || 1));
              save();
              draw();
            };
            row.children[2].onclick = function () {
              if (items.length > 2) {
                items.splice(i, 1);
                save();
                draw();
              }
            };
            $("options").appendChild(row);
          });
        }
        function pick() {
          var total = items.reduce(function (a, x) {
              return a + x.w;
            }, 0),
            r =
              (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296) *
              total;
          for (var i = 0; i < items.length; i++) {
            r -= items[i].w;
            if (r < 0) return i;
          }
          return items.length - 1;
        }
        $("spin").onclick = function () {
          if (spinning) return;
          spinning = true;
          var win = pick(),
            total = items.reduce(function (a, x) {
              return a + x.w;
            }, 0),
            before = items.slice(0, win).reduce(function (a, x) {
              return a + x.w;
            }, 0),
            center = ((before + items[win].w / 2) / total) * 360,
            target = 360 - center;
          angle += 1440 + ((((target - angle) % 360) + 360) % 360);
          canvas.style.transform = "rotate(" + angle + "deg)";
          $("winner").textContent = "Spinning…";
          setTimeout(
            function () {
              spinning = false;
              lastWinner = items[win].name;
              $("winner").textContent = "Winner: " + lastWinner;
              history.unshift(lastWinner);
              history = history.slice(0, 8);
              save();
              draw();
            },
            matchMedia("(prefers-reduced-motion:reduce)").matches ? 20 : 3250,
          );
        };
        $("loadPreset").onclick = function () {
          var p = $("preset").value;
          if (p === "travel") return $("applyPreferences").click();
          setItems(presets[p] || presets.custom);
        };
        $("applyPreferences").onclick = function () {
          var mood = $("mood").value,
            budget = $("budget").value,
            list = travel
              .filter(function (x) {
                return (
                  (mood === "all" || x[1].includes(mood)) &&
                  (budget === "all" || x[2] === budget)
                );
              })
              .map(function (x) {
                return x[0];
              });
          if (list.length < 2)
            list = travel
              .filter(function (x) {
                return mood === "all" || x[1].includes(mood);
              })
              .map(function (x) {
                return x[0];
              });
          $("preset").value = "travel";
          setItems(list);
        };
        $("add").onclick = function () {
          if (items.length < 30) {
            items.push({ name: "Option " + (items.length + 1), w: 1 });
            save();
            draw();
          }
        };
        $("equal").onclick = function () {
          items.forEach(function (x) {
            x.w = 1;
          });
          save();
          draw();
        };
        $("shuffle").onclick = function () {
          for (var i = items.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1)),
              x = items[i];
            items[i] = items[j];
            items[j] = x;
          }
          save();
          draw();
        };
        $("paste").onclick = function () {
          var value = prompt(
            "Paste one choice per line or separate choices with commas:",
          );
          if (value)
            setItems(
              value.split(/\n|,/).map(function (x) {
                return x.trim();
              }),
            );
        };
        $("reset").onclick = function () {
          setItems(presets.custom);
          $("winner").textContent = "Ready to choose";
        };
        $("removeWinner").onclick = function () {
          if (!lastWinner) return;
          items = items.filter(function (x) {
            return x.name !== lastWinner;
          });
          $("winner").textContent = lastWinner + " removed";
          lastWinner = null;
          if (items.length < 2) setItems(presets.custom);
          else {
            save();
            draw();
          }
        };
        $("clearHistory").onclick = function () {
          history = [];
          save();
          draw();
        };
        draw();
      })();
