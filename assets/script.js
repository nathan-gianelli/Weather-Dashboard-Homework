var APIKEY = "af535e7f290733b44abfa49b622bcb9a";


$(".js-city-input").on("submit", function(e){
    e.preventDefault();
    var city = $(".city-input").val();
    dataGrab(city);
    console.log(city);
});

// Grabs Data From Service for Current Conditions
function dataGrab(cityState) {
    var APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityState}&appid=${APIKEY}`;
    
    // Object for Url Parama
    var data = {
        q: cityState,
        units: "imperial",
        appid: APIKEY
    };

    // Use Ajax
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        type: "get",
        data: data
    }).done(function(data){
        console.log(data);
        $('.city-heading').text(data.name);
        $('span.temp').html(data.main.temp+" &deg;F");
        $('span.humidity').text(data.main.humidity+"%");
        $('span.wind-speed').text(data.wind.speed+" MPH");
        $('.weather-icon').html(`<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`);
        // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    });
};