

mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWVsZnFjIiwiYSI6ImNqbTNreTZ6eTBiYzMzcHQzNTZrNGxvOTUifQ.bUgoFu7XkuKI9bjSggfnqQ'; // Nuestro Token de acceso
var map = new mapboxgl.Map({
    container: 'map', // id del contenedor
    style: 'mapbox://styles/mapbox/streets-v9', // localización del mapa de estilo
    center: [2.168,41.381], // Posición inicial
    zoom: 13 // Zoom inicial
});

let input_direction = document.getElementById("direction");
let sqrt_maps = document.getElementById("sqrt_maps");
let form_maps = document.getElementById("form_maps");


var marker = new mapboxgl.Marker();

function add_marker (event) {
  var coordinates = event.lngLat;
  console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat); 
  marker.setLngLat(coordinates).addTo(map);
}


const hideform = () => {  
  // sqrt_maps.className = "fademap profile-sctn-middle-map";
  // form_maps.className = "fademap profile-sctn-middle map-hide";
};

map.on('click', add_marker);

input_direction.onfocus = function(){
  hideform();
};
