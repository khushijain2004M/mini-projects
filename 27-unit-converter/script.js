(function () {
        "use strict";
        var sets = {
            Length: {
              m: 1,
              km: 1000,
              cm: 0.01,
              mm: 0.001,
              in: 0.0254,
              ft: 0.3048,
              mi: 1609.344,
            },
            Mass: { kg: 1, g: 0.001, lb: 0.45359237, oz: 0.0283495 },
            Speed: { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, knot: 0.514444 },
            Storage: {
              B: 1,
              KB: 1000,
              MB: 1e6,
              GB: 1e9,
              KiB: 1024,
              MiB: 1048576,
              GiB: 1073741824,
            },
          },
          $ = function (x) {
            return document.getElementById(x);
          },
          lock = false;
        function fill() {
          var c = $("category").value,
            u = c === "Temperature" ? ["°C", "°F", "K"] : Object.keys(sets[c]);
          $("from").innerHTML = $("to").innerHTML = "";
          u.forEach(function (x) {
            $("from").add(new Option(x, x));
            $("to").add(new Option(x, x));
          });
          $("to").selectedIndex = 1;
          convert("left");
        }
        function conv(v, from, to, c) {
          if (c === "Temperature") {
            var k =
              from === "°C"
                ? v + 273.15
                : from === "°F"
                  ? ((v - 32) * 5) / 9 + 273.15
                  : v;
            return to === "°C"
              ? k - 273.15
              : to === "°F"
                ? ((k - 273.15) * 9) / 5 + 32
                : k;
          }
          return (v * sets[c][from]) / sets[c][to];
        }
        function convert(side) {
          if (lock) return;
          lock = true;
          var source = side === "left" ? $("left") : $("right"),
            target = side === "left" ? $("right") : $("left"),
            from = side === "left" ? $("from").value : $("to").value,
            to = side === "left" ? $("to").value : $("from").value,
            c = $("category").value,
            v = Number(source.value);
          if (!Number.isFinite(v)) {
            $("status").textContent = "Enter a valid number.";
            target.value = "";
          } else {
            var r = conv(v, from, to, c);
            target.value =
              Math.abs(r) >= 1e9 ? r.toExponential(6) : Number(r.toFixed(8));
            $("formula").textContent =
              v + " " + from + " = " + target.value + " " + to;
            $("status").textContent =
              c === "Storage"
                ? "Decimal units use 1000; binary units use 1024."
                : "";
          }
          lock = false;
        }
        $("category").onchange = fill;
        ["from", "to"].forEach(function (id) {
          $(id).onchange = function () {
            convert("left");
          };
        });
        $("left").oninput = function () {
          convert("left");
        };
        $("right").oninput = function () {
          convert("right");
        };
        $("swap").onclick = function () {
          var x = $("from").value;
          $("from").value = $("to").value;
          $("to").value = x;
          convert("left");
        };
        fill();
      })();
