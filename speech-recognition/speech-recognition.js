/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//document.addEventListener('DOMContentLoaded',preload);

let canvas,output,ctx;
let animals,cat,dog,lion,goose,bird;
let catImg,lionImg,dogImg,gooseImg,birdImg,bg;

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';

function preload(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    bg = new Image();
    bg.src = "bg.jpg";
    bg.onload = () => ctx.drawImage(bg,0,0);
    
    loadImg();
    defineAnimals();
    
    output = document.getElementById('output');
    
    document.getElementById('speak').addEventListener('click',SpeakContent);
}

function loadImg(){
    catImg = new Image();
    catImg.src = 'cat.png';
    
    lionImg = new Image();
    lionImg.src = 'lion.png';
    
    dogImg = new Image();
    dogImg.src = 'dog.jpg';
    
    gooseImg = new Image();
    gooseImg.src = 'goose.png';
    
    birdImg = new Image();
    birdImg.src = 'bird.png';
}

function defineAnimals(){
    cat = {
        name:'cat',
        x:canvas.width / 2,
        y:canvas.height / 2,
        img:catImg
    };
    
    lion = {
        name:'lion',
        x:canvas.width / 2,
        y:canvas.height / 2,
        img:lionImg
    };
    
    dog = {
        name:'dog',
        x:canvas.width / 2,
        y:canvas.height / 2,
        img:dogImg
    };
    
    goose = {
        name:'goose',
        x:canvas.width / 2,
        y:canvas.height / 2,
        img:gooseImg
    };
    
    bird = {
        name:'bird',
        x:canvas.width / 2,
        y:canvas.height / 2,
        img:birdImg
    };
    
    animals = {
        'cat':cat,
        'dog':dog,
        'lion':lion,
        'goose':goose,
        'bird':bird
    };
}
function SpeakContent(content){
    text = content.target.textContent;
    if(text === 'Speak'){
        content.target.textContent = 'Stop';
        recognition.start();
    }
    else if(text ==='Stop'){
        content.target.textContent = 'Speak';
        recognition.abort();
    }
}

recognition.onresult = (content) =>{
    rec = content.result[0][0].transcript.toLowerCase();
    if(rec === 'about'){
        copyright = 'Yongguang Zhang,Copyright 2021';
        output.textContent = copyright;
        textToSpeech(copyright);
    }
    else if(rec === 'help'){
        help = "Say a name of the object on the screen. Say about, to hear about the program.";
        output.textContent = help;
        textToSpeech(help);
    }
    else if(animals[rec]!== undefined){
        animal='${rec} is on your screen!';
        displayAnimals(animals[rec]);
        output.textContent=animal;
        textToSpeech(animal);
    }
    else{
        nomatch = 'Not recognizable';
        output.textContent=nomatch;
        textToSpeech(nomatch);
    }
        
};

function displayAnimals(animal){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(animal.img, animal.width / 2,animal.height / 2, 200, 300);
}

function textToSpeech(text){
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
recognition.onspeechend = () => recognition.stop();

recognition.onerror = (content) => console.error(`Error occurred in recognition: ${content.error}`);  
    