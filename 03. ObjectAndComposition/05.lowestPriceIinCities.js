function solve(input){
    let result = [];
    for(let iterator of input){
        let isFound = false;

        let[town, product, price] = iterator.split(' | ')
        price = Number(price);
        
        for(let iter of result){
            if(iter.product === product){
                isFound = true;
                if(iter.price > price){
                    iter.town = town;
                    iter.price = price;
                }
            }
        }

        if(!isFound){
            result.push({town, product, price})
        }
    }
    result.forEach(element => {
        console.log(`${element.product} -> ${element.price} (${element.town})`)
    });
    
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)