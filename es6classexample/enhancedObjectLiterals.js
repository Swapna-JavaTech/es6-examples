//Before ES6

function updateStatus(name,status){
    return{
        name:name,
        status:status
    };
}

//After ES6

function updateStatus(name,status){
    return{
        name,
       status,
       restart: function(){
        console.log("restarting....");
       }
    };
}

const st = updateStatus('SimpliLearn','In Progress');
console.log(st.name);
st.restart();

