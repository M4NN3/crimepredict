var basemaps = {
    Grayscale: L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
      //maxZoom: 18
    }),
    Streets: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      zoom: 20
    }),
    Stelite: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
    //Rios: L.geoJson(rio),
  };

  var groups = {
    iPlaces: new L.LayerGroup(),
  };
  window.qLayers = {
    LayerGroups: groups,
    Basemaps: basemaps,
  };

function popup(feature, layer) {
    var att= feature.properties;
    if (feature.properties && att.nombre) {
            layer.bindPopup(att.nombre, {permanent: false});
            //layer.bindPopup('<input type="text" name="" id="txtColor">');
    }
};
var parroquiasLayer = L.geoJson(parroquias, {onEachFeature: popup});

//clustering
var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < eventosReales.length; ++i )
  {
    var popup = "<b>Evento</b>: " + eventosReales[i].evento + "<br>"+
                " <b> Sector: </b >" + eventosReales[i].sector;
    var m = L.marker( [eventosReales[i].x, eventosReales[i].y])
                    .bindPopup( popup );
  
    markerClusters.addLayer( m );
  }

var groupedOverlays = {
    "Layers": {
      "Parroquias": parroquiasLayer
    },
    "Clustering": {
      "Eventos": markerClusters,
    }
  };
L.control.groupedLayers(basemaps, groupedOverlays).addTo(map);
