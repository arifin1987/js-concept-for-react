// JSON => stringify, parse

const student ={
    name: 'Shahrukh ',
    age: 44,
    movies: ['pathan', 'kal ho na ho']
}

const studentJSON = JSON.stringify(student);

console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);

console.log(studentObj);

// 2. fetch
fetch('url')
.then(res=> res.json())
.then(data=> console.log(data));

// 3. keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbers =[12,34,56,5]
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// for in on object

// Add or remove from an array

const products = [
    {name:'laptop', price:32000, brand: 'lenovo', color: 'black'},
    {name:'phone', price:10000, brand: 'Nokia', color: 'red'},
    {name:'tab', price:3200, brand: 'samsung', color: 'green'},
];

const newProduct = {name: 'webcam', price:700, brand:'htc'};

// copy array and then add newProduct

const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !=='phone');
