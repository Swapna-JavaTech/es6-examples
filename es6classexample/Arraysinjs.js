// declare an array

const countries = ['India','New York','London','Scotland'];

//Before ES6
for(var i=0;i<countries.length;i++){
    console.log(countries[i]);
}

//After ES6
console.log("Using for each....")
countries.forEach(printValues);

function printValues(item,index){
    console.log(item);
}

//map method in Arrays
const flowers = ['Jasmine','Rose','Lavendar'];

const flowerList = flowers.map(readEachFlower);

function readEachFlower(flower){
    return flower;
}
console.log(flowerList);

//filter method in array
const flowerList1 = flowers.filter(readEachFlower1);

function readEachFlower1(flower){
    if(flower.length > 4)
    return flower;
}
console.log(flowerList1);

const values = [5,4,2,9];

const newValues = values.map(squareValueFunction);

function squareValueFunction(value){
    return value * value;
}

console.log(newValues);

const filetedValues = values.filter(checkSquareRoot);

function checkSquareRoot(value){
    //if(=== value)
    return  Math.sqrt(value);
}

console.log(filetedValues);