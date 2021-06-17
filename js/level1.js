const accessCode1 = "A";
const accessCode2 = "B";
const accessCode3 = "C";
const accessCode4 = "D";

function question1() {
    background(bg2);
   
textSize(20)
fill("white")
 text("Question 1:- Which of the following is not a traditional method of irrigation ?", 210,180);
 text("A:- PulleySystem",225,230);
 text("B:- leverSystem",225,260);
 text("C:- SprinklerSystem",225,290);
text("D:- Dhekli",225,320);

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
    question2();
});

}

function question2() {
    background(bg2);
   console.log(score)
textSize(20)
fill("white")
 text("Question 2:- Which of the following is / are antibiotics ?", 210,180);
 text("A:- Streptomycin",225,230);
 text("B:- tetracyline",225,260);
 text("C:- penicillin",225,290);
text("D:- All of these",225,320);

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
    background(bg2)
     question3()
     
  });


}

function question3() {
    background(bg2);
    console.log(score)
textSize(20)
fill("white")
 text("Question 3:- Which of the following is also known as suicidal bag of cell ?", 210,180);
 text("A:- Endoplasmic Reticulum",225,230);
 text("B:- Golgi Appratus",225,260);
 text("C:- Lysosomoes",225,290);
text("D:- Nucleus",225,320);

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
    background(bg2)
     question4()
     
  });


}
function question4() {
    background(bg2);
    console.log(score)
textSize(20)
fill("white")
 text("Question 4:- Which of the following is a sexullay transmitted disease?", 210,180);
 text("A:- Syphillis",225,230);
 text("B:- AIDS",225,260);
 text("C:- Gonorrhoea",225,290);
text("D:- All Of These",225,320);

var button = createButton('Submit');
button.position(400,370);
button.style('background', 'lightgrey');    
    
var input = createInput("enter your ans here....");
input.position(500,370);

button.mousePressed(() => {
    if(system.authenticate(accessCode2,input.value())){
       
        score++;
    }
    clear()
    background(bg2)
     question5()
     
  });


}

function question5() {
    background(bg2);
    console.log(score)
textSize(20)
fill("white")
 text("Question 5:- Menstrual cycle includes?", 210,180);
 text("A:- maturation of egg ans its release",225,230);
 text("B:- thickening of uterine wall",225,260);
 text("C:- shedding of uterine wall and bleeding",225,290);
text("D:- All Of These",225,320);

var button = createButton('Submit');
button.position(400,370);
button.style('background', 'lightgrey');    
    
var input = createInput("enter your ans here....");
input.position(500,370);

button.mousePressed(() => {
    if(system.authenticate(accessCode4,input.value())){
       
        score++;
    }
    button.hide()
    input.hide()
    clear()
    background(bg2)
     result();
     
  });
}
function result(){
    clear()
    background(bg)
   
    fill("lightblue");
    text("Score="+score+"/5",400,300);

  var  button = createButton('level 2')
  if(score===5){
  button.mousePressed(() => {
    clear()
    background(bg2);
    score=0
    question6();
  
})
  }
  else{
    button.mousePressed(() => {
        clear()
        background(bg2);
        score=0
        question1();
      
    })
  }
}

