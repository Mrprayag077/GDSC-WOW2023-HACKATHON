$(function () {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict';
  var data = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [10, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var dataDark = {
    labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [10, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
  };
  var multiLineData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: [
        '#587ce4'
      ],
      borderWidth: 2,
      fill: false
    },
    {
      label: 'Dataset 2',
      data: [5, 23, 7, 12, 42, 23],
      borderColor: [
        '#ede190'
      ],
      borderWidth: 2,
      fill: false
    },
    {
      label: 'Dataset 3',
      data: [15, 10, 21, 32, 12, 33],
      borderColor: [
        '#f44252'
      ],
      borderWidth: 2,
      fill: false
    }
    ]
  };
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };
  var optionsDark = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: '#322f2f',
          zeroLineColor: '#322f2f'
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: '#322f2f',
        }
      }],
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };
  var doughnutPieData = {
    datasets: [{
      data: [30, 40, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Pink',
      'Blue',
      'Yellow',
    ]
  };
  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };
  var areaData = {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
    }]
  };

  var areaDataDark = {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
    }]
  };

  var areaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    }
  }

  var areaOptionsDark = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: '#322f2f',
          zeroLineColor: '#322f2f'
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true
        },
        gridLines: {
          color: '#322f2f',
        }
      }],
    },
    plugins: {
      filler: {
        propagate: true
      }
    }
  }

  var multiAreaData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: 'Facebook',
      data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
      borderColor: ['rgba(255, 99, 132, 0.5)'],
      backgroundColor: ['rgba(255, 99, 132, 0.5)'],
      borderWidth: 1,
      fill: true
    },
    {
      label: 'Twitter',
      data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
      borderColor: ['rgba(54, 162, 235, 0.5)'],
      backgroundColor: ['rgba(54, 162, 235, 0.5)'],
      borderWidth: 1,
      fill: true
    },
    {
      label: 'Linkedin',
      data: [6, 14, 16, 20, 12, 18, 15, 12, 17, 19, 15, 11],
      borderColor: ['rgba(255, 206, 86, 0.5)'],
      backgroundColor: ['rgba(255, 206, 86, 0.5)'],
      borderWidth: 1,
      fill: true
    }
    ]
  };

  var multiAreaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }

  var scatterChartData = {
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: -10,
        y: 0
      },
      {
        x: 0,
        y: 3
      },
      {
        x: -25,
        y: 5
      },
      {
        x: 40,
        y: 5
      }
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Second Dataset',
      data: [{
        x: 10,
        y: 5
      },
      {
        x: 20,
        y: -30
      },
      {
        x: -25,
        y: 15
      },
      {
        x: -10,
        y: 5
      }
      ],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    }
    ]
  }

  var scatterChartDataDark = {
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: -10,
        y: 0
      },
      {
        x: 0,
        y: 3
      },
      {
        x: -25,
        y: 5
      },
      {
        x: 40,
        y: 5
      }
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Second Dataset',
      data: [{
        x: 10,
        y: 5
      },
      {
        x: 20,
        y: -30
      },
      {
        x: -25,
        y: 15
      },
      {
        x: -10,
        y: 5
      }
      ],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    }
    ]
  }

  var scatterChartOptions = {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }]
    }
  }

  var scatterChartOptionsDark = {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        gridLines: {
          color: '#322f2f',
          zeroLineColor: '#322f2f'
        }
      }],
      yAxes: [{
        gridLines: {
          color: '#322f2f',
          zeroLineColor: '#322f2f'
        }
      }]
    }
  }
  // Get context with jQuery - using jQuery's .get() method.



  // render init block





  if ($("#barChart").length) {


    updatechart();

    function updatechart() {
      async function fetchJSON() {
        const url = document.getElementById("bar-chart_id").value;
        console.log("url var ==" + url);
        // const url = 'https://raw.githubusercontent.com/Mrprayag077/SIH_proj/main/pp.json';
        console.log("url = " + url);
        const response = await fetch(url);

        const datapoints = await response.json();
        console.log(datapoints);
        return datapoints;
      };


      fetchJSON().then(datapoints => {
        const year = datapoints.ppr[0].pp1pro.map(function (index) {
          return index.year;
        });

        console.log(year);
        barChart.config.data.labels = year;
        barChart.update();

      });



      fetchJSON().then(datapoints => {
        const prop = datapoints.ppr[0].pp1pro.map(function (index) {
          return index.prop;
        });

        console.log(prop);
        barChart.config.data.datasets[0].data = prop;
        barChart.update();

      });


    };

    // setup 
    const data1 = {
      labels: [2002, 2003, 2004, 2006, 2007, 2008, 2010],
      datasets: [{
        label: '',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
      }]
    };

    // config 
    const config = {
      type: 'bar',
      data: data1,
      options: {
        scales: {
          xAxes: [{

            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Year'
            },
            ticks: {
              beginAtZero: true,


            }

          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              steps: 40,
              stepValue: 5,
            },
            scaleLabel: {
              display: true,
              labelString: 'Property'
            }
          }]
        },
        title: {
          display: true,
          text: 'YEAR VS PROPERTY LOSS'
        },
        legend: {
          display: false

        }

      }
    };


    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    // var barChart = new Chart(barChartCanvas, {
    //   type: 'bar',
    //   data: data,
    //   options: options
    // });

    const barChart = new Chart(barChartCanvas, config
    );
  }

  if ($("#barChartDark").length) {
    var barChartCanvasDark = $("#barChartDark").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChartDark = new Chart(barChartCanvasDark, {
      type: 'bar',
      data: dataDark,
      options: optionsDark
    });
  }

  if ($("#lineChart").length) {


    updatechartl();

    function updatechartl() {
      async function fetchJSONline() {
        const urlline = document.getElementById("bar-chart_id").value;
        console.log("url var lineeee ==" + urlline);
        // const url = 'https://raw.githubusercontent.com/Mrprayag077/SIH_proj/main/pp.json';
        const responseline = await fetch(urlline);

        const datapointsline = await responseline.json();
        console.log(datapointsline);
        return datapointsline;
      };


      fetchJSONline().then(datapointsline => {
        const yearline = datapointsline.ppr[0].pp1v.map(function (index) {
          return index.year;
        });

        console.log(yearline);
        lineChart.config.data.labels = yearline;
        lineChart.update();

      });



      fetchJSONline().then(datapointsline => {
        const valueline = datapointsline.ppr[0].pp1d.map(function (index) {
          return index.deaths;
        });

        console.log(valueline);
        lineChart.config.data.datasets[0].data = valueline;
        lineChart.update();

      });


    };

    // setup 
    const dataline = {
      labels: [2002, 2003, 2004, 2006, 2007, 2008, 2010],
      datasets: [{
        label: '',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
      }]
    };

    // config 
    const configline = {
      type: 'line',
      data: dataline,
      options: {
        // scales: {
        //   y: {
        //     beginAtZero: true
        //   }
        // }

        responsive: true,
        legend: {
          display: false

        },
        hover: {
          mode: 'label'
        },
        scales: {
          xAxes: [{

            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Year'
            },
            ticks: {
              beginAtZero: true,


            }

          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              steps: 40,
              stepValue: 5,
            },
            scaleLabel: {
              display: true,
              labelString: 'Destruction'
            }
          }]
        },
        title: {
          display: true,
          text: 'YEAR VS DEATHS'
        }
      }



    };


    var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
    // var lineChart = new Chart(lineChartCanvas, {
    //   type: 'line',
    //   data: data,
    //   options: options
    // });

    const lineChart = new Chart(lineChartCanvas, configline
    );



  }

  if ($("#lineChartDark").length) {
    var lineChartCanvasDark = $("#lineChartDark").get(0).getContext("2d");
    var lineChartDark = new Chart(lineChartCanvasDark, {
      type: 'line',
      data: dataDark,
      options: optionsDark
    });
  }

  if ($("#linechart-multi").length) {
    var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
    var lineChart = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData,
      options: options
    });
  }

  if ($("#areachart-multi").length) {

    var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData,
      options: multiAreaOptions
    });

  }

  if ($("#doughnutChart").length) {

    updatechartdonut();

    function updatechartdonut() {
      async function fetchJSONdonut() {
        const urldonut = document.getElementById("bar-chart_id").value;
        console.log("url donut ==" + urldonut);
        // const url = 'https://raw.githubusercontent.com/Mrprayag077/SIH_proj/main/pp.json';
        const responsedonut = await fetch(urldonut);

        const datapointsdonut = await responsedonut.json();
        console.log(datapointsdonut);
        return datapointsdonut;
      };


      fetchJSONdonut().then(datapointsdonut => {
        const yeardonut = datapointsdonut.ppr[0].pp1d.map(function (index) {
          return index.year;
        });

        console.log(yeardonut);
        doughnutChart.config.data.labels = yeardonut;
        doughnutChart.update();

      });



      fetchJSONdonut().then(datapointsdonut => {
        const valuedonut = datapointsdonut.ppr[0].pp1d.map(function (index) {
          return index.deaths;
        });

        console.log(valuedonut);
        doughnutChart.config.data.datasets[0].data = valuedonut;
        doughnutChart.update();

      });


    };

    // setup 
    const datadonut = {
      labels: [2002, 2003, 2004, 2006, 2007, 2008, 2010],
      datasets: [{
        label: 'Year vs Destruction',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 2,
        hoverOffset: 4,
        cutout: '90%'
      }]
    };

    // config 
    const configdonut = {
      type: 'doughnut',
      data: datadonut,
      options: {
        legend: {
          display: true,

        },
        title: {
          display: true,
          text: 'YEAR VS DEATHS'
        }
      }

    };

    var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
    // var doughnutChart = new Chart(doughnutChartCanvas, {
    //   type: 'doughnut',
    //   data: doughnutPieData,
    //   options: doughnutPieOptions
    // });
    const doughnutChart = new Chart(doughnutChartCanvas, configdonut
    );

  }

  if ($("#pieChart").length) {



    updatechartpiee();

    function updatechartpiee() {
      async function fetchJSONpiee() {
        const urlpiee = document.getElementById("bar-chart_id").value;
        console.log("url piee  ==" + urlpiee);
        // const url = 'https://raw.githubusercontent.com/Mrprayag077/SIH_proj/main/pp.json';
        const responsepiee = await fetch(urlpiee);

        const datapointspiee = await responsepiee.json();
        console.log(datapointspiee);
        return datapointspiee;
      };


      fetchJSONpiee().then(datapointspiee => {
        const yearpiee = datapointspiee.ppr[0].pp1pro.map(function (index) {
          return index.year;
        });

        console.log(yearpiee);
        pieChart.config.data.labels = yearpiee;
        pieChart.update();

      });



      fetchJSONpiee().then(datapointspiee => {
        const valuepiee = datapointspiee.ppr[0].pp1pro.map(function (index) {
          return index.prop;
        });

        console.log(valuepiee);
        pieChart.config.data.datasets[0].data = valuepiee;
        pieChart.update();

      });


    };

    // setup 
    const datapiee = {
      labels: [2001, 2005, 2008, 2012, 2013, 2014, 2015],
      datasets: [{
        label: '',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 3
      }]
    };

    // config 
    const configpiee = {
      type: 'pie',
      data: datapiee,
      options: {
        title: {
          display: true,
          text: 'YEAR VS PROPERTY'
        }
      }
    };


    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    // var pieChart = new Chart(pieChartCanvas, {
    //   type: 'pie',
    //   data: doughnutPieData,
    //   options: doughnutPieOptions
    // });
    const pieChart = new Chart(pieChartCanvas, configpiee
    );

  }


  if ($("#areaChart").length) {


    updatechartareao();

    function updatechartareao() {
      async function fetchJSONareao() {
        const urlareao = document.getElementById("bar-chart_id").value;
        console.log("url donut ==" + urlareao);
        // const url = 'https://raw.githubusercontent.com/Mrprayag077/SIH_proj/main/pp.json';
        const responseareao = await fetch(urlareao);

        const datapointsareao = await responseareao.json();
        console.log(datapointsareao);
        return datapointsareao;
      };


      fetchJSONareao().then(datapointsareao => {
        const yearareao = datapointsareao.ppr[0].pp1v.map(function (index) {
          return index.year;
        });

        console.log(yearareao);
        areaChart.config.data.labels = yearareao;
        areaChart.update();

      });


      fetchJSONareao().then(datapointsareao => {
        const valueareao = datapointsareao.ppr[0].pp1v.map(function (index) {
          return index.values;
        });

        console.log(valueareao);
        areaChart.config.data.datasets[0].data = valueareao;
        areaChart.update();

      });


    };

    // setup 
    const dataareao = {
      labels: [2002, 2003, 2004, 2006, 2008, 2014, 2015],
      datasets: [{
        label: '',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 2.5
      }]
    };

    // config 
    const configareao = {
      type: 'polarArea',
      data: dataareao,
      options: {
        legend: {
          display: true,

        },
        title: {
          display: true,
          text: 'YEAR VS DESTRUCTION'
        }
      }

    };

    var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    // var areaChart = new Chart(areaChartCanvas, {
    //   type: 'line',
    //   data: areaData,
    //   options: areaOptions
    // });


    const areaChart = new Chart(areaChartCanvas, configareao
    )
  }

  if ($("#areaChartDark").length) {
    var areaChartCanvas = $("#areaChartDark").get(0).getContext("2d");
    var areaChart = new Chart(areaChartCanvas, {
      type: 'line',
      data: areaDataDark,
      options: areaOptionsDark
    });
  }

  if ($("#scatterChart").length) {

    updatechartrdr();

    function updatechartrdr() {
      async function fetchJSONrdr() {
        const urlrdr = document.getElementById("bar-chart_id").value;
        console.log("url donut ==" + urlrdr);
        // const url = 'https://raw.githubusercontent.com/Mrprayag077/SIH_proj/main/pp.json';
        const responserdr = await fetch(urlrdr);

        const datapointsrdr = await responserdr.json();
        console.log(datapointsrdr);
        return datapointsrdr;
      };


      fetchJSONrdr().then(datapointsrdr => {
        const yearrdr = datapointsrdr.ppr[0].pp1radar.map(function (index) {
          return index.type;
        });

        console.log(yearrdr);
        scatterChart.config.data.labels = yearrdr;
        scatterChart.update();

      });


      fetchJSONrdr().then(datapointsrdr => {
        const valuerdr = datapointsrdr.ppr[0].pp1radar.map(function (index) {
          return index.values;
        });

        console.log(valuerdr);
        scatterChart.config.data.datasets[0].data = valuerdr;
        scatterChart.update();

      });


    };

    // setup 
    const datardr = {
      labels: [2002, 2006, 2008, 2014, 2015, 2016, 2019],
      datasets: [{
        label: '',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 3
      }]
    };

    // config 
    const configrdr = {
      type: 'radar',
      data: datardr,
      options: {

        legend: {
          display: false

        },
      }
    };

    var scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
    // var scatterChart = new Chart(scatterChartCanvas, {
    //   type: 'scatter',
    //   data: scatterChartData,
    //   options: scatterChartOptions
    // });
    const scatterChart = new Chart(scatterChartCanvas, configrdr
    )

  }

  if ($("#scatterChartDark").length) {
    var scatterChartCanvas = $("#scatterChartDark").get(0).getContext("2d");
    var scatterChart = new Chart(scatterChartCanvas, {
      type: 'scatter',
      data: scatterChartDataDark,
      options: scatterChartOptionsDark
    });
  }

  if ($("#browserTrafficChart").length) {
    var doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
    var doughnutChart = new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: browserTrafficData,
      options: doughnutPieOptions
    });
  }
});