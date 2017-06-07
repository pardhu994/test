

var barData = {
    labels: ['Italy', 'UK', 'USA', 'Germany', 'France', 'Japan'],
    datasets: [
        {
            label: '2010',
            backgroundColor: '#D3D3D3',
            data: [2500, 1902, 1041, 610, 1245, 952]
        },
        {
            label: '2014',
            backgroundColor: '#008000',
            data: [3104, 1689, 1318, 589, 1199, 1436]
        }
    ]
};

var context = document.getElementById('clients').getContext('2d');
var myBarChart = new Chart(context, {
    type: 'bar',
    data:barData,
   
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: '#D3D3D3'
    }, {
     
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }
});


var ctx = document.getElementById('areaChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['0', '10', '20', '30', '40', '50', '60',70,80,90],
    datasets: [{
      data: [4, 5, 3, 4, 4,3,3,4,2,3],
      backgroundColor: '#D3D3D3'
    }]
  }
});


          

