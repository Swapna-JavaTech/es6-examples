var x =1;
let y =1;
const value = 54;
if(true){
    console.log("inside the block");
    var x =2;
    console.log(x);
    let y=2;
    console.log(y);
}

console.log("outside the block");
console.log(x);
console.log(y);

try{
    value = 99;
}catch(err){
    console.log(err);
}

console.log(value);

const arr = ['r','t','h'];
arr.push('i');
console.log(arr);

arr.pop();
console.log(arr);