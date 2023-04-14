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
                text : 'Income per Category',
            }
        }
    });
}

const getChartData=()=>{
    console.log('fetching');
    fetch('/income_weekly').then(res=>res.json()).then(results=>{
        console.log("results",results);
        const data = results.values;
        const labels = results.labels;
        renderCharts(data , labels);
    })
};

document.onload = getChartData()
