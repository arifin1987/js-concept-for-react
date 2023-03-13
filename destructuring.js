// Array destructuring

const numbers = [33, 55, 34, 56];

// const x = numbers[0];
// const y = numbers[1];

// const[x,y] =[42, 44]

const [x,y] = numbers;

console.log(x,y);

function boxify(num1, num2){
    const nums = [num1, num2];
    return nums
}

const [first, second] = boxify(90, 34);

console.log(boxify(90,22));

const student = {
    name: 'Sakib Khan',
    age: 33,
    movies: ['king khan', 'mastan']
}

const [firstMovie, secondMovie] = student.movies;


// Object destructuring

const {name, age} = {id: 12, name: "karim", age:22};

const employee ={
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification:{
        height:66,
        weight: 80,
        address: 'Dhaka',
        watch: {
            color:'black',
            prices: 500,
            brand: 'rolex'
        }
    }
}
const { machine, ide} = employee;
const {weight, address} = employee.specification;

const {brand} = employee.specification.watch;
