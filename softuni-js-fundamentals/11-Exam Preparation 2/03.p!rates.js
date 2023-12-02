function pirates (arr){

    let command = arr.shift();
    let targets = {};

    while (command != 'Sail'){
        let [city, population, gold] = command.split("||");
        population = Number(population);
        gold = Number(gold);

        if (city in targets){
            targets[city].population += population;
            targets[city].gold += gold;
        } else {
            targets[city] = { population, gold }
        }
        command = arr.shift();
    }

    command = arr.shift();

    while (command != 'End'){
        let tokens = command.split("=>");
        let action = tokens[0];
        let city = tokens[1];

        switch (action){
            case 'Plunder':
                let people = Number(tokens[2]);
                let gold = Number(tokens[3]);
                targets[city].population -= people;
                targets[city].gold -= gold;
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                if (targets[city].population <= 0 || targets[city].gold <= 0){
                    console.log(`${city} has been wiped off the map!`);
                    delete targets[city];
                }
                break;
            case 'Prosper':
                let money = Number(tokens[2]);
                if (money < 0){
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    targets[city].gold += money;
                    console.log(`${money} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`);
                }
                break;
        }
        command = arr.shift()
    }

    let entries = Object.entries(targets);

    if (entries.length == 0){
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        entries.forEach(([city, stats]) => console.log(`${city} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`))
    }
}
//pirates ((["Tortuga||345000||1250",
//"Santo Domingo||240000||630",
//"Havana||410000||1100",
//"Sail",
//"Plunder=>Tortuga=>75000=>380",
//"Prosper=>Santo Domingo=>180",
//"End"]))

pirates ((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]))