!function(){var t={Start:document.querySelector("[data-start]"),Stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};console.log(t.Start),t.Stop.setAttribute("disabled","");var e=null;t.Start.addEventListener("click",(function(){t.Start.setAttribute("disabled",!0),t.Stop.removeAttribute("disabled"),e=setInterval((function(e){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),console.log("fdaa")}),1e3)})),t.Stop.addEventListener("click",(function(o){t.Stop.setAttribute("disabled",!0),t.Start.removeAttribute("disabled"),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.416f42d7.js.map