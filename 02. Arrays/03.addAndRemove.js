function solve(arr){
    let startNum = 1;
    let res = [];
    for(let cmd of arr){
        cmd === "add" ? res.push(startNum) : res.pop();
        startNum++;
    }
    return res.length > 0 ? res.join('\n') : "Empty";
}

console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']

))