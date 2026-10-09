(function () {
        "use strict";
        var type = "text",
          $ = function (x) {
            return document.getElementById(x);
          };
        function payload() {
          var v = $("value").value.trim();
          if (type === "url" && v && !/^https?:\/\//i.test(v))
            v = "https://" + v;
          if (type === "email") v = "mailto:" + v;
          if (type === "wifi") {
            var p = v.split("|");
            v =
              "WIFI:T:WPA;S:" +
              (p[0] || "Network").replace(/[;,:]/g, "\\$&") +
              ";P:" +
              (p[1] || "").replace(/[;,:]/g, "\\$&") +
              ";;";
          }
          return v;
        }
        function generate() {
          var v = payload();
          if (!v) return ($("status").textContent = "Add content first.");
          $("qr").innerHTML = "";
          if (!window.QRCode)
            return ($("status").textContent =
              "QR library could not load. Check the local network connection.");
          QRCode.toCanvas(
            v,
            {
              width: +$("size").value,
              margin: 4,
              errorCorrectionLevel: $("level").value,
              color: { dark: "#100c1e", light: "#ffffff" },
            },
            function (err, canvas) {
              if (err) return ($("status").textContent = err.message);
              $("qr").appendChild(canvas);
              $("status").textContent =
                "QR ready. Test it with another device.";
            },
          );
        }
        document.querySelectorAll("[data-type]").forEach(function (b) {
          b.onclick = function () {
            type = b.dataset.type;
            document.querySelectorAll("[data-type]").forEach(function (x) {
              x.classList.toggle("active", x === b);
            });
            $("inputLabel").textContent =
              type === "wifi"
                ? "SSID | PASSWORD"
                : type.toUpperCase() + " CONTENT";
            $("value").placeholder =
              type === "wifi" ? "Network name | password" : "Enter " + type;
            generate();
          };
        });
        $("generate").onclick = generate;
        $("value").oninput = function () {
          clearTimeout(generate.t);
          generate.t = setTimeout(generate, 350);
        };
        $("download").onclick = function () {
          var c = $("qr").querySelector("canvas");
          if (!c) return;
          $("download").textContent = "Downloaded ✓";
          var a = document.createElement("a");
          a.href = c.toDataURL("image/png");
          a.download = "linkbloom-qr.png";
          a.click();
          setTimeout(function () {
            $("download").textContent = "Download PNG";
          }, 1200);
        };
        generate();
      })();
