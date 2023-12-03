function wildZoo (arr){

    let line = arr.shift();
    let animals = {};
    let areas = {};

    while (line != "EndDay") {
        let info = line.split(" ");
        let command = info.shift();
        let animalData = info.shift()

        let [animalName, neededFood, area] = animalData.split("-");
        neededFood = Number(neededFood);

        if (command == 'Add:') {

            if (animalName in animals) {
                animals[animalName].neededFood += neededFood;
            } else {
                animals[animalName] = { neededFood, area };
                if (area in areas) {
                    areas[area]++;
                } else  {
                    areas [area] = 1;
                }
            }
        } else {

            if (animalName in animals) {

                animals[animalName].neededFood -= neededFood;
                if (animals[animalName].neededFood <= 0) {
                    console.log(`${animalName} was successfully fed`);
                    delete animals[animalName];
                    areas[area]--;
                    if (areas[area] <= 0) {
                        delete areas[area];   
                }
            } 
        }
        line = arr.shift();
    }

    let entries = Object.entries(animals)

    console.log("Animals:");
    entries.forEach(([animal, info]) => console.log(`${animal} -> ${info.neededFood}g`));
    console.log("Areas with hungry animals:");
}
    for (let el of Object.entries(areas)) {
        console.log(`${el[0]}: ${el[1]}`);
    }
}
wildZoo (["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"])