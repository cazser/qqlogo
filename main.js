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
        document.head.appendChild(part)
    }
}


play.addEventListener("click", doPlay);