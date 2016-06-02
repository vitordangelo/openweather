var owmApiKey = 'a5fa6deab88fe51ae1f33c01dfe97ab2';
var owmUrl = 'http://api.openweathermap.org/data/2.5/weather?callback=?';
var owmDailyUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?callback=?';
var fCountries = ['BS', 'BZ', 'KY', 'PW', 'US', 'PR', 'AS'];

$(document).ready(function() {
  $.ajax({
    url: "http://ip-api.com/json",
    success: function(response) {
      var useUnits = 'metric';
      if (fCountries.indexOf(response.countryCode) > 0) {
        useUnits = 'imperial';
      }
    //  $( "#location" ).html(response.city + ', ' + response.regionName);
      var rawCity = response.city;
      var ipCity = /[^\(]*/.exec(rawCity)[0];
      $.getJSON(owmUrl,
           {q: ipCity,
            type: 'like',
            units: useUnits,
            APPID: owmApiKey})
       .done(parseWeather);
       $.getJSON(owmDailyUrl,
            {q: ipCity,
             type: 'like',
             cnt: '1',
             units: useUnits,
             APPID: owmApiKey})
        .done(parseDailyWeather);
    },
    dataType: 'json',
    statusCode: {
      429: function() {
        alert( "Number of tries exceeded" );
      }
    }
  });
});

function parseWeather(data) {
  var dayTime = '-night-';
  if (data.dt >= data.sys.sunrise && data.dt < data.sys.sunset) {
    var dayTime = '-day-';
  }
  var useUnitLetter = '°C';
  if (fCountries.indexOf(data.sys.country) > 0) {
    useUnitLetter = '°F';
  }
  var owmIconStr = 'wi wi-owm' + dayTime + data.weather[0].id;
  var windClass = 'wi wi-wind from-' + data.wind.deg + '-deg';
  console.log(data.main.temp);
  $( "body" ).css("background", "url(" + getBackground(data.weather[0].main) + ") no-repeat center center fixed");
  $( "#location" ).html(data.name);
  $( "#owm-temp" ).html(Math.round(data.main.temp) + useUnitLetter);
  $( "#owm-humidity span" ).html(data.main.humidity + '%');
  $( "#owm-icon" ).removeClass().addClass(owmIconStr);
  $( "#owm-description" ).html(data.weather[0].description);
  $( "#owm-wind-speed" ).html(data.wind.speed + ' m/s');
  $( "#owm-wind-icon" ).removeClass().addClass(windClass);
}

function parseDailyWeather(data) {
  var useUnitLetter = '°C';
  if (fCountries.indexOf(data.city.country) > 0) {
    useUnitLetter = '°F';
  }
  $( "#owm-temp-max span" ).html(Math.round(data.list[0].temp.max) + useUnitLetter);
  $( "#owm-temp-min span" ).html(Math.round(data.list[0].temp.min) + useUnitLetter);
}

function getBackground(mainCondition) {
  var bgUrl;
  switch(mainCondition) {
    case "Thunderstorm":
      bgUrl = "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCaaW1vVUVjRTBuX3c";
      break;
    case "Drizzle":
      bgUrl = "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCaempENF8ycUFHX2M";
      break;
    case "Rain":
      bgUrl = "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCaempENF8ycUFHX2M";
      break;
    case "Snow":
      bgUrl = "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCaWkhXU2dra1RhbTQ";
      break;
    case "Atmosphere":
      bgUrl = "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCaOWFHSGY5MUt5Qm8";
      break;
    case "Clouds":
      bgUrl = "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCacHBEamd3Q2ZpYTA";
      break;
    case "Extreme":
      bgUrl = "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCaaW1vVUVjRTBuX3c";
      break;
    case "Additional":
      bgUrl = "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCacHBEamd3Q2ZpYTA";
      break;
    default:
      bgUrl = "https://drive.google.com/uc?export=download&id=0B41DdgPqKzCacHBEamd3Q2ZpYTA";
  }
  return bgUrl;
}