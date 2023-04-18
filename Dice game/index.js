var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomNumber1x = randomNumber1.toString();
var randomNumber2x = randomNumber2.toString();
window.onload = makeRandomImg();

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        makeRandomImg();
    }
}

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}



function makeRandomImg(){
    document.querySelectorAll("img")[0].setAttribute("src",`images\\dice${randomNumber1x}.png`)
    document.querySelectorAll("img")[1].setAttribute("src",`images\\dice${randomNumber2x}.png`)
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerText = "🚩Player 1 wins!";
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerText = "Player 2 wins!🚩";
    }else{
        document.querySelector("h1").innerText = "Draw!";
    }
} 
