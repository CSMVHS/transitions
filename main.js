const codeEl = document.querySelector("code");
const allOthers = document.querySelectorAll(":not(code)");

codeEl.addEventListener("click", () => {
    codeEl.style.position = "fixed";
    codeEl.style.top = "20px";
    codeEl.style.left = "0";
    codeEl.style.width = "100%";
    codeEl.style.background = "black";
    document.body.style.marginTop = "100px";
})
