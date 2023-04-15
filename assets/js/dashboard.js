(function ($) {
  'use strict';
  $(function () {

    Chart.defaults.global.legend.labels.usePointStyle = true;

    if ($("#serviceSaleProgress").length) {
      var bar = new ProgressBar.Circle(serviceSaleProgress, {
        color: 'url(#gradient)',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 8,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 6 },
        to: { color: '#57c7d4', width: 6 }
      });

      bar.animate(.65);  // Number from 0.0 to 1.0
      bar.path.style.strokeLinecap = 'round';
      let linearGradient = '<defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse"><stop offset="20%" stop-color="#da8cff"/><stop offset="50%" stop-color="#9a55ff"/></linearGradient></defs>';
      bar.svg.insertAdjacentHTML('afterBegin', linearGradient);
    }
    if ($("#productSaleProgress").length) {
      var bar = new ProgressBar.Circle(productSaleProgress, {
        color: 'url(#productGradient)',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 8,
        trailWidth: 8,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#aaa', width: 6 },
        to: { color: '#57c7d4', width: 6 }
      });

      bar.animate(.6);  // Number from 0.0 to 1.0
      bar.path.style.strokeLinecap = 'round';
      let linearGradient = '<defs><linearGradient id="productGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse"><stop offset="40%" stop-color="#36d7e8"/><stop offset="70%" stop-color="#b194fa"/></linearGradient></defs>';
      bar.svg.insertAdjacentHTML('afterBegin', linearGradient);
    }
    if ($("#points-chart").length) {
      var ctx = document.getElementById('points-chart').getContext("2d");

      var gradientStrokeViolet = ctx.createLinearGradient(0, 0, 0, 181);
      gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
      gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');

      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          datasets: [
            {
              label: "North Zone",
              borderColor: gradientStrokeViolet,
              backgroundColor: gradientStrokeViolet,
              hoverBackgroundColor: gradientStrokeViolet,
              pointRadius: 0,
              fill: false,
              borderWidth: 1,
              fill: 'origin',
              data: [20, 40, 15, 35, 25, 50, 30, 20]
            },
            {
              label: "South Zone",
              borderColor: '#e9eaee',
              backgroundColor: '#e9eaee',
              hoverBackgroundColor: '#e9eaee',
              pointRadius: 0,
              fill: false,
              borderWidth: 1,
              fill: 'origin',
              data: [40, 30, 20, 10, 50, 15, 35, 20]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                display: false,
                min: 0,
                stepSize: 10
              },
              gridLines: {
                drawBorder: false,
                display: false
              }
            }],
            xAxes: [{
              gridLines: {
                display: false,
                drawBorder: false,
                color: 'rgba(0,0,0,1)',
                zeroLineColor: '#eeeeee'
              },
              ticks: {
                padding: 20,
                fontColor: "#9c9fa6",
                autoSkip: true,
              },
              barPercentage: 0.7
            }]
          }
        },
        elements: {
          point: {
            radius: 0
          }
        }
      })
    }
    if ($("#events-chart").length) {
      var ctx = document.getElementById('events-chart').getContext("2d");

      var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 181);
      gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
      gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');

      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          datasets: [
            {
              label: "Domestic",
              borderColor: gradientStrokeBlue,
              backgroundColor: gradientStrokeBlue,
              hoverBackgroundColor: gradientStrokeBlue,
              pointRadius: 0,
              fill: false,
              borderWidth: 1,
              fill: 'origin',
              data: [20, 40, 15, 35, 25, 50, 30, 20]
            },
            {
              label: "International",
              borderColor: '#e9eaee',
              backgroundColor: '#e9eaee',
              hoverBackgroundColor: '#e9eaee',
              pointRadius: 0,
              fill: false,
              borderWidth: 1,
              fill: 'origin',
              data: [40, 30, 20, 10, 50, 15, 35, 20]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                display: false,
                min: 0,
                stepSize: 10
              },
              gridLines: {
                drawBorder: false,
                display: false
              }
            }],
            xAxes: [{
              gridLines: {
                display: false,
                drawBorder: false,
                color: 'rgba(0,0,0,1)',
                zeroLineColor: '#eeeeee'
              },
              ticks: {
                padding: 20,
                fontColor: "#9c9fa6",
                autoSkip: true,
              },
              barPercentage: 0.7
            }]
          }
        },
        elements: {
          point: {
            radius: 0
          }
        }
      })
    }
    if ($("#visit-sale-chart").length) {
      Chart.defaults.global.legend.labels.usePointStyle = true;
      var ctx = document.getElementById('visit-sale-chart').getContext("2d");

      var gradientStrokeViolet = ctx.createLinearGradient(0, 0, 0, 181);
      gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
      gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
      var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

      var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
      gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
      gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
      var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
      gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
      var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';


      updatechartl();

      function updatechartl() {
        async function fetchJSONline() {
          const urlline = "https://raw.githubusercontent.com/Mrprayag077/SIH_proj/main/pp.json";
          console.log("url var lineeee ==" + urlline);
          // const url = 'https://raw.githubusercontent.com/Mrprayag077/SIH_proj/main/pp.json';
          const responseline = await fetch(urlline);

          const datapointsline = await responseline.json();
          console.log(datapointsline);
          return datapointsline;
        };


        fetchJSONline().then(datapointsline => {
          const year = datapointsline.ppr[0].pp1.map(function (index) {
            return index.year;
          });

          console.log(year);
          console.log("pp" + year);
          const jsonArrly = JSON.stringify(year);
          localStorage.setItem("valueppy", jsonArrly);
          // lineChart.config.data.labels = yearline;
          // lineChart.update();

        });



        fetchJSONline().then(datapointsline => {
          const value = datapointsline.ppr[0].pp1.map(function (index) {
            return index.value;
          });

          console.log("pp" + value);
          const jsonArrl = JSON.stringify(value);
          localStorage.setItem("valuepp", jsonArrl);

          // lineChart.config.data.datasets[0].data = valueline;
          // lineChart.update();

        });


      };

      const str1 = localStorage.getItem("valepp");
      const parsedArr1 = JSON.parse(str1);
      console.log("hello" + parsedArr1);
      console.log("================================" + parsedArr1);
      console.log("jcnxn = " + JSON.parse(localStorage.getItem("valuepp")));


      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['2002', '2003', '2004', '2006'],
          datasets: [
            {
              label: "reg1",
              borderColor: gradientStrokeViolet,
              backgroundColor: gradientStrokeViolet,
              hoverBackgroundColor: gradientStrokeViolet,
              legendColor: gradientLegendViolet,
              pointRadius: 0,
              fill: false,
              borderWidth: 1,
              fill: 'origin',
              data: JSON.parse(localStorage.getItem("valuepp"))
            },
            {
              label: "reg2",
              borderColor: gradientStrokeRed,
              backgroundColor: gradientStrokeRed,
              hoverBackgroundColor: gradientStrokeRed,
              legendColor: gradientLegendRed,
              pointRadius: 0,
              fill: false,
              borderWidth: 1,
              fill: 'origin',
              data: JSON.parse(localStorage.getItem("valuepp"))
            },
            {
              label: "reg3",
              borderColor: gradientStrokeBlue,
              backgroundColor: gradientStrokeBlue,
              hoverBackgroundColor: gradientStrokeBlue,
              legendColor: gradientLegendBlue,
              pointRadius: 0,
              fill: false,
              borderWidth: 1,
              fill: 'origin',
              data: JSON.parse(localStorage.getItem("valuepp"))
            }
          ]
        },
        options: {
          responsive: true,
          legend: false,
          legendCallback: function (chart) {
            var text = [];
            text.push('<ul>');
            for (var i = 0; i < chart.data.datasets.length; i++) {
              text.push('<li><span class="legend-dots" style="background:' +
                chart.data.datasets[i].legendColor +
                '"></span>');
              if (chart.data.datasets[i].label) {
                text.push(chart.data.datasets[i].label);
              }
              text.push('</li>');
            }
            text.push('</ul>');
            return text.join('');
          },
          scales: {
            yAxes: [{
              ticks: {
                display: false,
                min: 0,
                stepSize: 20,
                max: 80
              },
              gridLines: {
                drawBorder: false,
                color: 'rgba(235,237,242,1)',
                zeroLineColor: 'rgba(235,237,242,1)'
              }
            }],
            xAxes: [{
              gridLines: {
                display: false,
                drawBorder: false,
                color: 'rgba(0,0,0,1)',
                zeroLineColor: 'rgba(235,237,242,1)'
              },
              ticks: {
                padding: 20,
                fontColor: "#9c9fa6",
                autoSkip: true,
              },
              categoryPercentage: 0.5,
              barPercentage: 0.5
            }]
          }
        },
        elements: {
          point: {
            radius: 0
          }
        }
      })
      $("#visit-sale-chart-legend").html(myChart.generateLegend());
    }


    if ($("#visit-sale-chart-dark").length) {

      var gradientStrokeViolet = ctx.createLinearGradient(0, 0, 0, 181);
      gradientStrokeViolet.addColorStop(0, 'rgba(218, 140, 255, 1)');
      gradientStrokeViolet.addColorStop(1, 'rgba(154, 85, 255, 1)');
      var gradientLegendViolet = 'linear-gradient(to right, rgba(218, 140, 255, 1), rgba(154, 85, 255, 1))';

      var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
      gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
      gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
      var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
      gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
      var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
          datasets: [
            {
              label: "CHN",
              borderColor: gradientStrokeViolet,
              backgroundColor: gradientStrokeViolet,
              hoverBackgroundColor: gradientStrokeViolet,
              legendColor: gradientLegendViolet,
              pointRadius: 0,
              fill: false,
              borderWidth: 1,
              fill: 'origin',
              data: [20, 40, 15, 35, 25, 50, 30, 20]
            },
            {
              label: "USA",
              borderColor: gradientStrokeRed,
              backgroundColor: gradientStrokeRed,
              hoverBackgroundColor: gradientStrokeRed,
              legendColor: gradientLegendRed,
              pointRadius: 0,
              fill: false,
              borderWidth: 1,
              fill: 'origin',
              data: [40, 30, 20, 10, 50, 15, 35, 40]
            },
            {
              label: "UK",
              borderColor: gradientStrokeBlue,
              backgroundColor: gradientStrokeBlue,
              hoverBackgroundColor: gradientStrokeBlue,
              legendColor: gradientLegendBlue,
              pointRadius: 0,
              fill: false,
              borderWidth: 1,
              fill: 'origin',
              data: [70, 10, 30, 40, 25, 50, 15, 30]
            }
          ]
        },
        options: {
          responsive: true,
          legend: false,
          legendCallback: function (chart) {
            var text = [];
            text.push('<ul>');
            for (var i = 0; i < chart.data.datasets.length; i++) {
              text.push('<li><span class="legend-dots" style="background:' +
                chart.data.datasets[i].legendColor +
                '"></span>');
              if (chart.data.datasets[i].label) {
                text.push(chart.data.datasets[i].label);
              }
              text.push('</li>');
            }
            text.push('</ul>');
            return text.join('');
          },
          scales: {
            yAxes: [{
              ticks: {
               
                min: 0,
                stepSize: 20,
                max: 80
              },
              gridLines: {
                drawBorder: false,
                color: '#322f2f',
                zeroLineColor: '#322f2f'
              }
            }],
            xAxes: [{
              gridLines: {
                display: false,
                drawBorder: false,
                color: 'rgba(0,0,0,1)',
                zeroLineColor: 'rgba(235,237,242,1)'
              },
              ticks: {
                padding: 20,
                fontColor: "#9c9fa6",
               
              },
              categoryPercentage: 0.5,
              barPercentage: 0.5
            }]
          }
        },
        elements: {
          point: {
            radius: 0
          }
        }
      })


      Chart.defaults.global.legend.labels.usePointStyle = true;
      var ctx = document.getElementById('visit-sale-chart-dark').getContext("2d");

      $("#visit-sale-chart-legend-dark").html(myChart.generateLegend());
    }

    if ($("#traffic-chart").length) {


      var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 181);
      gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
      gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
      var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

      var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 50);
      gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
      gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
      var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

      var gradientStrokeGreen = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStrokeGreen.addColorStop(0, 'rgba(6, 185, 157, 1)');
      gradientStrokeGreen.addColorStop(1, 'rgba(132, 217, 210, 1)');
      var gradientLegendGreen = 'linear-gradient(to right, rgba(6, 185, 157, 1), rgba(132, 217, 210, 1))';

      var trafficChartData = {
        datasets: [{
          data: [30, 30, 40],
          backgroundColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed
          ],
          hoverBackgroundColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed
          ],
          borderColor: [
            gradientStrokeBlue,
            gradientStrokeGreen,
            gradientStrokeRed
          ],
          legendColor: [
            gradientLegendBlue,
            gradientLegendGreen,
            gradientLegendRed
          ]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Search Engines',
          'Direct Click',
          'Bookmarks Click',
        ]
      };
      var trafficChartOptions = {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: false,
        legendCallback: function (chart) {
          var text = [];
          text.push('<ul>');
          for (var i = 0; i < trafficChartData.datasets[0].data.length; i++) {
            text.push('<li><span class="legend-dots" style="background:' +
              trafficChartData.datasets[0].legendColor[i] +
              '"></span>');
            if (trafficChartData.labels[i]) {
              text.push(trafficChartData.labels[i]);
            }
            text.push('<span class="float-right">' + trafficChartData.datasets[0].data[i] + "%" + '</span>')
            text.push('</li>');
          }
          text.push('</ul>');
          return text.join('');
        }
      };

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
          const year = datapoints.ppr[0].pp1.map(function (index) {
            return index.year;
          });

          console.log(year);
          trafficChart.config.data.labels = year;
          trafficChart.update();

        });



        fetchJSON().then(datapoints => {
          const value = datapoints.ppr[0].pp1.map(function (index) {
            return index.value;
          });

          console.log(value);
          trafficChart.config.data.datasets[0].data = value;
          trafficChart.update();

        });


      };

      // setup 
      const data14 = {
        labels: ['prayag', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Weekly Sales',
          data: [18, 12, 6, 9, 12, 3, 9],

          backgroundColor: [
            'rgba(218, 140, 255, 1)',
            'rgba(140, 255, 163, 1)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)'
          ],
          borderColor: [
            'rgba(218, 140, 255, 1)',
            'rgba(140, 255, 163, 1)',
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
        type: 'doughnut',
        data: data14,
        options: {
          responsive: true,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: false,
          legendCallback: function (chart) {
            var text = [];
            text.push('<ul>');
            for (var i = 0; i < data14.datasets[0].data.length; i++) {
              text.push('<li><span class="legend-dots" style="background:' +
                data14.datasets[0].legendColor[i] +
                '"></span>');
              if (data14.labels[i]) {
                text.push(data14.labels[i]);
              }
              text.push('<span class="float-right">' + data14.datasets[0].data[i] + "%" + '</span>')
              text.push('</li>');
            }
            text.push('</ul>');
            return text.join('');
          }
        }
      };


      var trafficChartCanvas = $("#traffic-chart").get(0).getContext("2d");
      // var trafficChart = new Chart(trafficChartCanvas, {
      //   type: 'doughnut',
      //   data: data14,
      //   options: trafficChartOptions
      // });

      const trafficChart = new Chart(trafficChartCanvas, config
      );

      // $("#traffic-chart-legend").html(trafficChart.generateLegend());
    }



    if ($("#inline-datepicker").length) {
      $('#inline-datepicker').datepicker({
        enableOnReadonly: true,
        todayHighlight: true,
      });
    }
  });
})(jQuery);
