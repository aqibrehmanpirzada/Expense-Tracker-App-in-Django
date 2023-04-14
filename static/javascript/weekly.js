console.log('Hello world')

const renderCharts=(data,labels)=>{
    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.height=200
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Last one month expense',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                radius : 150
            }]
        },
        options: {
            title: {
                
                display : true,
                text : 'Expense per Category',
            }
        }
    });
}

const getChartData=()=>{
    console.log('fetching');
    fetch('/expense_weekly').then(res=>res.json()).then(results=>{
        console.log("results",results);
        const data = results.values;
        const labels = results.labels;
        renderCharts(data , labels);
    })
};

document.onload = getChartData()

// function createPieChart() {
//     // Get the JSON data from the Django view
//     fetch('/money_per_category')
//       .then(response => response.json())
//       .then(data => {
//         // Get the canvas element and create the Chart.js pie chart
//         const canvas = document.getElementById('myChart');
//         const chart = new Chart(canvas, {
//           type: 'pie',
//           data: {
//             labels: data.labels,
//             datasets: [{
//               data: data.values,
//               backgroundColor: [
//                 '#FF6384',
//                 '#36A2EB',
//                 '#FFCE56',
//                 '#8BC34A',
//                 '#673AB7',
//                 '#FF9800',
//                 '#795548',
//                 '#4CAF50'
//               ]
//             }]
//           },
//           options: {
//             title: {
//               display: true,
//               text: 'Expenses per Category'
//             }
//           }
//         });
//       });
//   }