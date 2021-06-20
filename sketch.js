const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(950,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here


}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    console.log(hour);

    if(hour>=12 && hour<=13){
        bg = "sunrise6.png";
    }else if(hour>=14 && hour<=15){
        bg = "sunrise7.png";
    }else if(hour>=16 && hour==17){
        bg = "sunset8.png";
    }else if(hour>=18 && hour==19){
        bg = "sunset9.png";
    }else if(hour>=20 && hour==21){
        bg = "sunset10.png";
    }else if(hour>=22 && hour==23){
        bg = "sunset11.png";
    }else if(hour>=23 && hour==24){
        bg = "sunset12.png";
    }else if(hour>=24 && hour==6){
        bg = "sunset12.png";
    }else if(hour>=06 && hour==07){
        bg = "sunset1.png";
    }else if(hour>=08 && hour==09){
        bg = "sunset2.png";
    }else if(hour>=09 && hour==10){
        bg = "sunset3.png";
    }else if(hour>=10 && hour==11){
        bg = "sunset4.png";
    }else if(hour>=11 && hour==12){
        bg = "sunset6.png";
    }

backgroundImg = loadImage(bg);

} 