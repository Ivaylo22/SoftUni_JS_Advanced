function solve(input){
    let result = [];
    for (let iterator of input){
        let[name, level, items] = iterator.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        
        result.push({name, level, items})        
    }
    console.log(JSON.stringify(result))
}

solve(['Jake / 1000 / Gauss, HolidayGrenade']);