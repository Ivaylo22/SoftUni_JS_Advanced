function solve(arr){
    // arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    // return arr.join(`\n`);  

    let sortArr = arr.sort((a,b) => {
        if (a.length !== b.length ){
            return a.length - b.length;
        }
        else {
            return a.localeCompare(b);
        }
    })
    return sortArr.join(`\n`);
}

console.log(solve(	['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']


))