function tresureHunt(arr) {

    let loot = arr.shift().split("|");
    let command = arr.shift();


    while (command != 'Yohoho!') {

        let tokens = command.split(" ");
        let action = tokens.shift();

        if (action == 'Loot') {
            tokens.filter(item => !loot.includes(item)).forEach(item => loot.unshift(item));
        } else if (action == 'Drop') {
            let idx = Number(tokens.shift());

            if (idx >= 0 && idx < loot.length) {
                let removed = loot.splice(idx, 1).shift();
                loot.push(removed);
            }
        } else if (action == 'Steal') {
            let count = Number(tokens.shift());
            let stolen = loot.splice(-count);
            console.log(stolen.join(", "));


        }

        command = arr.shift()
    }
    let sum = 0;
    if (loot.length == 0) {
        console.log("Failed treasure hunt.");
    } else {
        for (let el of loot) {
            sum += el.length;
        }

        let average = (sum / loot.length);
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }

}
tresureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])