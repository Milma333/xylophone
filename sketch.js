var bar1,bar2,bar3,bar4,stick,stickimg,stand,standimg,backimg;
var s1,s2,s3,s4,t1,t2,t3,t4,t5,t6,t7,t8;
function preload(){
    s1=loadSound("/sounds/s1.wav");
    s2=loadSound("/sounds/s2.wav");
    s3=loadSound("/sounds/s3.wav");
    s4=loadSound("/sounds/s4.wav");
    s5=loadSound("/sounds/s5.wav");
    s6=loadSound("/sounds/s6.wav");
    s7=loadSound("/sounds/s7.wav");
    s8=loadSound("/sounds/s8.wav");

    t1=loadImage("/tabs/t8.png");
    t2=loadImage("/tabs/t7.png");
    t3=loadImage("/tabs/t6.png");
    t4=loadImage("/tabs/t5.png");
    t5=loadImage("/tabs/t4.png");
    t6=loadImage("/tabs/t3.png");
    t7=loadImage("/tabs/t2.png");
    t8=loadImage("/tabs/t1.png");

    standimg=loadImage("stand.png")
    stickimg=loadImage("stick.png")
    backimg=loadImage("background.jpg")

}
function setup(){
    createCanvas(windowWidth,windowHeight-5);
    stand=createSprite(windowWidth/2-45,(windowHeight+60)/2);
    stand.addImage(standimg);
    stand.scale=1.8
    bar1=createSprite((windowWidth/2)-270,(windowHeight-5)/2);
    bar2=createSprite((windowWidth/2)-210,(windowHeight-5)/2);
    bar3=createSprite((windowWidth/2)-140,(windowHeight-5)/2);
    bar4=createSprite((windowWidth/2)-70,(windowHeight-5)/2);
    bar5=createSprite((windowWidth/2)+0,(windowHeight-5)/2);
    bar6=createSprite((windowWidth/2)+70,(windowHeight-5)/2);
    bar7=createSprite((windowWidth/2)+140,((windowHeight-5)/2)+10);
    bar8=createSprite((windowWidth/2)+210,((windowHeight-5)/2)+25);
    
    bar1.setCollider("rectangle",-10,35,45,120)
    bar2.setCollider("rectangle",0,33,45,145)
    bar3.setCollider("rectangle",0,33,45,165)
    bar4.setCollider("rectangle",0,33,45,185)
    bar5.setCollider("rectangle",0,33,45,205)
    bar6.setCollider("rectangle",0,33,45,225)
    bar7.setCollider("rectangle",0,33,45,245)
    bar8.setCollider("rectangle",0,33,45,265)





    bar1.addImage(t1);
    bar2.addImage(t2);
    bar3.addImage(t3);
    bar4.addImage(t4);
    bar5.addImage(t5);
    bar6.addImage(t6);
    bar7.addImage(t7);
    bar8.addImage(t8);
    
    stick=createSprite(10,10,10,10);
    stick.addImage(stickimg);
    stick.setCollider("circle",-20,-105,25)
    stick.scale=0.6

}
function draw(){
    background(backimg);
    stick.x=mouseX;
    stick.y=mouseY;
    if(stick.isTouching(bar1)){
        console.log("touching");
        if(!s1.isPlaying())
        {
            s1.play();
        }
    
    }
    
    else if(stick.isTouching(bar2)){
        console.log("touching");
        if(!s2.isPlaying())
        {s2.play();}
     
    }
    
    else if(stick.isTouching(bar3)){
        console.log("touching");
        if(!s3.isPlaying())
        {s3.play();}
        
    }
   
    else if(stick.isTouching(bar4)){
       
        if(!s4.isPlaying())
        {s4.play();}
        
    }
    else if(stick.isTouching(bar5)){
       
        if(!s5.isPlaying())
        {s5.play();}
        
    }
 
    else if(stick.isTouching(bar6)){
       
        if(!s6.isPlaying())
        {s6.play();}
        
    }
 
    else if(stick.isTouching(bar7)){
       
        if(!s7.isPlaying())
        {s7.play();}
        
    }
    else if(stick.isTouching(bar8)){
       
        if(!s8.isPlaying())
        {s8.play();}
        
    }
   
 
 
 
drawSprites();
}
