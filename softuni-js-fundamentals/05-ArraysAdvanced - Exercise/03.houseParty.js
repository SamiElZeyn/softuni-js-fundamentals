function solve (input){

    let names = [];

    for (i = 0; i < input.length; i++){

        let tokens = input[i].split(" ");
        let name = tokens[0];

        if (input[i].includes("not")){
            
            if (names.includes(name)){
                let nameIndex = names.indexOf(name);
                names.splice(nameIndex, 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (names.includes(name)){
                console.log(`${name} is already in the list!`);
            } else {
                names.push(name)
            }
        }
    }
    console.log(names.join("\n"));
}
solve ()