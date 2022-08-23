function message(){
    console.log("Hi!!!How are you???");
}

function sendName(name){
    console.log("My name is " + name);
}

//calling the function using setTimeOut
setTimeout(message,2000);
sendName('Swapna');

//using callback mechanism in js

function message1(name,callBackfn){
    console.log("Hi!!!How are you???");
    callBackfn(name);
}

function sendName1(name){
    console.log("My name is " + name); 
}

//calling the function after 3 seconds
setTimeout(message1,3000,'SimpliLearn',sendName1);