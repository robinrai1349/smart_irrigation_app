document.addEventListener("DOMContentLoaded", function() {
    const canvas1 = document.getElementById('CO2_Graph_Canvas');

    const data1 = {
        labels: ["Initial"],
        datasets: [{
            label: '',
            data: [0],
            borderWidth: 5,
            borderColor: '#B00831', // Set line color to blue
            fill: true,
        }]
    };

    const data2 = {
        labels: [],
        datasets: [{
            label: '',
            data: [0],
            borderWidth: 5,
            borderColor: 'red', // Set line color to red
            fill: true,
        }]
    };

    const chart1 = new Chart(canvas1, {
        type: 'line',
        data: data1,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'grey',
                        lineWidth: 1,
                    }
                }
            },
            plugins: {
              legend: {
                labels: {
                  boxWidth: 0
                }
              }
            },
        }
    });
});