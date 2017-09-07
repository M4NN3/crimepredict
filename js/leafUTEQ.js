var map = new L.map( 'map', {
        center: [20.0, 5.0],
        minZoom: 2,
        zoom: 2
        })

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osm = new L.tileLayer(osmUrl).addTo(map);
var osm2 =  new L.TileLayer(osmUrl);
var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);

 map.attributionControl.setPrefix('Powered by Leflet & OSM | Developed by MR');
 var mark = L.marker([-1.01257, -79.46922]).bindPopup('UTEQ - Quevedo - Ecuador'); //bindTooltip
 map.addLayer(mark);

 //map.attributionControl.setPrefix(''); // No muestra el 'Powered by Leaflet'.
 var quevedo = new L.LatLng(-1.0126, -79.46956);
 map.setView(quevedo, 20);
