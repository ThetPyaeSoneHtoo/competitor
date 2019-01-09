

// Radialize the colors
Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
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

Highcharts.chart('elf', {
    responsive: {
        rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                  
                    plotOptions: {
                        pie: {
                            showInLegend: true,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    }

                }
            },
            {
                condition: {
                    minWidth: 400
                },
                chartOptions: {
                    plotOptions: {
                        pie: {
                            showInLegend: false,
                            dataLabels: {
                                useHTML: true,
                                enabled: true
                            }
                        }
                    }
                }
            }
        ]
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: '#ecf0f5'
    },
    credits: {
        enabled: false
    },
    title: {
    	useHTML: true,
	    text: '',
        align: 'left',
        verticalAlign: 'top',
        y: 10
    },
    tooltip: {
        enabled: false,
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    navigation: {
        buttonOptions: {
            enabled: false
          }

        },
    plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        document.getElementById("chartform:hiddenname").value = this.name ;
                        document.getElementById("chartform:btn").click();
                    }
                }
            }
        },
        pie: {
            showInLegend: false,
            dataLabels: {
                useHTML: true,
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    fontFamily:'Aharoni',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            },
            startAngle: -180,
            endAngle: -180,
            center: ['50%', '50%'],
            size: '100%'
        }
    },
    series: [{
            type: 'pie',
            name: 'Batching Plants',
            innerSize: '20%',
            data: [
                
                {
                    name: 'SINMIX',
                    y: 100,
                    dataLabels: {
                        enabled: true,
                        useHTML:true,
                        format: '<div style="text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;font-family : Calibri"><font style="font-size:3em;margin-bottom:-5px">5</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px"><br/><button style="background-color:#3B3838;text-align:center;width:100px;border-width:0;letter-spacing :2px;" disabled>SINMIX</button></div></div>',
                        distance: (-85),
                        color: 'white',
                        align: 'center'
                    }
                },
                { 
                    name: 'PAN UNITED',
                    y: 100,
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        format: '<div style="text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;;font-family : Calibri"><font style="font-size:3em;margin-bottom:-5px">5</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px"><br/><button style="background-color:#3B3838;text-align:center;width:100px;border-width:0;letter-spacing :2px;" disabled>PAN UNITED</button></div></div>',
                        distance: (-90),
                        color: 'white',
                        align: 'center'
                    }
                },
                {
                    name: 'ISLAND',
                    y: 100,
                    dataLabels: {
                        enabled: true,
                        useHTML:true,
                        format: '<div style="text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;;font-family : Calibri"><font style="font-size:3em;margin-bottom:-5px">5</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px"><br/><button style="background-color:#3B3838;text-align:center;width:100px;border-width:0;letter-spacing :2px;" disabled>ISLAND</button></div></div>',
                        distance: (-85),
                        color: 'white',
                        align: 'center'
                    }
                },
                {
                    name: 'ALLIANCE',
                    y: 70,
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        format: '<div style="text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;;font-family : Calibri"><font style="font-size:3em;margin-bottom:-5px">3</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px"><br/><button style="background-color:#3B3838;text-align:center;width:100px;border-width:0;letter-spacing :2px;" disabled>ALLIANCE</button></div></div>',
                        distance: (-50),
                        color: 'white',
                        align: 'center'
                    }
                },
                {
                    name: 'YTL',
                    y: 90,
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        format: '<div style="text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;;font-family : Calibri"><font style="font-size:3em;margin-bottom:-5px">4</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px"><br/><button style="background-color:#3B3838;text-align:center;width:100px;border-width:0;letter-spacing :2px;" disabled>YTL</button></div></div>',
                        distance: (-85),
                        color: 'white',
                        align: 'center'
                    }
                },
                {
                    name: 'SAMWOH',
                    y: 80,
                    dataLabels: {
                        enabled: true,
                        useHTML: true,
                        format: '<div style="text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;;font-family : Calibri"><font style="font-size:3em;margin-bottom:-5px">3</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px"><br/><button style="background-color:#3B3838;text-align:center;width:100px;border-width:0;letter-spacing :2px;" disabled>SAMWOH</button></div></div>',
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


