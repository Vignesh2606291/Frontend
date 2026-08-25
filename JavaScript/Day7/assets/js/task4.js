

let student = [{ name: "Tamil", mark: 90 },
{ name: "Barathi", mark: 95 },
{name: "Akash", mark: 100}
];

let FindName ="Barathi"

for(let i=0; i<student.length; i++)
{
    if(student[i].name===FindName){
        console.log(student[i].name);
        console.log(student[i].mark);
        
    }
    
}



