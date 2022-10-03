function solve(arr, number){
    for (let i = 0; i < number; i ++){
        let elemToRemove = arr[arr.length - 1];
        arr.pop();
        arr.unshift(elemToRemove);
    }
    return arr.join(" ");
}

console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
))
