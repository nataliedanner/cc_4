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

