!function(){var t={Start:document.querySelector("[data-start]"),Stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};console.log(t.Start);var o=null;t.Start.addEventListener("click",(function(){o=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),console.log("fdaa")}),1e3)})),t.Stop.addEventListener("click",(function(){clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.63f37723.js.map
