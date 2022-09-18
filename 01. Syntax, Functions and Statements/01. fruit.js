function fruit(type, weight, price){
    let weightInKg = weight/1000;
    let sum = weightInKg * price;
    console.log(`I need $${sum.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`)
}

fruit('orange', 2500, 1.80);
console.log("- - - - - - - - - - - - - - - - - - - - -")
fruit('apple', 1563, 2.35);