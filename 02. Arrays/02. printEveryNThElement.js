function solve(arr, number){
    let res = []
    for(let i = 0; i < arr.length; i += number){
        res.push(arr[i])
    }
    return res;
}

solve([
    '5', 
    '20', 
    '31', 
    '4', 
    '20'
    ], 
    2
)

solve([
    'dsa',
    'asd', 
    'test', 
    'tset'
    ], 
    2       
)