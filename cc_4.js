let product = [
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
]
// Add dynamic discount

for (let product of products) {
    let discount = 0

    switch(category) {
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

// Create customerType discount

let customerType = "student";
let extraDiscount = 0;
if (customerType === "student") {
    extraDiscount = 0.05;
}
else if (customerType === "senior") {
    extraDiscount = 0.07;
}
else {extraDiscount = 0};

// Simulate checkout process

let subtotal = 0;
for (let i = 1; i <= 3; i++) {
    subtotal += product.price;
    (product.invetory--)
let finalTotal = subtotal * (1 - extraDiscount);
console.log(`Customer ${i}: $${finalTotal.toFixed(2)}`);
}
