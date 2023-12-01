function city (city){
    let keys =  Object.keys(city);

    for (let key of keys){
        console.log(key, '->', city[key]);
    }
}
city ({ name: "Sofia",
        area: 492, 
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"})