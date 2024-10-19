const dataPizza = {
    labels: ['Clientes', 'Empresários', 'Microempresários', 'Vendedores', 'Comerciantes', 'Gerentes'],
    datasets: [{
        label: 'Total',
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
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

const configPizza = {
    type: 'pie',
    data: dataPizza,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white' 
                }
            },
            title: {
                display: true,
                text: 'Gráfico de visitas',
                color: 'white'
            }
        }
    }
};

const pizza = new Chart(document.getElementById('graficopizza'), configPizza);

const dataBar = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Vendas',
        data: [100, 200, 320, 50, 20, 30],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
    }]
};

const configBar = {
    type: 'bar',
    data: dataBar,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white' 
                }
            },
            x: {
                ticks: {
                    color: 'white' 
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white' 
                }
            },
            title: {
                display: true,
                text: 'Gráfico de Vendas',
                color: 'white' 
            }
        }
    }
};

var ctxBar = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctxBar, configBar);

const dataLine = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Vendas',
        data: [100, 200, 320, 50, 20, 30], 
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1
    }]
};

const configLine = {
    type: 'line',
    data: dataLine,
    options: {
        plugins: {
            title: {
                display: true,
            
            }
        },
        scales: {
            y: {
                stacked: true
            }
        }
    }
};

var ctxLine = document.getElementById('myLineChart').getContext('2d');
var lineChart = new Chart(ctxLine, configLine);

const dataHorizontalBar = {
    labels: ['Clientes', 'Empresários', 'Microempresários', 'Vendedores', 'Comerciantes', 'Gerentes'],
    datasets: [{
        label: 'Total',
        data: [100, 200, 320, 50, 20, 30],
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
        borderWidth: 1
    }]
};

const configHorizontalBar = {
    type: 'bar',
    data: dataHorizontalBar,
    options: {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2, 
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right', 
            },
            title: {
                display: true,
                color: 'dark'
            }
        }
    }
};

var ctxHorizontalBar = document.getElementById('myHorizontalChart').getContext('2d');
var myHorizontalChart = new Chart(ctxHorizontalBar, configHorizontalBar);
