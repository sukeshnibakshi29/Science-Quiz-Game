class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        
        //add code to return true if correct answer entered.

        if(actualCode===enteredCode.toUpperCase()){
            return true
        }else{
            return false
        }

        
    }

}

