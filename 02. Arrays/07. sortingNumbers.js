function solve(arr){
    let res = [];
    arr.sort((a,b) => a - b);
    for(let i = 0; i < arr.length / 2; i ++){
        res.push(arr[i]);
        res.push(arr[arr.length - i - 1]);
    }
    if (arr.length % 2 != 0){
        res.pop();
    }
    return res;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 20]))

//1 2 3 4 5 6 7 8 9