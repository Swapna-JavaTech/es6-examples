//Before ES6

function calculateInterest(amount,roi,time){
    if((roi == 0) || (roi==undefined)){
        roi=5;
    }
    return (amount * roi * time)/100;
}


//After ES6

function calculateInterest1(amount,roi=5,time=2){
    if((roi == 0) || (roi==undefined)){
        roi=5;
    }
    return (amount * roi * time)/100;
}

console.log(calculateInterest1(5000));
console.log(calculateInterest1(5000,10,5));

//After ES6

function calculateInterest2(roi=5,amount,time){
    if((roi == 0) || (roi==undefined)){
        roi=5;
    }
    return (amount * roi * time)/100;
}

console.log(calculateInterest2(5000,10));