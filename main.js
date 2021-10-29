let play = document.querySelector(".play")

let bar = document.querySelector(".bar")


let link = document.querySelector("link")
let part = new Array(20);

function doPlay() {
    if (link) {
        link.remove();
    }


    for (let i = 1; i <= 20; i++) {
        part[i - 1] = document.createElement("link");
        part[i - 1].rel = "stylesheet"
        part[i - 1].href = `./css/step${i}.css`
        setTimeout(() => {
            document.head.appendChild(part[i - 1])
            bar.value = (i * 5).toString();
        }, 1000 * i);

    }
}


play.addEventListener("click", doPlay);