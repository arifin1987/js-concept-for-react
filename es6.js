const numbers = [89, 44, 34, 33];

const student ={
    name: 'Sakib Khan',
    age:34,
    movies:['king khan', 'Dhakar mastan']
};

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has 

number ${numbers[1]} also liked movies '${student.movies[0]}'} `;

// 2. arrow function

const getFiftyFive = ()=> 55;

const addSixtyFive = num => num + 65;

const isEven = x => x % 2 ==0;

const addThree = (x,y,z ) => x+y+z;

const doMath = (num1 , num2) => {
    const sum = num1 + num2;
    return sum;

}

// 3. Spread operator
const newNumber = [...numbers];
console.log(newNumber);

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55]
console.log(currentNumbers);