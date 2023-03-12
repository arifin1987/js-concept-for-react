//(1) How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';


//(2)  6 basic conditions: >,<, ===, !==, <=,>=
//  multiple conditions: &&, ||

if(fatherName ==='arnold' || season === 'rainy'){

}

else if(fatherName === 'Arnold'){

}
else{

}

// (3) array declare
// index
// length, push

const numbers =[23, 45, 46, 78 , 3, 12]

console.log(numbers.length)
numbers[0] = 200;

console.log(numbers)

// (4) for loop
for(let i=0;i<numbers.length; i++){
    let number = numbers[i];
    console.log(number);
}

//(5) function

function multiplication(num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiplication(23,45)
console.log(output);

//(6) Object
// 3 ways to access property by name

const student = {
    name: "Sakib Khan",
    age: 34,
    movies:['king', 'mastan']

}

console.log(student.name);

console.log(student['name']);

let myAge = 'age'
console.log(student[myAge]);
