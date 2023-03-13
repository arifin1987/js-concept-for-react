// 1. Map

const products = [
    {name:'laptop', price:32000, brand: 'lenovo', color: 'black'},
    {name:'mobile', price:10000, brand: 'Nokia', color: 'red'},
    {name:'tab', price:3200, brand: 'samsung', color: 'green'},
];


const brand = products.map(product => product.brand);

console.log(brand);

const prices = products.map(product => product.price )

console.log(prices);
// 2. forEach

products.forEach(product => console.log(product.color))

// 3. filter

const cheap = products.filter(product=> product.price <= 10000);
console.log(cheap);

const costly = products.filter(product => product.price > 10000)
console.log(costly);

const specificName = products.filter(product=> product.name.includes('t'));

console.log(specificName);

// 4. Find

const special = products.find(product=> product.name.includes('t'));
console.log(special);