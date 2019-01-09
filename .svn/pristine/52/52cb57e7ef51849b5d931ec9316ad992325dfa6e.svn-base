var truck ;
var plant;
var capability;
var tol ;
var volume;

// Radialize the colors
Highcharts.setOptions({
    colors: Highcharts.map(['#925757', '#b28e8f', '#593142', '#7f5b5c', '#9f728a', '#CD9B9B'], function (color) {
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
    responsive: {
        rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    title: {
                        text: 'SINMIX',
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
            load: function () {
                this.series[0].data[document.getElementById("charthaha:hiddenname").value].slice();
            }
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
        text: 'SINMIX',
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

                        document.getElementById("charthaha:hiddenname").value = this.id;
                        if (this.id === 2) {
                            truck = false;
                            plant = true;
                            capability = false;
                            tol = false;
                            volume = false;
                        }
                        else if (this.id === 3) {
                            truck = true;
                            plant = false;
                            capability = false;
                            tol = false;
                            volume = false;
                        }else if (this.id === 4) {
                            truck = false;
                            plant = false;
                            capability = true;
                            tol = false;
                            volume = false;
                        }else if (this.id === 0) {
                            truck = false;
                            plant = false;
                            capability = false;
                            tol = true;
                            volume = false;
                        }
                        else if (this.id === 1) {
                            truck = false;
                            plant = false;
                            capability = false;
                            tol = false;
                            volume = true;
                        }
                        document.getElementById('charthaha:btnshow').click();
                    }
                }
            }
        },
        pie: {
            showInLegend: false,
            allowPointSelect: true,
            dataLabels: {
                enabled: true,
                useHTML: true,
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
                {name: 'TOL DETAILS',
                    y: 100,
                    id: 0,
                    dataLabels: {
                        distance: -65, // Individual distance
                        format: '<div style="float:right"><i class="fa fa-map-marker fa-3x" style="margin-top: -0.3em;"></i></div><br><br><div style="text-align:center;letter-spacing :3px;font-size:13px; font-weight: 900;;font-family : Aharoni">TOL DETAILS</div>'
                        , enabled: tol
                    }},
                {name: 'VOLUME m³ PERMONTH 300,000', y: 100, id: 1,
                    dataLabels: {
                        distance: -95, // Individual distance
                        format: '<br><br><div style="text-align:center;letter-spacing :3px;font-size:13px; font-weight: 900;;font-family : Aharoni">VOLUME m³<br><span style="white-space: pre">PER MONTH</span></div><br><span style="font-size:1.9em; font-weight:bold;white-space: pre">300,000 </span><i class="fa fa-bar-chart fa-2x"></i>'
                        , enabled: volume
                    }},
                {name: 'NO OF PLANTS 12', y: 100, id: 2,
                    dataLabels: {
                        distance: -100, // Individual distance
                        format: '<div style="text-align:center;letter-spacing :3px;font-size:13px; font-weight: 900;;font-family : Aharoni"><br>NO OF<br>PLANTS<br></div><br><span style="font-size:2em; font-weight:bold;horizontal-align:center;white-space: pre;margin-left: 0.4em;">12</span><br><i class="fa fa-industry fa-2x" style="margin-left: 0.4em;"></i><br>'
                        , enabled: plant
                    }},
                {name: 'TRUCKING CAPACITY 210', y: 100, id: 3,
                    dataLabels: {
                        distance: -118, // Individual distance
                        format: '<br><br><div class="ui-g"><div class="ui-g-6" style="margin-top: 1em;margin-left: -0.5em;"><i class="fa fa-truck fa-3x"></i></div><div class="ui-g-6" style="margin-top: -0.6em;margin-right: -1.5em;"><div style="text-align:center;letter-spacing :3px;font-size:13px; font-weight: 900;;font-family : Aharoni"><span style="margin: auto 0;text-align:center;">TRUCKING<br>CAPACITY</span></div><br><span style="font-size:2em; font-weight:bold;margin-left: 1em;">210</span><div></div>'
                        , enabled: truck
                    }},
                {name: 'CAPABILITIES & OTHERS LSS GRADE 200', y: 100, id: 4,
                    dataLabels: {
                        distance: -70, // Individual distance
                        format: '<i class="fa fa-gears fa-3x" style="margin-left: 0.01em;margin-top: -0.3em;"></i><div style="margin: 6px 0px 0px 20px;letter-spacing :3px;font-size:13px; font-weight: 900;">CAPABILITIES<br>& OTHERS</div><span style="font-size:14px"><ul><li>LSS</li><li>GRADE 200</li></ul></span>'
                        , enabled: capability
                    }}
            ]
        }],
    //disable the nav export button
    exporting: {
        enabled: false
    }
});





