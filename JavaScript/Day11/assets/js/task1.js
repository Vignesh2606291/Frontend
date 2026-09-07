const processNumber = (number,callback)=>{
    let num = number + 20

    callback(num);
}

const display=(num) =>{

    console.log(num);
    
}
processNumber(20,display)