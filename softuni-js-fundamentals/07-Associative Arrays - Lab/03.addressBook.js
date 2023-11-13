function adressBook (input){

    let adressBook = {};

    for (let element of input){
        let [name, adress] = element.split(":");
        adressBook[name] = adress;
    }

    let sortedData = Object.fromEntries(Object.entries(adressBook).sort());
    
    for (let [name, adress] of Object.entries(sortedData)){
        console.log(`${name} -> ${adress}`);
    }

}
adressBook (['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)