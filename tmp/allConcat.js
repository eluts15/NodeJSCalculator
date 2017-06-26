// var Calculator = require("./../js/calculator.js").calculatorModule;
// 
// $(function(){
//   $("#calculator-form").submit(function(event){
//     event.preventDefault();
//     var number1, number2;
//     var simpleCalculator = new Calculator();
//     number1 = parseInt($("#number1").val());
//     number2 = parseInt($("#number2").val());
//     // var result = simpleCalculator.add(number1, number2);
//     console.log("Hello World!");
//     console.log(result);
//   });
//
// });

$(function() {
  $("#time").text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});
