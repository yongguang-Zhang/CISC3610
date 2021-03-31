/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.addEventListener('DOMContentLoaded', main);

let canvas,ctx,bg,running,bubble,frames;

function main(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    //Background Image
    bg = new Image();
    bg.src = 'background.jpg';
    bg.onload = () => ctx.drawImage(bg,0,0);
    //animation image
    running = new Image();
    running.src = "sprites.png";
    //bubble image
    bubble = new Image();
    bubble.src = "bubble.png";
    
    frames = cat.frames;
    run();
}

function run(){
    let count = 0;
    
    setInterval(() =>
    {
        drawFrame(count);
        count >= frames.length - 1 ? count = 0 : count++;
    }, 150);
}
function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0);
}   
function drawFrame(Fnum)
{
    clearCanvas();

    let f = frames[Fnum];
    ctx.drawImage(
        running,
        f.frame.x,
        f.frame.y,
        f.frame.w,
        f.frame.h,
        200,
        350,
        f.sourceSize.w,
        f.sourceSize.h
    );
    drawSpeech();
}   
function drawSpeech()
{
    //ctx.drawImage(bubble, 50, 50);
    
    // Text
    ctx.font = '24px Arial';
    ctx.fillStyle = 'Red'
    ctx.textAlign = 'center';
    ctx.fillText('Never Stop Running!', 210, 130);
    
}   
