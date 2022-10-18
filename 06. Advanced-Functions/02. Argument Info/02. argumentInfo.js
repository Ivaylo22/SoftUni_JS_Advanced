function solve(...params){
    let result = {};
    for(let param of params){
        let type = typeof param;
        let isFound = false;

        console.log(`${type}: ${param}`);

        if(!result.hasOwnProperty(type)){
            result[type] = 1;
        }
        else {
            result[type]++;
        }
    }
    let buff = ""
    for (const [key, value] of Object.entries(result)) {
        buff += `${key} = ${value}\n`;
    }
    console.log(buff);
}

solve('cat', 42, function () { console.log('Hello world!'); })