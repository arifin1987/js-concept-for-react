// check truthy
let myVar = 5;

if(myVar){
    myVar = myVar *100;
}
else{
    myVar =0;
}

const money = 80;
let food;
if(money >100){
    food = 'biryani'
}
else{
    food = 'cha biscuit'
}

// ternary
let food1 = money >100 ? 'biryani' : 'cha biscuit';

let drink = (money >100 && myVar > 100)? 'coke' : 'filter water'

// number to string conversion
const num1 = 52;
console.log( num1);
const numStr = num1 + '';
console.log(typeof numStr);

// string to number
const input = '560';
const inputNum = +input
console.log(inputNum);

const isActive = true;
const showUser =() => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();
//the left side is false then right side will be  executed
