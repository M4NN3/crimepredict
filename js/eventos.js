var map = L.map( 'map', {
        center: [20.0, 5.0],
        minZoom: 2,
        zoom: 2
        })
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map)
map.attributionControl.setPrefix(''); 
 
  var quevedo = new L.LatLng(-1.0469474, -79.4837666); // geographical point (longitude and latitude)
 map.setView(quevedo, 20);

//L.marker([-1.0125, -79.46922]).addTo(map).bindPopup('Programando ando...');

//for (var i = 0; i<5; i++) {
//  L.marker([-1.0125+i, -79.46922+i]).addTo(map).bindPopup('Programando ando...'+i);
//}
var marker;
for ( var i = 0; i < facultades.length; ++i )
{
  var popup = facultades[i].evento;
  marker = L.marker( [facultades[i].latitud, facultades[i].longitud], {icon: myIcon}).bindTooltip( popup );
  map.addLayer(marker);
}

