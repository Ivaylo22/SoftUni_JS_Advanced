function solve(arr){
    let biggestNum = arr[0];
    let res = [];
    arr.forEach(element => {
        if (element >= biggestNum){
            res.push(element);
            biggestNum = element;
        }
    });
    return res
}

solve(	[20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    
    )