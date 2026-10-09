(function () {
        "use strict";
        var $ = function (x) {
            return document.getElementById(x);
          },
          source = null,
          originalUrl = null,
          resultUrl = null,
          fileName = "image";
        function process() {
          if (!source) return;
          var w = Math.max(1, +$("width").value),
            h = Math.max(1, +$("height").value),
            canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          var ctx = canvas.getContext("2d");
          if ($("format").value === "image/jpeg") {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, w, h);
          }
          ctx.drawImage(source, 0, 0, w, h);
          canvas.toBlob(
            function (blob) {
              if (!blob)
                return ($("status").textContent =
                  "This browser could not encode the selected format.");
              if (resultUrl) URL.revokeObjectURL(resultUrl);
              resultUrl = URL.createObjectURL(blob);
              $("processed").src = resultUrl;
              $("meta").textContent =
                w + "×" + h + " · " + (blob.size / 1024).toFixed(1) + " KB";
              $("status").textContent = "";
            },
            $("format").value,
            +$("quality").value,
          );
        }
        $("file").onchange = function () {
          var f = this.files[0];
          if (!f) return;
          if (f.size > 15 * 1024 * 1024)
            return ($("status").textContent = "Choose an image under 15 MB.");
          fileName = f.name.replace(/\.[^.]+$/, "");
          if (originalUrl) URL.revokeObjectURL(originalUrl);
          originalUrl = URL.createObjectURL(f);
          var img = new Image();
          img.onload = function () {
            source = img;
            $("original").src = originalUrl;
            $("width").value = img.naturalWidth;
            $("height").value = img.naturalHeight;
            $("workspace").hidden = false;
            process();
          };
          img.onerror = function () {
            $("status").textContent = "The image could not be decoded.";
          };
          img.src = originalUrl;
        };
        ["width", "height", "format", "quality"].forEach(function (id) {
          $(id).oninput = function () {
            clearTimeout(process.t);
            process.t = setTimeout(process, 200);
          };
        });
        $("download").onclick = function () {
          if (!resultUrl) return;
          var ext = $("format").value.split("/")[1],
            link = document.createElement("a");
          link.href = resultUrl;
          link.download = fileName + "-compressed." + ext;
          link.click();
        };
        $("drop").ondragover = function (e) {
          e.preventDefault();
        };
        $("drop").ondrop = function (e) {
          e.preventDefault();
          $("file").files = e.dataTransfer.files;
          $("file").onchange();
        };
        addEventListener("beforeunload", function () {
          [originalUrl, resultUrl].forEach(function (x) {
            if (x) URL.revokeObjectURL(x);
          });
        });
      })();
