var Calculator = require("./../js/calculator.js").calculatorModule;

$(function(){
  $("#calculator-form").submit(function(event){
    event.preventDefault();
    var number1, number2;
    var simpleCalculator = new Calculator();
    number1 = parseInt($("#number1").val());
    number2 = parseInt($("#number2").val());
    var result = simpleCalculator.add(number1, number2);
    console.log("Hello World!");
    console.log(result);
  });

});

$(function() {
  $("#time").text(moment());
});

var apiKey = "99d51668603c4b2718896161b79de019";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then(function(response) {
        $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    })

    .fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
