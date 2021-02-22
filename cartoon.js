const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const height = canvas.height;
const width = canvas.width;


function anamation(){
   window.requestAnimationFrame(draw); 
}
function draw(){
    //background color
    ctx.fillStyle = 'rgb(135, 206, 235)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //sun
    ctx.fillStyle = 'rgb(255,191,0)';
    ctx.beginPath();
    ctx.arc(1000, 106, 50,0,2*Math.PI);
    ctx.lineTo(550, 106);
    ctx.fill();
    //text
    ctx.fillStyle = 'white';
    ctx.lineWidth = 1;
    ctx.font = '48px georgia';
    ctx.fillText('What a Nice Day!',width/3,50);
    //cloud
    drawCloud(canvas.width/6,150,0.5);
    drawCloud(800,140,0.3);
    drawCloud(1200,200,0.5);
    drawCloud(900,180,0.6);
    drawCloud(canvas.width/4,160,0.7);
    drawCloud(600,140,0.4);
    //Mountain
    ctx.fillStyle = 'rgb(72,36,10)';
    ctx.beginPath();
    ctx.arc(width,height,400,0,Math.PI*1.5,false);
    ctx.fill();
    //tree
    drawTree(width-50,height-400);
    drawTree(width-50,height-300);
    drawTree(width-50,height-200);
    drawTree(width-50,height-100);
    drawTree(width-150,height-370);
    drawTree(width-150,height-300);
    drawTree(width-150,height-200);
    drawTree(width-150,height-100);
    drawTree(width-250,height-300);
    drawTree(width-250,height-200);
    drawTree(width-250,height-100);
    drawTree(width-250,height-50);
    drawTree(width-300,height-270);
    drawTree(width-300,height-50);
    drawTree(width-300,height-200);
    drawTree(width-300,height-100);
    drawTree(width-380,height-100);
    drawTree(width-400,height-50);
    drawTree(width-350,height-150);
    drawTree(width-200,height-300);
    drawTree(width-100,height-50);
    drawTree(width-200,height-150);
    drawTree(width-100,height-100);
    drawTree(width-100,height-270);
    drawTree(width-100,height-330);
    //boat
    drawBoat(500,770,'black');
    drawBoat(300,770,'blue');
    drawBoat(600,700,'yellow');
    drawBoat(100,750,'green');
    drawBoat(0,770,'black');
    
    
    //
  
   
    
    }
function drawBoat(x,y,color){
    //main boady
    ctx.fillStyle =color;
    ctx.moveTo(x,y);
    ctx.lineTo(x+100,y);
    ctx.lineTo(x+75,y+20);
    ctx.lineTo(x+25,y+20);
    ctx.lineTo(x,y);
    //cabin
    ctx.arc(x+50,y,20,0,Math.PI,true);
    ctx.fill();
    
    
}
    
function drawCloud(x,y,size){
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(x, y, 60 * size, Math.PI * 0.5, Math.PI * 1.5);
ctx.arc(x + (70 * size), y - (60 * size), 70 * size, Math.PI * 1, Math.PI * 1.85);
ctx.arc(x + (152 * size), y - (45 * size), 50 * size, Math.PI * 1.37, Math.PI * 1.91);
ctx.arc(x + (200 * size), y, 60 * size, Math.PI * 1.5, Math.PI * 0.5);
ctx.fill();
}
function drawTree(x,y){
    let treeHeight = 10;
    let treeWidth = 10;
    //trunk
    ctx.fillStyle = 'rgb(117,59,16)';
    ctx.fillRect(x,y,treeWidth,treeHeight);
    //leaves
    for(let i=0;i<3;i++){
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(x-10,y);
        ctx.lineTo(x+20,y);
        ctx.lineTo(x+5,y-15);
        ctx.lineTo(x-10,y);
        ctx.fill();
        y = y-10;
    }
    
}
anamation();






      
     
      
    


