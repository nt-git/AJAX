"use strict";


// PART 1: SHOW A FORTUNE


function showFortune(results) {
    // TODO: get the fortune and show it in the #fortune-text div
    console.dir(results);
    $('#fortune-text').html(results);
}

function submitFortune(evt) {
    evt.preventDefault();

    $.get("/fortune", showFortune);

}

$('#get-fortune-button').on('click', submitFortune);


// PART 2: SHOW WEATHER

function displayWeather(results){
    console.dir(results);
    $('#weather-info').html(results.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url,formData,displayWeather);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


