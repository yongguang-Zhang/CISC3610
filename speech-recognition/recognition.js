document.addEventListener('DOMContentLoaded', init);

let canvas, ctx, output;
let animals,cat,dog,lion,goose,elephant;
let catImg,lionImg,dogImg,gooseImg,elephantImg;

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';

function init()
{
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    loadImages();
    defineAnimals();
    drawBg();

    output = document.getElementById('output');

    document.getElementById('speak').addEventListener('click',SpeakContent);
}
function drawBg(){
    bg = new Image();
    bg.src = "bg.jpg";
    bg.onload = () => ctx.drawImage(bg,0,0,800,600);
}
function loadImages()
{
    elephantImg = new Image();
    elephantImg.src = 'elephant.jpg';

    dogImg = new Image();
    dogImg.src = 'dog.jpg';

    lionImg = new Image();
    lionImg.src = 'lion.jpg';

    gooseImg = new Image();
    gooseImg.src = 'goose.jpg';

    catImg = new Image();
    catImg.src = 'cat.jpg';
}

function defineAnimals()
{
    cat= {
        name: 'cat',
        x: canvas.width / 2,
        y: (canvas.height / 2) - 100,
        img: catImg
    };
    
    lion = {
        name: 'lion',
        x: canvas.width / 2,
        y: (canvas.height / 2) - 50,
        img: lionImg
    };
    
    dog = {
        name: 'dog',
        x: canvas.width / 2,
        y: (canvas.height / 2),
        img: dogImg
    };
    
    goose = {
        name: 'goose',
        x: canvas.width / 2,
        y: (canvas.height / 2) + 50,
        img: gooseImg
    };
    
    elephant = {
        name: 'elephant',
        x: canvas.width / 2,
        y: (canvas.height / 2) + 100,
        img: elephantImg
    };

    animals = {
        'cat':cat,
        'dog':dog,
        'lion':lion,
        'goose':goose,
        'elephant':elephant
    }
}



function SpeakContent(content)
{
    text = content.target.textContent;
    if(text === 'Speak')
    {
        content.target.textContent = 'Stop';
        recognition.start();
    }
    else if(text === 'Stop')
    {
        content.target.textContent = 'Speak';
        recognition.abort();
        drawBg();
        output.textContent = "";
    }
}

recognition.onresult = (content) =>
{
    res = content.results[0][0].transcript.toLowerCase();
    if(res == 'about')
    {
        copyright = 'Yongguang Zhang Learn From Others and Make it on 2021';
        output.textContent = copyright;
        textToSpeech(copyright);
    }
    else if(res == 'help')
    {
        help = 'Say a name of the object on the screen. Say about, to hear about the program.';
        output.textContent = help;
        textToSpeech(help);
    }
    else if(animals[res] != undefined)
    {
        
        animal = `${res} is on your screen.`
        displayAnimals(animals[res]);
        output.textContent = animal;
        textToSpeech(animal);
    }
    else
    {
        nomatch = "Please Say A Word In my List";
        output.textContent = nomatch;
        textToSpeech(nomatch);
        
    }
}

function displayAnimals(animal)
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(animal.img, 0,0,800,600);
}

function textToSpeech(text)
{
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

recognition.onspeechend = () => recognition.stop();

recognition.onerror = (content) => console.error(`Error occurred in recognition: ${content.error}`);