const data = [4,55,67];
const newData = [32,67,55,...data];

console.log(newData);

const newData1 = [...data,32,67,55,];

console.log(newData1);

const newData11 = [32,...data,67,55,];

console.log(newData11);