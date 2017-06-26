(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "99d51668603c4b2718896161b79de019";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Weather = function(){

}

Weather.prototype.getWeather = function (city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
  .then(function(response) {
  displayHumidity(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/weather.js":2}]},{},[3]);
