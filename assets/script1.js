

mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWVsZnFjIiwiYSI6ImNqbTNreTZ6eTBiYzMzcHQzNTZrNGxvOTUifQ.bUgoFu7XkuKI9bjSggfnqQ'; // Nuestro Token de acceso
var map = new mapboxgl.Map({
    container: 'map', // id del contenedor
    style: 'mapbox://styles/mapbox/streets-v9', // localización del mapa de estilo
    center: [2.168,41.381], // Posición inicial
    zoom: 13 // Zoom inicial
});



var marker = new mapboxgl.Marker();

function add_marker (event) {
  var coordinates = event.lngLat;
  console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat); 
  marker.setLngLat(coordinates).addTo(map);
}

map.on('click', add_marker);


