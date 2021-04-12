/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ctx = document.getElementById('horizontal_chart').getContext('2d');
var myChart = new Chart(ctx,{
    type:'bar',
    data:{
        labels:['High School','Secondary School','Junior High-Intermediate-Middle','K-12 all grades','K-8','Elementary'],
        datasets:[{
            label:'School Level',
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850",'#4e82cd'],
            data:[151160,30252,15742,8294,6858,25]
        }]
    },
    
    options:{
        plugins:{
            title:{
                display: true,
                text:'2014-15 To 2016-17 NYC School Level'
            }
        }
    }
});

