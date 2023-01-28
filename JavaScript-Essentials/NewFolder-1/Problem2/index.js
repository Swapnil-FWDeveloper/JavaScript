

function sayGoodbye(){
    console.log("Good bye! ",this);
}

function sayHello(){
    console.log("Helloo!",this);
    // this 
    sayGoodbye();
}
sayHello()