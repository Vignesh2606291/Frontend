//.Global Scope:

var Car1="BMW"
let Car2="Audi"
const Car3="Benz"

let CarName=()=>
{
    console.log(Car1);
    console.log(Car2);
    console.log(Car3);
    
}
CarName()


//.Function Scope:

let ActorMovies=()=>{
    var ajith ="GBU"
    let vijay ="Leo"
    const STR ="Arasan"

    if(true){
    console.log(ajith);
    console.log(vijay);
    console.log(STR);
    
}
}

ActorMovies()


//.Block Scope :


let bike=()=>{
    if(true){
        var Bike1="Honda CBR"
        let Bike2="Yamaha R1"
        const Bike3="Ninja H2r"
        
        console.log(Bike1);
        console.log(Bike2);
        console.log(Bike3);
        
        
        
    }
}

bike()


