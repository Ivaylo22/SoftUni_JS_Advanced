function solution(){
    let micros = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let food = {
        apple:{
            carbohydrate: 1,
            flavour: 2
        },

        lemonade :{
            carbohydrate: 10,
            flavour: 20
        },

        burger :{
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },

        eggs :{
            protein: 5,
            fat: 1,
            flavour: 1
        },

        turkey :{
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function(string){
        let tokens = string.split(' ');
        let action = tokens[0];
        
        if(action === 'restock'){
            let micro = tokens[1];
            let quantity = tokens[2];
            micros[micro] += Number(quantity);
            return 'Success';
        }
        
        else if(action === 'prepare'){
            let recipe = tokens[1];
            let quantity = tokens[2];
            let microsToRemove = {};

            for(let [k,v] of Object.entries(food[recipe])){
                if(micros[k] < v*quantity){
                    return `Error: not enough ${k} in stock`;
                }
                let productToRemove = k;
                microsToRemove[productToRemove] = v*quantity;
            }
            for(let [k,v] of Object.entries(microsToRemove)){
                micros[k] -= v;
            }           

            return `Success`;
        }

        else if(action === 'report'){
            let buf = "";

            for(let [k, v] of Object.entries(micros)){
                buf += `${k}=${v} `
            }

            return buf.trimEnd();
        }
    }

}



let manager = solution (); 
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock protein 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("prepare turkey 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("report"));
