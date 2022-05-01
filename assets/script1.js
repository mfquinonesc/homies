mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWVsZnFjIiwiYSI6ImNqbTNreTZ6eTBiYzMzcHQzNTZrNGxvOTUifQ.bUgoFu7XkuKI9bjSggfnqQ'; // Nuestro Token de acceso
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









let map2 = new mapboxgl.Map({
  container: 'map2', // id del contenedor
  style: 'mapbox://styles/mapbox/streets-v9', // localización del mapa de estilo
  center: [2.168,41.381], // Posición inicial
  zoom: 13 // Zoom inicial
});

map2.addControl(
  new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
  })
  );

map2.addControl(new mapboxgl.NavigationControl());


function add_points (event) {
  let coordinates = [2.153 , 41.384];
  let marker1 = new mapboxgl.Marker({
    color: "#D4145A"    
    });
    marker1.setLngLat(coordinates).addTo(map2); 
}


map2.on('click', add_points);



let direction="";

let marker = new mapboxgl.Marker({
  color: "#D4145A",
  draggable: true
  });

function add_marker (event) {
  let coordinates = event.lngLat;
  console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat); 
  direction= (coordinates.lng + "," + coordinates.lat);  
  marker.setLngLat(coordinates).addTo(map); 
  //++++++++++++++++++++
  coordinates = [ 2.153 , 41.384];
  let marker1 = new mapboxgl.Marker({
    color: "#000000"    
    });
   marker1.setLngLat(coordinates).addTo(map);  
}

map.on('click', add_marker);



const arr = [[3,3],[5,-1],[-2,4]];

const num = 2;



const closestPoints = (arr = [], num = 1) => {
   arr.sort(([a, b], [c, d]) => {
      return Math.sqrt(a * a + b * b) - Math.sqrt(c * c + d * d);
   });
   return arr.slice(0,1);
};


console.log(closestPoints(arr, num));

//Con nuestra ayuda  prodras encontrar un lugar agradable para vivir rodeado de personas que se lleven bien contigo.