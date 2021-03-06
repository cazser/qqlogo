const playButton = document.querySelector('.play')
const csscode =
    ` #qq {
        position: relative;
        width: 420 px;
        height: 400 px;
        margin: 0 auto;
        margin-top: 230 px;
        display: block;
    }
    
    .head {
        position: absolute;
        top: 18px;
        left: 96px;
        width: 234px;
        height: 185px;
        border: 1px solid #000;
        border-top-left-radius: 117px 117px;
        border-top-right-radius: 117px 117px;
        border-bottom-left-radius: 117px 68px;
        border-bottom-right-radius: 117px 68px;
        z-index: 10;
        background-color: #000;
    }
    
    .eye {
        width: 44px;
        height: 66px;
        border: 1px solid #000;
        border-radius: 50% 50%;
        position: absolute;
        background: #fff;
    }
    
    .left.eye {
        left: 62px;
        top: 50px;
    }
    
    .eyelipLeftTop,
    .eyelipRightTop {
        top: -2px;
        left: -2px;
        display: none;
    }
    
    .eyelipLeftBottom,
    .eyelipRightBottom {
        bottom: -2px;
        left: -2px;
        display: none;
    }
    
    .innerLeftEye {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 18px;
        height: 24px;
        border-radius: 50%;
        border: 1 px solid #000;
        background: #000;
    }
    
    .innerLeftEye:before {
        content: "";
        position: absolute;
        width: 3px;
        height: 4px;
        background: white;
        z-index: 11;
        top: 14px;
        left: 4px;
        border-radius: 50%;
    }
    
    .innerLeftEye:after {
        content: "";
        position: absolute;
        width: 6px;
        height: 8px;
        background: white;
        z-index: 11;
        top: 6px;
        left: 9px;
        border-radius: 50%;
    }
    
    .right.eye {
        left: 123px;
        top: 50px;
    }
    
    .innerRightEye {
        position: absolute;
        width: 18px;
        height: 20px;
        top: 20px;
        left: 8px;
        border-top-left-radius: 50% 90%;
        border-top-right-radius: 50% 90%;
        border-bottom-left-radius: 50% 10%;
        border-bottom-right-radius: 50% 10%;
        background: black;
        box-shadow: 0 -1px 2px black;
    }
    
    .innerRightEye:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 13px;
        bottom: -1px;
        left: 4px;
        border-top-left-radius: 50% 100%;
        border-top-right-radius: 35% 80%;
        background: white;
    }
    
    .fix {
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: black;
        top: 17px;
    }
    
    .fix:after {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: black;
        top: 0;
        left: 14px;
    }
    
    .mouthTopContainer {
        position: absolute;
        width: 158px;
        height: 29px;
        z-index: 1;
        top: 120px;
        left: 39px;
        overflow: hidden;
    }
    
    .mouthTop {
        width: 158px;
        height: 34px;
        position: absolute;
        z-index: 1;
        border: 1px solid #FFA600;
        background: #FFA600;
        top: 0;
        left: 0;
        border-top-left-radius: 45% 34px;
        border-top-right-radius: 45% 34px;
        /* background-color: #FFA600; */
    }
    
    .mouthBottomContainer {
        position: absolute;
        width: 158px;
        height: 15px;
        z-index: 1;
        top: 146px;
        left: 39px;
        overflow: hidden;
    }
    
    .mouthBottom {
        width: 158px;
        height: 24px;
        position: absolute;
        z-index: 1;
        border: 1px solid #FFA600;
        background: #FFA600;
        border-top: none;
        top: -4px;
        left: 0;
        border-bottom-left-radius: 45% 24px;
        border-bottom-right-radius: 45% 24px;
        background-color: #FFA600;
    }
    
    .lips {
        border: 1px solid #FFA600;
        background: #FFA600;
        width: 116px;
        height: 24px;
        position: absolute;
        top: 146px;
        left: 60px;
        border-top: none;
        border-bottom-left-radius: 50% 100%;
        border-bottom-right-radius: 50% 100%;
    }
    
    .lipShadow {
        width: 0px;
        height: 0px;
        position: absolute;
        z-index: 2;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-right: 8px solid black;
        -webkit-transform-origin: top right;
        -webkit-transform: rotate( -60deg);
        -moz-transform-origin: top right;
        -moz-transform: rotate(-60deg);
        -o-transform-origin: top right;
        -o-transform: rotate(-60deg);
        transform-origin: top right;
        transform: rotate(-60deg);
        left: -12px;
        top: 4px;
    }
    
    .lipShadow.right {
        left: 114px;
        -webkit-transform: rotate( 60deg) rotateY( 180deg);
        -moz-transform: rotate(60deg) rotateY(180deg);
        -o-transform: rotate(60deg) rotateY(180deg);
        transform: rotate(60deg) rotateY(180deg);
    }
    
    .body {
        width: 326px;
        height: 300px;
        /* border: 1
px
 solid black; */
        top: 135px;
        left: 48px;
        position: absolute;
    }
    
    .innerWrapper {
        position: absolute;
        overflow: hidden;
        width: 280px;
        height: 200px;
        left: 30px;
        top: 76px;
    }
    
    .inner {
        border: 1px solid #000;
        width: 218px;
        position: absolute;
        height: 210px;
        border-radius: 50%;
        left: 25px;
        top: -71px;
        z-index: 4;
        background: #fff;
    }
    
    .outterWrapper {
        width: 262px;
        left: 32px;
        height: 250px;
        position: absolute;
        top: 54px;
        overflow: hidden;
    }
    
    .outter {
        border: 1px solid #000;
        width: 260px;
        height: 250px;
        border-radius: 125px;
        position: absolute;
        top: -84px;
        z-index: 3;
        background: #000;
    }
    
    .scarf {
        border: 4px solid #000;
        position: absolute;
        background: #FB0009;
        z-index: 5;
        width: 258px;
        height: 110px;
        top: -2px;
        left: 34px;
        border-top-left-radius: 30px 34px;
        border-top-right-radius: 38px 34px;
        border-bottom-left-radius: 50% 76px;
        border-bottom-right-radius: 50% 76px;
        border-top: none;
    }
    
    .scarfShadow {
        position: absolute;
        border-top: 6px solid #000;
        width: 60px;
        height: 70px;
        top: 0px;
        left: 6px;
        border-top-left-radius: 90px 120px;
        border-top-right-radius: 30px 30px;
        -webkit-transform: rotate( -79deg);
        -moz-transform: rotate(-79deg);
        -o-transform: rotate(-79deg);
        transform: rotate(-79deg);
    }
    
    .scarfShadowRight {
        position: absolute;
        border-right: 6px solid black;
        width: 100px;
        height: 70px;
        top: 8px;
        left: 143px;
        border-bottom-right-radius: 70px 70px;
        z-index: 6;
    }
    
    .scarfEnd {
        position: absolute;
        width: 52px;
        height: 64px;
        z-index: 4;
        top: 90px;
        border: 3px solid black;
        left: 74px;
        border-bottom-left-radius: 50% 43%;
        border-bottom-right-radius: 15px;
        border-top-left-radius: 20% 57%;
        background: #FB0009;
    }
    
    .scarfEndShadow {
        position: absolute;
        border-top: 6px solid black;
        width: 20px;
        height: 20px;
        top: 6px;
        left: 12px;
        border-top-left-radius: 30px 30px;
        -webkit-transform-origin: top right;
        -moz-transform-origin: top right;
        -o-transform-origin: top right;
        transform-origin: top right;
        z-index: 10;
        -webkit-transform: skewX( 4deg) scaleY(1.5) rotate( -60deg);
        -moz-transform: skewX(4deg) scaleY(1.5) rotate(-60deg);
        -o-transform: skewX(4deg) scaleY(1.5) rotate(-60deg);
        transform: skewX(4deg) scaleY(1.5) rotate(-60deg);
    }
    
    .handWrapper {
        position: absolute;
        top: 219px;
        left: 7px;
    }
    
    .leftHandTopContainer {
        width: 118px;
        height: 26px;
        position: absolute;
        z-index: 1;
        top: 55px;
        left: 50px;
        -webkit-transform-origin: bottom left;
        -webkit-transform: rotate( -70deg);
        -moz-transform-origin: bottom left;
        -moz-transform: rotate(-70deg);
        -o-transform-origin: bottom left;
        -o-transform: rotate(-70deg);
        transform-origin: bottom left;
        transform: rotate(-70deg);
        overflow: hidden;
    }
    
    .leftHandTop {
        width: 128px;
        height: 54px;
        border: 1px solid #050346;
        position: absolute;
        border-top-left-radius: 44% 38px;
        border-top-right-radius: 56% 33px;
        background: #000;
    }
    
    .leftHandBottomContainer {
        width: 115px;
        height: 30px;
        position: absolute;
        z-index: 1;
        top: 78px;
        left: 50px;
        -webkit-transform-origin: top left;
        -webkit-transform: rotate( -70deg);
        -moz-transform-origin: top left;
        -moz-transform: rotate(-70deg);
        -o-transform-origin: top left;
        -o-transform: rotate(-70deg);
        transform-origin: top left;
        transform: rotate(-70deg);
        overflow: hidden;
    }
    
    .leftHandBottom {
        width: 128px;
        height: 44px;
        border: 1px solid #050346;
        background: #000;
        border-top: none;
        position: absolute;
        border-bottom-left-radius: 48% 20px;
        border-bottom-right-radius: 52% 23px;
        top: -26px;
    }
    
    .rightHandTopContainer {
        width: 118px;
        height: 34px;
        position: absolute;
        z-index: 3;
        top: 47px;
        left: 240px;
        -webkit-transform-origin: bottom right;
        -webkit-transform: rotate( 65deg);
        -moz-transform-origin: bottom right;
        -moz-transform: rotate(65deg);
        -o-transform-origin: bottom right;
        -o-transform: rotate(65deg);
        transform-origin: bottom right;
        transform: rotate(65deg);
        overflow: hidden;
    }
    
    .rightHandTop {
        width: 148px;
        height: 54px;
        border: 1px solid #050346;
        position: absolute;
        border-top-right-radius: 41% 54px;
        border-top-left-radius: 59% 48px;
        background: black;
        left: -30px;
        -webkit-transform: rotateY( -180deg);
        -moz-transform: rotateY(-180deg);
        -o-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
    }
    
    .rightHandBottomContainer {
        width: 110px;
        height: 58px;
        position: absolute;
        z-index: 1;
        top: 81px;
        left: 248px;
        -webkit-transform-origin: top right;
        -webkit-transform: rotate( 90deg);
        -moz-transform-origin: top right;
        -moz-transform: rotate(90deg);
        -o-transform-origin: top right;
        -o-transform: rotate(90deg);
        transform-origin: top right;
        transform: rotate(90deg);
        overflow: hidden;
    }
    
    .rightHandBottom {
        width: 68px;
        height: 28px;
        border: 1px solid #000;
        background: black;
        border-top: none;
        position: absolute;
        top: 1px;
        left: 38px;
        border-bottom-right-radius: 100% 40px;
        z-index: 999;
    }
    
    .footWrapper {
        position: absolute;
        top: 292px;
        left: 80px;
    }
    
    .leftFootTopWrapper {
        position: absolute;
        width: 130px;
        top: 16px;
        left: -1px;
        height: 37px;
        overflow: hidden;
        z-index: 2;
    }
    
    .leftFootTop {
        position: absolute;
        width: 120px;
        height: 60px;
        border: 4px solid black;
        background: #FF9C00;
        border-top-left-radius: 80% 70%;
        top: -10px;
        left: 3px;
    }
    
    .leftFootBottomWrapper {
        position: absolute;
        width: 130px;
        top: 52px;
        left: -1px;
        height: 38px;
        overflow: hidden;
        z-index: 2;
    }
    
    .leftFootBottom {
        position: absolute;
        width: 120px;
        height: 60px;
        border: 4px solid #000;
        background: #FF9C00;
        border-top-left-radius: 50% 44%;
        border-top-right-radius: 50% 44%;
        border-bottom-left-radius: 50% 56%;
        border-bottom-right-radius: 50% 56%;
        top: -30px;
        left: 3px;
    }
    
    .toe {
        position: absolute;
        border-top: 4px solid black;
        width: 25px;
        height: 20px;
        top: 50px;
        left: 2px;
        border-top-right-radius: 30px 30px;
        border-top-left-radius: 10px 10px;
        -webkit-transform-origin: top left;
        -moz-transform-origin: top left;
        -o-transform-origin: top left;
        transform-origin: top left;
        z-index: 10;
        -webkit-transform: rotate( -45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    
    .rightFootTopWrapper {
        position: absolute;
        width: 134px;
        top: 22px;
        left: 134px;
        height: 36px;
        overflow: hidden;
        z-index: 2;
    }
    
    .rightFootTop {
        position: absolute;
        width: 120px;
        height: 60px;
        border: 4px solid black;
        background: #FF9C00;
        border-top-right-radius: 32% 65%;
        top: 0px;
        left: 4px;
    }
    
    .rightFootBottomWrapper {
        position: absolute;
        width: 134px;
        top: 52px;
        left: 134px;
        height: 38px;
        overflow: hidden;
    }
    
    .rightFootBottom {
        position: absolute;
        width: 120px;
        height: 60px;
        border: 4px solid #000;
        background: #FF9C00;
        border-top-left-radius: 50% 56%;
        border-top-right-radius: 50% 56%;
        border-bottom-left-radius: 50% 44%;
        border-bottom-right-radius: 50% 44%;
        top: -30px;
        left: 3px;
    }
    
    .toe.right {
        -webkit-transform: rotate( 45deg) rotateY( 180deg);
        -moz-transform: rotate(45deg) rotateY(180deg);
        -o-transform: rotate(45deg) rotateY(180deg);
        transform: rotate(45deg) rotateY(180deg);
        left: 260px;
    }
`
const code = document.querySelector('.code')
const paddingCode = document.querySelector('.paddingCode')
const length = csscode.length;
let n = 0;
let link = document.querySelector("head>link")
playButton.addEventListener("click", () => {
    link.remove();
    let intevalId =
        setInterval(() => {
            if (n <= length) {
                code.textContent = csscode.slice(0, n);
                paddingCode.innerHTML = csscode.slice(0, n);
                n += 3;
            } else {
                window.clearInterval(intevalId)
                document.head.appendChild(link)
            }
        }, 1);
})