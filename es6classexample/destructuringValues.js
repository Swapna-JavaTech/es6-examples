function getValues(){
    return [80,78,67];
}

let values = getValues();

//before es6

let v1 = values[0];
let v2 = values[1];

//after es6
let [x,y,z] = getValues();

console.log(`${x} ${y} ${z}`);

let employee = {
    firstName : 'Dell',
    lastName : "Technologies"
}

let {firstName:fname,lastName:lname} = employee;

console.log(`${fname} ${lname}`);

let {firstName} = employee;

console.log(`${firstName}`);