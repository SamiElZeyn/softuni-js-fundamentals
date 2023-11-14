function solve (name, lastName, hairColour){

    let person = {}
        person.name = name;
        person.lastName = lastName;
        person.hairColor = hairColour;

        console.log(JSON.stringify(person));

}
solve ('George', 'Jones',
'Brown' )