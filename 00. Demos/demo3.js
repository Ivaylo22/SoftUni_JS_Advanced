function solve(input){
    let inputType = typeof(input);
    let result = undefined;

    if(inputType != "number"){
        result = `We can not calculate the circle area, because we receive a ${inputType}.`;
    } else{
       result = (input * input * Math.PI).toFixed(2);
        
    }

    console.log(result);
}

solve(5);
solve('name');