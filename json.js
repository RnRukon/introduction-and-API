//JavaScrip Object Notation=JSON;

const user = { id: 11, name: 'Rukon', job: 'developer' };

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified)

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 1500,
    products: ['laptop', 'Mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    idExpensive: false


};
const shopStringified = JSON.stringify(shop);//কোনো একটা  জাবাস্কিপ এর object কে sting আকারে করার জন্য JSON.Stringify() করতে হয়;
const convert = JSON.parse(shopStringified);//আবার sting টা কে object আকারে কনভার্ড করার জন্য JSON.parse() দিয়ে করতে হয়;
// console.log(shop);
console.log(shopStringified);
console.log(convert.products);