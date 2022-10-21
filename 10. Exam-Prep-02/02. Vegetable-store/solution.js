class VegetableStore{
    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables){
        let currentVegetables = [];
        for (let vegetable of vegetables){
            let args = vegetable.split(" ");
            let type = args[0];
            let quantity = Number(args[1]);
            let price = args[2];
            let isFound = false;

            let vegetableObj = {type, quantity, price};

            for(let [k,v] of this.availableProducts.entries()){
                if(v.type === type){
                    v.quantity += Number(quantity);
                    if(v.price < price){
                        v.price = price;
                    }
                    isFound = true;
                    break;
                }
            }

            if(!isFound){
                this.availableProducts.push(vegetableObj);
                if(!currentVegetables.includes(vegetableObj.type)){
                    currentVegetables.push(vegetableObj.type);
                }
            }
        }
        return `Successfully added ${currentVegetables.join(", ")}`;
    }

    buyingVegetables (selectedProducts){
        let totalPrice = 0.00;
        for(let product of selectedProducts){
            let args = product.split(" ");
            let type = args[0];
            let quantity = args[1];

            let currentProduct = this.availableProducts.find(product => product.type === type);

            if(!currentProduct){
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            if(quantity > currentProduct.quantity){
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            let sum = Number(quantity) * currentProduct.price;
            totalPrice += sum;
            currentProduct.quantity -= Number(quantity);
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable (type, quantity){
        let currentProduct = this.availableProducts.find(product => product.type === type);

        if(!currentProduct){
            throw new Error(`${type} is not available in the store.`)
        }

        if(quantity > currentProduct.quantity){
            currentProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }

        currentProduct.quantity -= Number(quantity);
        return `Some quantity of the ${type} has been removed.`
    }

    revision (){
        let buff = "Available vegetables:\n";
        
        let sortedArray = this.availableProducts.sort((a,b) => {return a.price - b.price});

        for(let product of sortedArray){
            buff += `${product.type}-${product.quantity}-${product.price}\n`
        }

        buff += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return buff;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



