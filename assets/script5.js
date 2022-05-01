mapboxgl.accessToken = 'pk.eyJ1IjoibWFudWVsZnFjIiwiYSI6ImNqbTNreTZ6eTBiYzMzcHQzNTZrNGxvOTUifQ.bUgoFu7XkuKI9bjSggfnqQ';

/* */


let search_btn = document.getElementById("search-btn");
let clear_btn = document.getElementById("clear-btn");
let marker_arr = [];
let setOn = false;
let makersOn = false;
let indexMarker = 0;

let myplaces = [[2.1632793121273153 , 41.38470297326873],
[ 2.1724631957962686 , 41.37749003069899],
[2.1480714813207474 , 41.38141860755158],
[2.1632793121273153 ,41.34570297326873],
[2.1838801269480723 , 41.36644508358349],
[2.1638401269480723 , 41.32164508358349],
[2.1644541269480723 , 41.35164508358349],
[2.13263775634141 , 41.381258678056696]];



/**/

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

  let userMarker = new mapboxgl.Marker({
    color: "#D4145A"      
    });
  
  
function addMarker (event) {       
    if(!makersOn){    
        let coordinates = event.lngLat;   
        console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat); 
        userMarker.setLngLat(coordinates).addTo(map2); 
        setOn = true;
    } 
    else{
        findMarker(event);
    }    
}
  
  
 map2.on('click', addMarker);
  

/************/



const findMarker = (event)=>{   
    let lng = event.lngLat.lng;
    let lat = event.lngLat.lat;   
    let distance=[]; 
    let index=0;  
    for(let i = 0; i < myplaces.length; i++){
        let a = myplaces[i][0]-lng;
        let b = myplaces[i][1]-lat;        
        distance.push(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)));
    } 
    for(let i = 0; i < myplaces.length; i++){
        if(distance[i]<=distance[index]){
            index =  i;
        }
    }
    indexMarker = index;   
    marker_arr[indexMarker].remove();  
    marker_arr[indexMarker] = new mapboxgl.Marker({
    // color: "#662D91"    
    color: "#22B573"  
    });
    marker_arr[indexMarker].setLngLat(myplaces[indexMarker]).addTo(map2);    
}


const showPlaces = () =>  {   
    if(setOn){    
        for(let i = 0; i < myplaces.length;i++){
            marker_arr.push(new mapboxgl.Marker({
                    color: "#662D91"
                    // color: "#000000"      
                    }));
            marker_arr[i].setLngLat(myplaces[i]).addTo(map2); 
            makersOn = true;             
        }                
    }       
}

const removeMarkers = () =>{  
    if(makersOn){
        for(let i = 0; i < myplaces.length;i++){           
            marker_arr[i].remove(); 
            userMarker.remove();
            makersOn = false;    
            setOn = false;         
        }     
    }          
}

clear_btn.onclick = function() {   
    removeMarkers();
}

search_btn.onclick = function(){  
    showPlaces();
}
