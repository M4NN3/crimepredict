
L.control.scale().addTo(map);

map.setView(quevedo, 13);
map.removeLayer(mark);
var marker ;
var resultad= $('#txtResultado');
 var lati = $('#txtLat');
 var longi = $('#txtLng');
 var ban=true;
 map.on('click', function(e){
    if (ban) {
      $( "#txtLat" ).removeClass( "is-danger" ).addClass( "is-info" );
      $( "#txtLng" ).removeClass( "is-danger" ).addClass( "is-info" );
    marker	= new L.marker(e.latlng,{draggable:true})  //o L.circle
    	.bindPopup('<b>Latitud: </b> ' + e.latlng.lat.toString() + '<br>'+
      	'<b> Longitud: </b>' + e.latlng.lng.toString());
      	map.addLayer(marker);
    	lati.val((e.latlng.lat.toString()).substring(0,10));
      longi.val(e.latlng.lng.toString().substring(0,10)); // ó document.getElementById('log').value 
    	ban=false;
    }
    marker.on('drag', function (e) {
      	var mark = e.target;
 		     lati.val(e.latlng.lat.toString().substring(0,10));
         longi.val(e.latlng.lng.toString().substring(0,10));
 	});
 	//marker.on('dblclick', function (e){
 		//map.removeLayer(marker);
 		//ban=true;
 	//})
});
//map.on('popupclose', function (e) {
  //  alert(e.popup._source._myId);
//});

$('#reLocate').click(function(){ //funcion para re-localizar
     var quevedo = new L.LatLng(-1.0126, -79.46956);
	   map.setView(quevedo, 15);
});

$('#delMark').click(function(){ //funcion para eliminar
  //$("#delMark").addClass('is-loading');    
  if (marker!=null) {
    map.removeLayer(marker);
   ban=true;
   limpiarCajas();
 }
});


function limpiarCajas(){
   lati.val('');
    longi.val('');
    resultad.val('');
}