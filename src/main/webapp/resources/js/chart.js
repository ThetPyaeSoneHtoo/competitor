

// Radialize the colors
Highcharts.setOptions({
    colors: Highcharts.map(['#ffc153', '#d2b11e', '#626200', '#fcbd00', '#ffa500', '#c09000'], function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, Highcharts.Color(color).brighten(0.6).get('rgb')], // darken
                [1, color]
            ]
        };
    })
});
Highcharts.chart('gnome', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '#ecf0f5'
    }, credits: {
        enabled: false
    },
    title: {
        style: {
            fontSize: '15px'
        },
        text: 'ISLAND',
        align: 'center',
        verticalAlign: 'middle',
        y: -2
    },
    tooltip: {
        enabled: false,
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        document.getElementById("charthaha:hiddenname").value = this.name;
                        document.getElementById('charthaha:btnshow').click();
                    },
                    load: function () {
                        StaggerDataLabels(this.series);
                    },
                    redraw: function () {
                        var series = this.series;
                        setTimeout(function () {
                            StaggerDataLabels(series);
                        }, 1000);
                    }
                }
            }
        },
        pie: {
            allowPointSelect: true,
            dataLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    fontFamily: 'Aharoni',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            },
            startAngle: -180,
            endAngle: -180,
            center: ['50%', '50%'],
            borderWidth: 0,
            size: '100%'
        }
    },
    series: [{
            name: 'Batching Plants',
            type: 'pie',
            innerSize: '20%',
            data: [
                {
                    name: '<br><br><br><br><div style="margin-left:-10px"><div style="text-align:center;font-size:12px;letter-spacing :4px;">TOL DETAILS</div>',
                    y: 100,
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        distance: (-70),
                        color: 'white',
                        align: 'center'
                    }
                },
                {
                    name: '<br><br><br><div style="text-align:center;font-size:11px;"><div style="letter-spacing :4px;">VOLUME m³<br>PERMONTH</div><div style="font-size:2em; font-weight:bold">300,000</div> </div>',
                    y: 100,
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        distance: (-70),
                        color: 'white',
                        align: 'center'
                    }
                },
                {
                    name: 'PLANTS',
                    y: 100,
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        format: '<br><br><br><br><div style="margin: auto 0;font-size:11px;letter-spacing :3px;">NO OF<br> PLANTS<br><div style="font-size:2em; font-weight:bold">12</div>',
                        distance: (-50),
                        color: 'white',
                        align: 'center'
                    }
                },
                {
                    name: 'CAPACITY',
                    y: 100,
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        format: '<br><br><br><div style="margin: auto 0;text-align:center;font-size:11px;letter-spacing :3px;">TRUCKING <br>CAPACITY<br></div><div style="font-size:2em; font-weight:bold">210</div>',
                        distance: (-65),
                        color: 'white',
                        align: 'center'

                    }
                },
                {
                    name: 'CAPABILITIES',
                    y: 100,
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        format: '<br><br><br><div style="margin: 0px 0px 0px 20px;font-size:11px;letter-spacing :3px;">CAPABILITIES<br>& OTHERS<br>LSS<br>GRADE 200<div>',
                        distance: (-85),
                        color: 'white',
                        align: 'center'
                    }
                }
            ]
        }],
    //disable the nav export button
    exporting: {
        enabled: false
    }
});




