let array_home = document.getElementsByClassName("fade");
let button_right = document.getElementById("button-right");
let button_left = document.getElementById("button-left");



let index = 2;
let array_display = [0,1,2];


const hideCards = () => {
    for (let i = 0; i < array_home.length; i++) {
        array_home[i].className = "fade slide-home-hide";
    }
};


const showCards = () =>{
    array_home[array_display[0]].className =  "fade slide-home";
    array_home[array_display[1]].className =  "fade slide-home";
    array_home[array_display[2]].className =  "fade slide-home";
};


button_left.onclick = function(){
    hideCards();
    showCards();
}


button_right.onclick = function(){
    hideCards();
    showCards();
}