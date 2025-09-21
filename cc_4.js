let products = [
    {
        name: "Bread",
        category: "Groceries",
        price: 3,
        inventory: 30,
    },
    {
       name: "Hoodie",
       category: "Apparel",
       price: 30,
       inventory: 15,
    },
    {
       name: "Tomato",
       category: "Groceries",
       price: 1.50,
       inventory: 25,
    },
    {
       name: "Lamp",
       category: "Household",
       price: 10,
       inventory: 30,
    },
    {
       name: "TV",
       category: "Electronics",
       price: 150,
       inventory: 10,
    },
];
// Add dynamic discount

for (let product of products) {
    let discount = 0

    switch(product.category) {
        case "Groceries":
        case "Household":
            product.price *= 0.9; // 10% off groceries and household
            break;
        case "Apparel":
            product.price *= 0.85; // 15% off apparel
            break;
        case "Electronics":
            product.price *= 0.80; // 20% off electronics
            break;
        default:
            discount = 0;
    } 
}
console.log(products[0].price);
// Create customerType discount

let customerType = "student";
let extraDiscount = 0;
if (customerType === "student") {
    extraDiscount = 0.05;  // 5% discount for students
}
else if (customerType === "senior") {
    extraDiscount = 0.07;  // 7% discount for seniors
}
else {extraDiscount = 0};

// Simulate checkout process

let customers = [
    {
        number: "001",
        customerType: "student",
        cart: "Bread",
    },
     {
        number: "002",
        customerType: "senior",
        cart: "Lamp",
    },
    {
        number: "003",
        customerType: "regular",
        cart: "Hoodie",
    },
]
for (let i = 1; i <= customers.length; i++) {
let subtotal = 0;

for (let customer of customers) {
    
    switch (customer.cart) {
    case "Bread": 
        subtotal += (products[0].price);
        (products[0].inventory--);
        break;
    case "Hoodie": 
        subtotal += (products[1].price);
        (products[1].inventory--);
        break;
    case "Tomato": 
        subtotal += (products[2].price);
        (products[2].inventory--);
        break;
    case "Lamp":
        subtotal += (products[3].price);
        (products[3].inventory--);
        break;
    case "TV":
        subtotal += (products[4].price);
        (products[4].inventory--);
        break;
    default:
        subtotal = 0
}}

let finalTotal = subtotal * (1 - extraDiscount);
console.log(`Customer ${i}: $${finalTotal.toFixed(2)}`);
console.log()
}