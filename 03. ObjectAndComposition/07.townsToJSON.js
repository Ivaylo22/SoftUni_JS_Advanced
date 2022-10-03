function solve(input){
    let result = [];

    for(let i = 1; i< input.length; i++){
        let[drop, town, latitude, longitude] = input[i].split("|");
        town = town.trim();
        latitude = Number(latitude.trim()).toFixed(2);
        longitude = Number(longitude.trim()).toFixed(2);

        result.push({"Town": town, "Latitude": Number(latitude), "Longitude": Number(longitude)});
    }

    let jsonRes = JSON.stringify(result)

    console.log(jsonRes);
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)