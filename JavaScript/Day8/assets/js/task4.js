

let student = () => {
    let student = [{ Name: "vicky", Mark: 75 },
    { Name: "tamil", Mark: 80 },
    { Name: "akash", Mark: 85 },
    { Name: "barathi", Mark: 90 },
    ]
     
    for(i=0;i<=student.length;i++)
    {
        if(student[i].Mark>=80)
        {
            console.log(student[i]);
            
        }
    }

}

student()