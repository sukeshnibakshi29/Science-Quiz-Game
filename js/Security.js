class Security {

    constructor(){

       this.title = createElement('h1');
       this.title.html("Science Quiz Game");
       this.title.position(400,200);
       this.title.style('background','lightblue');

        this.button1 = createButton('Grade 8th');
        this.button1.position(400,280);
        this.button1.style('background', 'lightgrey');    

       
    }

    hide(){
        this.access1.hide()
        this.input.hide()
        this.button.hide()
        this.button2.hide()
        
    }

    display(){

        this.button1.mousePressed(() => {
           this.button1.hide()
           this.title.hide()
           question1()
           
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
        
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
    }
});




    }
}