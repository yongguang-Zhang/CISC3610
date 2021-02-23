/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const height = canvas.height;
const width = canvas.width;

var fruit = [
	{name:"Apple", quantity:20, color:"red"},
	{name:"Orange", quantity:10, color:"orange"},
        {name:"Banana", quantity:15, color:"yellow"},
        {name:"Kiwi", quantity:3, color:"green"},
        {name:"Blueberry", quantity:5, color:"blue"},
        {name:"Grapes", quantity:8, color:"purple"}
        
];
ctx.fillStyle = 'rgb(135, 206, 235)';
ctx.fillRect(0,0,canvas.width,canvas.height);
var x = 0;
for(let i=0;i<fruit.length;i++){
    //draw chart
    ctx.fillStyle = fruit[i].color;
    ctx.fillRect(x,height-(fruit[i].quantity*30),130,fruit[i].quantity*30);
    //text
    ctx.fillStyle='black'
    ctx.font = '24px serif';
    ctx.textAlign = 'center';
    ctx.fillText(fruit[i].quantity,x+65,750);
    ctx.fillText(fruit[i].name,x+65,780);
    
    x+=130;
}

