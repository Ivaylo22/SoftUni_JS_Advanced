function solve(data){
    let res = {};
    res.model = data.model;

    let engineEnum ={
        "smallEngine": { power: 90, volume: 1800 },
        "normalEngine": { power: 120, volume: 2400 },
        "monsterEngine": { power: 200, volume: 3500 }
    }


    if(data.power <= 90){
        res.engine = engineEnum["smallEngine"];
    }
    else if(data.power <= 120){
        res.engine = engineEnum["normalEngine"];
    }
    else{
        res.engine = engineEnum["monsterEngine"];
    }

    res.carriage = {type: data.carriage, color: data.color};

    let wheelRes;

    if(data.wheelsize % 2 == 0){
        wheelRes = data.wheelsize - 1;
    }
    else {
        wheelRes = data.wheelsize;
    }
    res.wheels = [wheelRes, wheelRes, wheelRes, wheelRes]   
    return res;
}

solve({ 
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
)