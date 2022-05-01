mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWVsZnFjIiwiYSI6ImNqbTNreTZ6eTBiYzMzcHQzNTZrNGxvOTUifQ.bUgoFu7XkuKI9bjSggfnqQ'; // Nuestro Token de acceso

let directionStr = "";

let map = new mapboxgl.Map({
    container: 'map', // id del contenedor
    style: 'mapbox://styles/mapbox/streets-v9', // localización del mapa de estilo
    center: [2.168,41.381], // Posición inicial
    zoom: 13 // Zoom inicial
});

map.addControl( 
  new MapboxGeocoder({
  accessToken: mapboxgl.accessToken  
})
  );

map.addControl(new mapboxgl.NavigationControl());

let marker = new mapboxgl.Marker({
  color: "#662D91", 
  });

function add_marker (event) {
    let coordinates = event.lngLat;
    console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat); 
    directionStr= (coordinates.lng + "," + coordinates.lat);  
    marker.setLngLat(coordinates).addTo(map);  
  }
  
 map.on('click', add_marker);
  








