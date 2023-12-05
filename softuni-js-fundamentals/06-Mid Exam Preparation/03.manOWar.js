function manOWar(arr) {

    let pirateShip = arr.shift().split(">").map((x) => Number(x));
    let warShip = arr.shift().split(">").map((x) => Number(x));
    let maxHealth = Number(arr.shift());
    let critical = maxHealth * 0.2;

    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split(" ");
        let command = tokens[0];

        if (command == 'Retire') {
            break;
        } else if (command == 'Fire') {
            let idx = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if (idx >= 0 && idx < warShip.length) {
                warShip[idx] -= damage;
                if (warShip[idx] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            } else {
                continue;
            }

        } else if (command == 'Defend') {
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);
            let damage = Number(tokens[3]);

            if (startIdx >= 0 && startIdx < pirateShip.length && endIdx >= 0 && endIdx < pirateShip.length && startIdx <= endIdx) {
                for (let j = startIdx; j <= endIdx; j++) {
                    pirateShip[j] -= damage;
                    if (pirateShip[j] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            } else {
                continue;
            }
        } else if (command == 'Repair') {
            let idx = Number(tokens[1]);
            let healthToRestore = Number(tokens[2]);

            if (idx >= 0 && idx < pirateShip.length) {
                let newHp = pirateShip[idx] + healthToRestore > maxHealth ? maxHealth - pirateShip[idx] : healthToRestore;
                pirateShip[idx] += newHp;
            } else {
                continue;
            }
        } else if (command == 'Status') {
            let damaged = pirateShip.filter(section => section < critical);
            console.log(`${damaged.length} sections need repair.`);
        }

    }

    let warShipSum = warShip.reduce((acc, cur) => acc + cur);
    let pirateShipSum = pirateShip.reduce((acc, cur) => acc + cur);

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);

}
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
