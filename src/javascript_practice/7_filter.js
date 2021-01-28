const instructors = [
    {name: 'Aaron', specialty: 'Entomology', medals: 7},
    {name: 'Carolyn', specialty: 'Fencing', medals: 5},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 8},
    {name: 'Paul', specialty: 'Tuvan throat singing', medals: 4},
    {name: 'Quincy', specialty: 'Quantum Mechanics', medals: 2},
    {name: 'Tom', specialty: 'Chemistry', medals: 3}
]

//PREVIOUSLY WRITTEN
let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    if(instructors[i].medals >= 5){
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names);

//WITH ES6 FILTER METHOD
const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

//Exact same thing with different parameter names
const instructorsNamesTwo = instructors.filter(i => i.medals >= 5);
console.log(instructorNames);