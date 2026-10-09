const students =["revanth", "indu", "manasa", "dharshan", "likhitha"];
console.log(students);
console.log(students.length);


students.push("revv");
console.log(students);

students.pop();
console.log(students);

//forEach()
//map()
//filter()
//find()

students.forEach((student) =>{
    console.log(student);
})

const score = [90,80,70,30,60];
console.log(score);
const extraScore = score.map((score) => score+5);
console.log(extraScore);

const topScorers = extraScore.filter((score) => score >=55);
console.log(topScorers);

const topper = topScorers.find((score) => score > 60);
console.log(topper);


// key : value
// name : "indu"


const student = {
    name : "indu",
    age : 18,
    gender : "female",
    course : "javaScript",
    mark : 90,
    "passing year"  : 2030,
    "place" : "tirupati" ,
    "blood group" : "O Positive"
};
console.log(student);
console.log(student.name);
console.log(student.mark);
console.log(student["passing year"]) ;
console.log(student["place"]);
console.log(student["blood group"]);

// Array of object

const newStudents = [
    { 
        name : "indu",
        age : 18,
        mark : 80,
    },
    {
        name : "revanth",
        age : 18,
        mark : 85,
    },
    {
        name : "dharshan",
        age : 14,
        mark : 90,
    }
]
console.log(newStudents);
