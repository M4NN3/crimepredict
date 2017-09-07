const brain = require('brain');
var net = new brain.NeuralNetwork({
   // hiddenLayers: [128,64]
});
var data=[{input: [0, 0], output: [0]},  
{input: [0, 1], output: [1]},
{input: [1, 0], output: [1]},
{input: [1, 1], output: [0]}];
net.train(data, {
    errorThresh: 0.005,  // error threshold to reach
    iterations: 20000,   // maximum training iterations
    log: true,           // console.log() progress periodically
    logPeriod: 10,       // number of iterations between logging
    learningRate: 0.3    // learning rate);
})

var output = net.run([1, 0]);

console.log(Math.round(output));