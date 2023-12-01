function convert (input){

    let converted = JSON.parse(input);

    for (let kvp of Object.entries(converted)){
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }

}
convert ('{"name": "George", "age": 40, "town": "Sofia"}')