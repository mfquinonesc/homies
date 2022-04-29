

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

