 var chart = AmCharts.makeChart( "chartdiv", {
        "type": "serial",
        "dataLoader": {
          "url": "http://php-vitorwebsystem.rhcloud.com/openweather/json.php",
          "format": "json"
        },
        "pathToImages": "http://www.amcharts.com/lib/images/",
        "categoryField": "dt",
        "startDuration": 1,
        "autoMargins": false,
        "marginLeft": 0,
        "marginRight": 5,
        "marginTop": 0,
        "marginBottom": 0,

        "graphs": [ {
          "valueField": "tmp",
          "bulletBorderThickness": 2,
          "lineThickness ": 2,
          "lineColor": "#FFAD33",
          "lineAlpha": 0.5
        } ]
        } );

        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.gridAlpha = 0;
        valueAxis.axisAlpha = 0;
        chart.addValueAxis(valueAxis);

        var categoryAxis = chart.categoryAxis;
        categoryAxis.gridAlpha = 0;
        categoryAxis.axisAlpha = 0;
        categoryAxis.startOnAxis = true;