
var net = new brain.NeuralNetwork(); // NNET
var latitude; // latidud
var longitude; //longirud
var creaModelo = true;
var value=[];   //USADO EN CRIMESTRICKS
var crimesTricks=[]; //  // CONTIENE LOS INPUTS Y OUTPUTS MODIFICADOS A MI CONVENIENCIA
var filasBody=''; // agrega filas a la tabla (sobre los resultados)
var indexRow = 1;
$('#btnPredecir').click(function(){
  latitude = document.getElementById('txtLat').value;   // latidud
  longitude = document.getElementById('txtLng').value;
    
  //ENTRENAR EL MODELO
  if (creaModelo) {
      for (var index = 0; index < crimes.length; index++) {
        var ltd = crimes[index].x;
        var lng = crimes[index].y;
        var eve = crimes[index].evento;
        var sector = crimes[index].Sector;
        value = '"input"' + ': { "ltd": "' +ltd +'",' +
                '"lng"' + ':"' +lng +'"},' +
                '"output"' + ': {"' +eve +'": "1"}';
        crimesTricks.push(JSON.parse("{"+value+"}"));
      }
      net.train(crimesTricks, {
        errorThresh: 0.005,  // error threshold to reach
        iterations: 10000,   // maximum training iterations
        //log: true,           // console.log() progress periodically
        logPeriod: 10,       // number of iterations between logging
        learningRate: 0.3    // learning rate);
    });
    creaModelo = false;
  }

  var output = net.run();//<zona bellavista

  var robos=0;var arra=0;
  for (var i = 0; i < crimes.length; i++) {
      
      if (crimes[i].evento=="Robos") {
          robos+=1;
      }
      else if (crimes[i].evento=="Arranchones") {
          arra+=1;
      }
  }
  console.log(output, latitude, longitude, robos, arra);
  filasBody +="<tr> " +
              "<td>" + indexRow + "</td>" +
              "<td>" + latitude + "</td>" + 
              "<td>" + longitude + "</td>" +
              "<td>" + Math.round(output.Arranchones * 100) + "%</td>" +
              "<td>" + Math.round(output.Robos *100) + "%</td>" +
              "<td>" + Math.round(output.Muertes *100) + "%</td>" +
              "<td>" + Math.round(output.Disparos *100)+ "%</td>" +
              "<td>" + Math.round(output.Peleas *100) + "%</td>" +
              "</tr>" ;
  indexRow +=1;
  $('#eventosLog').html(filasBody);
});
