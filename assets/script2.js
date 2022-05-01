let btn_left = document.getElementById("btn-left");
let btn_right = document.getElementById("btn-right");
let array_card = document.getElementsByClassName("fade");


let start_index = 0;
let end_index = array_card.length-1;
let index = 0;
let length = array_card.length;


let array_index = [];
for(let i =0; i<length; i++){
    array_index.push(i);
}

array_index = array_index.concat(array_index);
array_index = array_index.concat(array_index);
alert(array_index);

const hideImages = () => {
    for (let i = 0; i < array_card.length; i++) {
        array_card[i].className = "slide-home fade a-hide";
    }
};

const showImageleft = () => {
    hideImages();   
    index--;
    if (index < start_index) {
        index = end_index;
    }
    array_card[array_index[index+length-1]].className = "slide-home fade";
    array_card[array_index[index+length]].className = "slide-home fade";
    array_card[array_index[index+length+1]].className = "slide-home fade";
};

const showImageright = () => {
    hideImages();
    index++;
    if (index > end_index) {
        index = start_index;
    }
    array_card[array_index[index+length-1]].className = "slide-home fade";
    array_card[array_index[index+length]].className = "slide-home fade";
    array_card[array_index[index+length+1]].className = "slide-home fade";
};


btn_right.onclick = function () {
  
        showImageright();
    
    
}


btn_left.onclick = function () {
    if(index !=0){
        showImageleft();
    }    
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


