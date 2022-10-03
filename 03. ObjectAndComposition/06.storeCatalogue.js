function solve(data){
    let obj = {};

    for(let el of data){
        let[name, price] = el.split(" : ")
        obj[name] = price;
    }
    let sortedItem = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]));
        let currentLetter = sortedItem[0][0][0];
        console.log(currentLetter);


    sortedItem.forEach(element => {
        if(element[0][0] !== currentLetter){
            currentLetter = element[0][0];
            console.log(currentLetter);
        }
        console.log(`  ${element[0]}: ${element[1]}`);

    });
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)