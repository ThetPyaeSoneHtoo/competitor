

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
                    title: {
                        text: '',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: -50
                    },
                    plotOptions: {
                        pie: {
                            showInLegend: true,
                            dataLabels: {
                                enabled: false,
                                style: {
                                    fontSize: '7px'
                                }
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
        fontFamily: 'Aharoni',
        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
        backgroundColor: '#f4f4f4',
        events: {
        }

    },
    credits: {
        enabled: false
    },
    title: {
        style: {
            fontSize: '15px',
            fontWeight: 'bold'
        },
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 1
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
                        document.getElementById("chartform:hiddenname").value = this.name;
                        document.getElementById("chartform:btn").click();
                    }
                }
            }
        },
        pie: {
            showInLegend: true,
            allowPointSelect: true,
            
            dataLabels: {
                
                useHTML: true,
                enabled: true,
                overflow: 'none',
                crop: false,
                style: {
                    fontWeight: 'bold',
                    fontSize: '1.2em',
                    fontFamily: 'Aharoni',
                    color: 'white',
                    textOutline: false,
                    align: 'center',
                    whiteSpace: 'pre',
                    textalign: 'right'
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
            type: 'pie',
            name: 'Batching Plants',
            innerSize: '20%',
            data: [
                {name: 'SINMIX',
                    y: 100,
                    id: 0,
                    dataLabels: {
                        distance: -140, // Individual distance
                        format: '<div style="text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;font-family : Aharoni"><font style="font-size:3em;margin-bottom:-5px">5</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px"><button style="background-color:#3B3838;width: 130px;height: 30px;margin: 0 auto; padding: 0;display: inline-block;line-height: 30px;text-align: center;border-width:0;letter-spacing :2px;" disabled>SINMIX</button></div><font style="font-size:3em;margin-bottom:-5px">300</font><br>CAPACITY</div>'
                    }},
                {name: 'PAN UNITED', y: 130, id: 1,
                    dataLabels: {
                        distance: -120, // Individual distance
                        format: '<div style="text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;;font-family : Aharoni"><font style="font-size:4em;margin-bottom:-5px">5</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px"><button style="background-color:#3B3838;width: 130px;height: 30px;margin: 0 auto; padding: 0;display: inline-block;line-height: 30px;text-align: center;border-width:0;letter-spacing :2px;" disabled>PAN UNITED</button></div><font style="font-size:3em;margin-bottom:-5px">300</font><br>CAPACITY</div>'
                    }},
                {name: 'ISLAND', y: 90, id: 2,
                    dataLabels: {
                        distance: -80, // Individual distance
                        format: '<div style="text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;;font-family : Aharoni"><font style="font-size:4em;margin-bottom:-5px">3</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px;margin-left: 0.5em;"><button style="background-color:#3B3838;width: 130px;height: 30px;margin: 0 auto; padding: 0;display: inline-block;line-height: 30px;text-align: center;border-width:0;letter-spacing :2px;" disabled>ISLAND</button></div><font style="font-size:3em;margin-bottom:-5px">300</font><br>CAPACITY</div>'
                    }},
                {name: 'ALLIANCE', y: 100, id: 3,
                    dataLabels: {
                        distance: -90, // Individual distance
                        format: '<div style="margin-left:-4em;text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;;font-family : Aharoni"><font style="font-size:4em;margin-bottom:-5px">3</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px"><button style="background-color:#3B3838;width: 130px;height: 30px;margin: 0 auto; padding: 0;display: inline-block;line-height: 30px;text-align: center;border-width:0;letter-spacing :2px;" disabled>ALLIANCE</button></div><font style="font-size:3em;margin-bottom:-5px">300</font><br>CAPACITY</div>'
                    }},
                {name: 'YTL', y: 100, id: 4,
                    dataLabels: {
                        distance: -120, // Individual distance
                        format: '<div style="margin-top:-2em;text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;;font-family : Aharoni"><font style="font-size:4em;margin-bottom:-5px">4</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px"><button style="background-color:#3B3838;width: 130px;height: 30px;margin: 0 auto; padding: 0;display: inline-block;line-height: 30px;text-align: center;border-width:0;letter-spacing :2px;" disabled>YTL</button></div><font style="font-size:3em;margin-bottom:-5px">300</font><br>CAPACITY</div>'
                    }},
                {name: 'SAMWOH', y: 80, id: 4,
                    dataLabels: {
                        distance: -140, // Individual distance
                        format: '<div style="text-align:center;letter-spacing :5px;font-size:13px; font-weight: 900;;font-family : Aharoni"><font style="font-size:4em;margin-bottom:-5px">3</font><br>BATCHING<br>PLANTS<br><div style="font-size:14px"><button style="background-color:#3B3838;width: 130px;height: 30px;margin: 0 auto; padding: 0;display: inline-block;line-height: 30px;text-align: center;border-width:0;letter-spacing :2px;" disabled>SAMWOH</button></div><font style="font-size:3em;margin-bottom:-5px;">300</font><br>CAPACITY</div>'
                    }}
            ]
        }],
    //disable the nav export button
    exporting: {
        enabled: false
    }
});


    