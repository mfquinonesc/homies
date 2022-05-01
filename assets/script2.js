let btn_left = document.getElementById("btn-left");
let btn_right = document.getElementById("btn-right");
let array_card = document.getElementsByClassName("fade");


let end_index = array_card.length-1;
let index = 0;



const hideImages = () => {
    for (let i = 0; i < array_card.length; i++) {
        array_card[i].className = "slide-home fade a-hide";
    }
};

const showImageleft = () => {
    if(index > 1){       
        hideImages();   
        index--;   
        array_card[index-1].className = "slide-home fade";
        array_card[index].className = "slide-home fade";
        array_card[index +1].className = "slide-home fade";     
    }    
};

const showImageright = () => {
    if(index < (end_index-1)){
        hideImages();    
        index++;    
        array_card[index-1].className = "slide-home fade";
        array_card[index].className = "slide-home fade";
        array_card[index +1].className = "slide-home fade";
    }  
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


