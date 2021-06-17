

function question6(){
background(bg2);
 console.log("q6")
  textSize(20);
    fill("white")
 text("Question 6:-Which disease is caused by deficiency of vitamin A ?", 210,180);
 text("A:- Beri-Beri",225,230);
 text("B:- Scurvy",225,260);
 text("C:- nightBlindness",225,290);
text("D:- Rickets",225,320);

var button = createButton('Submit');
button.position(400,370);
button.style('background', 'lightgrey'); 


var input = createInput("enter your ans here....");
input.position(500,370);


button.mousePressed(() => {
    if(system.authenticate(accessCode3,input.value())){
       
        score++;
    }
    clear()
    background(bg2);
    question7();
});
}

function question7(){
    background(bg2);
  
  textSize(20);
    fill("white")
 text("Question 7:- Which of the following is the cell organelle ?", 210,180);
 text("A:- endoplasmic Reticulum",225,230);
 text("B:- Blood",225,260);
 text("C:- chromosomes",225,290);
text("D:- nucleus",225,320);

var button = createButton('Submit');
button.position(400,370);
button.style('background', 'lightgrey'); 


var input = createInput("enter your ans here....");
input.position(500,370);


button.mousePressed(() => {
    if(system.authenticate(accessCode1,input.value())){
       
        score++;
    }
    clear()
    background(bg2);
    question8();
});
}

function question8(){
background(bg2);
   
  textSize(20);
    fill("white")
 text("Question 8:- In girls first menstural flow is called ?", 210,180);
 text("A:- Menarche",225,230);
 text("B:- menopause",225,260);
 text("C:- mensturation",225,290);
text("D:- puberty",225,320);

var button = createButton('Submit');
button.position(400,370);
button.style('background', 'lightgrey'); 


var input = createInput("enter your ans here....");
input.position(500,370);


button.mousePressed(() => {
    if(system.authenticate(accessCode1,input.value())){
       
        score++;
    }
    clear()
    background(bg2);
    question9();
});
}
function question9(){
background(bg2);
  
  textSize(20);
    fill("white")
 text("Question 9:- which of the following causes elephantasis ?", 210,180);
 text("A:- Bacteria",225,230);
 text("B:- female Aedes mosquito",225,260);
 text("C:- female anopheles mosquito",225,290);
text("D:- female culex mosquito",225,320);

var button = createButton('Submit');
button.position(400,370);
button.style('background', 'lightgrey'); 


var input = createInput("enter your ans here....");
input.position(500,370);


button.mousePressed(() => {
    if(system.authenticate(accessCode4,input.value())){
       
        score++;
    }
    clear()
    background(bg2);
    question10();
});
}

function question10(){
background(bg2);
    
  textSize(20);
    fill("white")
 text("Question 10:- which type of disease is common cold ?", 210,180);
 text("A:- Acute disease",225,230);
 text("B:- Chronic disease",225,260);
 text("C:- Congenetical disease",225,290);
text("D:- Acquired disease",225,320);

var button = createButton('Submit');
button.position(400,370);
button.style('background', 'lightgrey'); 


var input = createInput("enter your ans here....");
input.position(500,370);


button.mousePressed(() => {
    if(system.authenticate(accessCode1,input.value())){
       
        score++;
    }
    clear()
    background(bg2);
   finalResult()
});
}

function finalResult(){
   
    clear()
    background(bg)
    console.log("finalResult")

    fill("lightblue");
    text("Score="+score+"/5",400,300);

  
    var  button = createButton('level 2')
  if(score===5){
      textSize(20)
 fill("lightblue")
  text("Congradulations you win the game",400,250)
  
}
  else{
    button.mousePressed(() => {
        clear()
        background(bg2);
        score=0
        question6();
      
    })
  }


  
}
