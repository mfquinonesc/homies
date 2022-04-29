let btn_left = document.getElementById("btn-left");
let btn_right = document.getElementById("btn-right");
let array_card = document.getElementsByClassName("fade");

let option = 1;
let start_index = 0;
let end_index = 4;
let index = 1;



const hideImages = () => {
    for (let i = 0; i < array_card.length; i++) {
        array_card[i].className = "slide-home fade a-hide";
    }
};

const showImageleft = () => {
    hideImages();   
    index--;
    if (index <= start_index) {
        index = end_index;
    }
    array_card[index].className = "slide-home fade";
};

const showImageright = () => {
    hideImages();
    index++;
    if (index > end_index) {
        index = start_index;
    }
    array_card[index].className = "slide-home fade";
};


btn_right.onclick = function () {
    showImageright();
}


btn_left.onclick = function () {
    showImageleft();
}


























function initMap() {
    const uluru = { lat: 4.663301710729868, lng: -74.10410261942569 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: uluru,
    });

    myMap = map;

    var myMarker = new google.maps.Marker({
        position: uluru,
        map: map,
        draggable: true
    });

    console.log(myMarker.position)
  
}   


window.initMap = initMap;


