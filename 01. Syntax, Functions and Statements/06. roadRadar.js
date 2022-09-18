function roadRadar(speed, area){
    let limit = 0;
    switch(area){
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
    }
    
    let difference = Math.abs(limit - speed);
    let status = "";
    let inLimit = false;

    if(speed <= limit){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        inLimit = true;
    }
    else if (difference <= 20){
        status = "speeding";
    }
    else if (difference <= 40){
        status = "excessive speeding";
    }
    else {
        status = "reckless driving";
    }

    if(!inLimit){
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
