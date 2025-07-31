function dataBase () {         

console.log('Management of data base with objects,sets and maps!');

// here I created a object with the products
const products = {                       
    1: { id: 1, name: 'Smart TV', price: 2300},
    2: { id: 2, name: 'Headphones', price: 500},
    3: {id: 3, name: 'Gaming PC', price: 3900}
}
 // this const creates a set to avoid repeated products and a map with the products
const productsSet = new Set(Object.values(products).map(products=>products.name));
console.log("Set of unique products", productsSet);

const productsMap = new Map([
    ['TV', 'Smart TV'],
    ['Accesories', 'Headphones'],
    ['Gaming', 'Gaming PC']
])

for (const id in products){
    console.log(`Product ID: ${id}, details: `,products[id]);
}

for (const name of productsSet){
    console.log(`Unique product: `, name);
}

productsMap.forEach((product, category)=>{
    console.log(`category:${category}, product: ${product} `);
});
}

dataBase ();