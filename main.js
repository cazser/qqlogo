let play = document.querySelector(".play")

let bar = document.querySelector(".bar")


let link = document.querySelector("link")

function doPlay() {
    if (link) {
        link.remove();
    }


    for (let i = 1; i <= 20; i++) {
        let part = document.createElement("link");
        part.rel = "stylesheet"
        part.href = `./css/step${i}.css`
        setTimeout(() => { document.head.appendChild(part) }, 1000 * i);
    }
}


play.addEventListener("click", doPlay);