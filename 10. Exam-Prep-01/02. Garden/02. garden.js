class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired){
        if (Number(spaceRequired) > Number(this.spaceAvailable)){
            throw new Error("Not enough space in the garden.");
        }
        let plantToAdd = {
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        }
        this.plants.push(plantToAdd);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity){
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);

        if(!currentPlant){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        else if(currentPlant.ripe){
            throw new Error(`The ${currentPlant.plantName} is already ripe.`)
        }
        else if(quantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        else {
            currentPlant.ripe = true;
            currentPlant.quantity = quantity;
        }

        if(quantity === 1){
            return `${quantity} ${plantName} has successfully ripened.`
        }
        else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName){
        let currentPlant = this.plants.find(plant => plant.plantName === plantName);

        if(!currentPlant){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        else if(!currentPlant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        else {
            let plantName = currentPlant.plantName;
            let quantity = currentPlant.quantity;

            this.plants = this.plants.filter(plant => plant.plantName !== plantName);
            this.storage.push({plantName, quantity});
            this.spaceAvailable += currentPlant.spaceRequired;

            return `The ${plantName} has been successfully harvested.`
        }
    }

    generateReport(){
        let buf = '';
        this.plants.sort((a,b) => {
            return a.plantName.localeCompare(b.plantName);
        });
        let allPlants = this.plants.map(obj => obj.plantName).join(", ");

        buf += `The garden has ${this.spaceAvailable} free space left.\n`;
        buf += `Plants in the garden: ${allPlants}\n`;

        if(this.storage.length === 0 ){
            buf += "Plants in storage: The storage is empty.";
        }
        else {
            let allStoragePairs = [];

            for(let i = 0; i < this.storage.length; i ++){
                allStoragePairs.push(`${this.storage[i].plantName} (${this.storage[i].quantity})`)
            }

            let allStorate = allStoragePairs.join(", ")
            buf += `Plants in storage: ${allStorate}`
        }
        return buf.trim();
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());




