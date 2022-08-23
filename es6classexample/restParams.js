function multiply(...values){
    let result =1;
    for(const v of values){
        result *= v;
    }
    return result;
}

console.log(multiply(2,3,1,4,54,66,9));

function filterData(...data){
    return data.filter(function(d){
        if(d > 10)
            return d;
    });
}

let result =  filterData(2,3,1,4,54,66,9);

console.log(result);

function filterNumbers(...data){
    return data.filter(function(d){
        if(typeof d === 'number')
            return d;
    });
}
let result1 =  filterNumbers('2',3,'1',4,'5',4,'66',9);
console.log(result1);

function filterNumbers1(...data,values){
    return data.filter(function(d){
        if(typeof d === 'number')
            return d;
    });
}