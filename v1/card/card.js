moment();

// Current
$(document).ready(function(){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=3449847&units=metric&appid=5ecaf23c84f1aaf3b1cf9816b82ca8e8",
    function(result){
        
        var cidade = result.name;
        var tempAtual = result.main.temp;
        var umidadeAtual = result.main.humidity;
        var condicaoAtual = result.weather[0].description;

        $('.tempAtual').text(tempAtual.toFixed(1)+"°C");
        $('.umidadeAtual').text(umidadeAtual+"%");
        $('#location').text(cidade);

        //condicaoAtual = "thunderstorm";
        if (condicaoAtual == "clear sky") {
            $('#iconCondicaoAtual').addClass('wi wi-owm-day-800');
            $('#descricaoCondicaoAtual').text("Ensolarado");
        }
        if (condicaoAtual == "few clouds") {
            $('#iconCondicaoAtual').addClass('wi wi-day-cloudy');
            $('#descricaoCondicaoAtual').text("Algumas Nuvens");
        }
        if (condicaoAtual == "scattered clouds") {
            $('#iconCondicaoAtual').addClass('wi wi-day-cloudy');
            $('#descricaoCondicaoAtual').text("Nuvens Carregadas");
        }
        if (condicaoAtual == "rain") {
            $('#iconCondicaoAtual').addClass('wi wi-day-rain');
            $('#descricaoCondicaoAtual').text("Chuva");
        }
        if (condicaoAtual == "thunderstorm") {
            $('#iconCondicaoAtual').addClass('wi wi-day-thunderstorm');
            $('#descricaoCondicaoAtual').text("Tepestade");
        }

    });
});

// Daily
$(document).ready(function(){
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?id=3449847&units=metric&lang=pt&appid=5ecaf23c84f1aaf3b1cf9816b82ca8e8",
    function(result){
       
        var tempMaximaHoje = result.list[0].temp.max;
        var tempMinimaHoje = result.list[0].temp.min;

        var data1 = moment.unix(result.list[1].dt).format("DD/MM/YYYY");
        var data2 = moment.unix(result.list[2].dt).format("DD/MM/YYYY");
        var data3 = moment.unix(result.list[3].dt).format("DD/MM/YYYY");
        var data4 = moment.unix(result.list[4].dt).format("DD/MM/YYYY");
        var data5 = moment.unix(result.list[5].dt).format("DD/MM/YYYY");
        var data6 = moment.unix(result.list[6].dt).format("DD/MM/YYYY");

        var condicaoDia1 = result.list[1].weather[0].description;
        var condicaoDia2 = result.list[2].weather[0].description;
        var condicaoDia3 = result.list[3].weather[0].description;
        var condicaoDia4 = result.list[4].weather[0].description;
        var condicaoDia5 = result.list[5].weather[0].description;
        var condicaoDia6 = result.list[6].weather[0].description;

        var tempMaximaDia1 = result.list[1].temp.max; 
        var tempMaximaDia2 = result.list[2].temp.max; 
        var tempMaximaDia3 = result.list[3].temp.max; 
        var tempMaximaDia4 = result.list[4].temp.max; 
        var tempMaximaDia5 = result.list[5].temp.max; 
        var tempMaximaDia6 = result.list[6].temp.max; 
        
        var tempMimDia1 = result.list[1].temp.min; 
        var tempMimDia2 = result.list[2].temp.min; 
        var tempMimDia3 = result.list[3].temp.min; 
        var tempMimDia4 = result.list[4].temp.min; 
        var tempMimDia5 = result.list[5].temp.min; 
        var tempMimDia6 = result.list[6].temp.min; 

        $('.tempMaxima').text(tempMaximaHoje + "ºC");
        $('.tempMinima').text(tempMinimaHoje + "ºC");

        $('#dataDia1').text(data1);
        $('#dataDia2').text(data2);
        $('#dataDia3').text(data3);
        $('#dataDia4').text(data4);
        $('#dataDia5').text(data5);
        $('#dataDia6').text(data6);

        $('#condicaoDia1').text(condicaoDia1);
        $('#condicaoDia2').text(condicaoDia2);
        $('#condicaoDia3').text(condicaoDia3);
        $('#condicaoDia4').text(condicaoDia4);
        $('#condicaoDia5').text(condicaoDia5);
        $('#condicaoDia6').text(condicaoDia6);

        $('.tempMaximaDia1').text(tempMaximaDia1);
        $('.tempMaximaDia2').text(tempMaximaDia2);
        $('.tempMaximaDia3').text(tempMaximaDia3);
        $('.tempMaximaDia4').text(tempMaximaDia4);
        $('.tempMaximaDia5').text(tempMaximaDia5);
        $('.tempMaximaDia6').text(tempMaximaDia6);

        $('.tempMinDia1').text(tempMimDia1);
        $('.tempMinDia2').text(tempMimDia2);
        $('.tempMinDia3').text(tempMimDia3);
        $('.tempMinDia4').text(tempMimDia4);
        $('.tempMinDia5').text(tempMimDia5);
        $('.tempMinDia6').text(tempMimDia6);

        $('.iconeDia1').addClass(condicaoDia1.replace(" ","").toLowerCase());
        $('.iconeDia2').addClass(condicaoDia2.replace(" ","").toLowerCase());
        $('.iconeDia3').addClass(condicaoDia3.replace(" ","").toLowerCase());
        $('.iconeDia4').addClass(condicaoDia4.replace(" ","").toLowerCase());
        $('.iconeDia5').addClass(condicaoDia5.replace(" ","").toLowerCase());
        $('.iconeDia6').addClass(condicaoDia6.replace(" ","").toLowerCase());


    });
});




// Current
// http://api.openweathermap.org/data/2.5/weather?id=3449847&units=metric&appid=5ecaf23c84f1aaf3b1cf9816b82ca8e8

//Call 5 day / 3 hour forecast data
// http://api.openweathermap.org/data/2.5/forecast?id=3449847&units=metric&appid=5ecaf23c84f1aaf3b1cf9816b82ca8e8

//16 day / daily forecast
// http://api.openweathermap.org/data/2.5/forecast/daily?id=3449847&units=metric&appid=5ecaf23c84f1aaf3b1cf9816b82ca8e8








