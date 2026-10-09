(function () {
        "use strict";
        var $ = function (x) {
            return document.getElementById(x);
          },
          value = null;
        function parse() {
          try {
            value = JSON.parse($("input").value);
            $("status").className = "status good";
            $("status").textContent =
              "Valid JSON · " + new Blob([$("input").value]).size + " bytes";
            return true;
          } catch (e) {
            value = null;
            $("status").className = "status bad";
            $("status").textContent = "Invalid JSON: " + e.message;
            $("output").textContent = "";
            return false;
          }
        }
        $("format").onclick = function () {
          if (parse()) $("output").textContent = JSON.stringify(value, null, 2);
        };
        $("minify").onclick = function () {
          if (parse()) $("output").textContent = JSON.stringify(value);
        };
        $("copy").onclick = async function () {
          if (!$("output").textContent) return;
          try {
            await navigator.clipboard.writeText($("output").textContent);
            $("status").textContent = "Output copied ✓";
          } catch (e) {
            $("status").textContent = "Clipboard blocked.";
          }
        };
        $("sample").onclick = function () {
          $("input").value = JSON.stringify(
            {
              project: "DataLens",
              ready: true,
              tags: ["local", "safe", "fast"],
              metrics: { items: 30, version: 1 },
            },
            null,
            2,
          );
          $("format").click();
        };
        $("clear").onclick = function () {
          $("input").value = "";
          $("output").textContent = "";
          $("status").textContent = "";
        };
        $("input").oninput = function () {
          clearTimeout(parse.t);
          parse.t = setTimeout(parse, 300);
        };
        $("sample").click();
      })();
