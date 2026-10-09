(function () {
        "use strict";
        var colors = ["#ec4899", "#8b5cf6", "#3b82f6", "#ef4444", "#22d3ee"],
          $ = function (x) {
            return document.getElementById(x);
          };
        function lum(hex) {
          var v = [1, 3, 5].map(function (i) {
            var c = parseInt(hex.slice(i, i + 2), 16) / 255;
            return c <= 0.04045
              ? c / 12.92
              : Math.pow((c + 0.055) / 1.055, 2.4);
          });
          return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
        }
        function ratio(a, b) {
          var x = lum(a),
            y = lum(b);
          return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
        }
        function draw() {
          $("swatches").innerHTML = "";
          colors.forEach(function (c, i) {
            var s = document.createElement("div");
            s.className = "swatch";
            s.style.background = c;
            s.textContent = c;
            s.onclick = function () {
              navigator.clipboard.writeText(c);
            };
            $("swatches").appendChild(s);
          });
          var g =
            "linear-gradient(" +
            $("angle").value +
            "deg," +
            $("a").value +
            "," +
            $("b").value +
            ")";
          $("preview").style.background = g;
          var black = ratio($("a").value, "#000000"),
            white = ratio($("a").value, "#ffffff"),
            best = Math.max(black, white);
          $("ratio").textContent = best.toFixed(2) + ":1";
          $("grade").textContent =
            best >= 4.5 ? "AA readable" : "Needs stronger contrast";
        }
        function random() {
          colors = colors.map(function () {
            return (
              "#" +
              Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, "0")
            );
          });
          $("a").value = colors[0];
          $("b").value = colors[2];
          draw();
        }
        ["a", "b", "angle"].forEach(function (id) {
          $(id).oninput = draw;
        });
        $("random").onclick = random;
        $("copy").onclick = async function () {
          var text =
            colors
              .map(function (c, i) {
                return "--color-" + (i + 1) + ": " + c + ";";
              })
              .join("\n") +
            "\n--gradient: linear-gradient(" +
            $("angle").value +
            "deg, " +
            $("a").value +
            ", " +
            $("b").value +
            ");";
          await navigator.clipboard.writeText(text);
          $("status").textContent = "CSS copied ✓";
        };
        draw();
      })();
