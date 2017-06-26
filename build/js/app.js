(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator () {

}

Calculator.prototype.add = function (number1, number2) {
  return number1 + number2;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      console.log(response);
    });
  });
});

},{"./../js/calculator.js":1}]},{},[2]);
