/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ctx = document.getElementById('pie-chart').getContext('2d');
var myChart = new Chart(ctx,{
    type:'pie',
    data:{
        labels:['General Academic','Career Technical','Transfer School','YABC','Special Education'],
        datasets:[{
            label:'School Type',
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data:[175744,17144,13311,5776,356]
        }]
    },
    
    options:{
        plugins:{
            title:{
                display: true,
                text:'2014-15 To 2016-17 NYC School Type'
            }
        }
    }
});
