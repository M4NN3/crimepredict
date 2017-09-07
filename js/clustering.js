var quevedo = new L.LatLng(-1.0126, -79.46956);
var map = L.map( 'map', {
        minZoom: 11,
        zoom: 11
        }).setView(quevedo,11);
         // add a tile layer to add to our map, in this case it's the 'standard' OpenStreetMap.org tile server
 //L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
   //attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
// }).addTo(map)
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osm = new L.tileLayer(osmUrl).addTo(map);
var osm2 =  new L.TileLayer(osmUrl);
var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true}).addTo(map);
map.attributionControl.setPrefix('Powered by Leaflet & OSM'); // Don't show the 'Powered by Leaflet' text. Attribution overload
//var countriesLayer = L.geoJson(countries).addTo(map)

 //map.attributionControl.setPrefix('')
 //L.marker([-1.01257, -79.46922], {icon: myIcon}).addTo(map).bindPopup('Programando ando...')
 
var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < eventosReales.length; ++i )
  {
    var popup = "<b>Evento</b>: " + eventosReales[i].evento + "<br>"+
                " <b> Sector: </b >" + eventosReales[i].sector;
    var m = L.marker( [eventosReales[i].x, eventosReales[i].y])
                    .bindPopup( popup );
  
    markerClusters.addLayer( m );
  }
  var sidebar = L.control.sidebar('sidebar',{position: 'right'}).addTo(map);
map.addLayer( markerClusters );