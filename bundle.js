const $ = require('jquery');

const brain = require('brain');


var net = new brain.NeuralNetwork(); // NNET
var latitude; // latidud
var longitude; //longirud
var creaModelo = true;
var value=[];   //USADO EN CRIMESTRICKS
var crimesTricks=[]; //  // CONTIENE LOS INPUTS Y OUTPUTS MODIFICADOS A MI CONVENIENCIA
var filasBody=''; // agrega filas a la tabla (sobre los resultados)
var indexRow = 1;
$('#btnPredecir').click(function(){
    //$("#btnPredecir").addClass('is-loading');    
  latitude =document.getElementById('txtLat').value;   // latidud
  latitude = Math.abs(latitude)
  longitude = document.getElementById('txtLng').value;
  longitude= Math.abs(longitude);
    
  //ENTRENAR EL MODELO
  if (creaModelo) {
      for (var index = 0; index < eventosReales.length; index++) {
        var ltd = eventosReales[index].x;
        var lng = eventosReales[index].y;
        var eve = eventosReales[index].evento;
        var sector = eventosReales[index].sector;
        value = '"input"' + ': { "ltd": "' +ltd +'",' +
                '"lng"' + ':"' +lng +'"},' +
                '"output"' + ': {"' +eve +'": "1"}';
        crimesTricks.push(JSON.parse("{"+value+"}"));
      }
      net.train(crimesTricks, {
        errorThresh: 0.05,  // error threshold to reach
        iterations: 1000,   // maximum training iterations
        //log: true,           // console.log() progress periodically
        logPeriod: 10,       // number of iterations between logging
        learningRate: 0.3    // learning rate);
    });
    //creaModelo = false;
  }

  var output = net.run({ltd: latitude, lng: longitude});//<zona bellavista

  console.log(output, latitude, longitude);
  filasBody +="<tr> " +
              "<td>" + indexRow + "</td>" +
              "<td>" + Math.round(output.Robo_a_personas * 100) + "%</td>" +
              "<td>" + Math.round(output.Robo_a_domicilio *100) + "%</td>" +
              "<td>" + Math.round(output.Robo_a_motos *100) + "%</td>" +
              "<td>" + Math.round(output.Robo_a_unidades_economicas *100) + "%</td>" +
              "<td>" + Math.round(output.Robo_a_carros *100)+ "%</td>" +
              "<td>" + Math.round(output.Robo_de_bienes_accesorios_y_autopartes *100) + "%</td>" +
              "</tr>" ;
  indexRow +=1;
  $('#eventosLog').html(filasBody);
  //$("#btnPredecir").removeClass('is-loading');
});
