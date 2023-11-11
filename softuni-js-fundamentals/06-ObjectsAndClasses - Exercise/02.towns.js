function towns (arr){

    for (let town of arr){
        let [townName, latidude, longitude] = town.split(" | ");

        latidude = Number(latidude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let townInfo = { town: townName, latitude: latidude, longitude: longitude };

        console.log(townInfo);
    }

}
towns (['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])