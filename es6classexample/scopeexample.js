var x = "Declared outside the function";
function display(){
  
    console.log("Inside the function");
    console.log(x);
}

display();
console.log(x);