const createCounter = ()=>{

    let a = 0;

    const inner = ()=>{

        a++

        console.log(a);
        
    }
    return inner
    
}

const counter = createCounter()

counter()
counter()
counter()