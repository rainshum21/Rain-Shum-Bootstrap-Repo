
    //Line Chart interactive elements
    //Declare the property of lineChart:
    var ctx = document.getElementById("lineChart");
    var myChart = new Chart(ctx, {
      //Set the graph to line style:
      type: 'line',
      data: {
        //Change the data value for X axis:
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
          //Change the data value for Y axis:
          data: [56, 84, 24, 34, 45, 20, 18],
          lineTension: 0,
          //color settings for the graph:
          backgroundColor: 'transparent',
          borderColor: '#0dcaf0',
          borderWidth: 2,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false,
        }
      }
    });

