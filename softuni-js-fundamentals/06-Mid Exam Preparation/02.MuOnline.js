function muOnline (arr) {
    
    let rooms = arr.split("|");
    let health = 100;
    let coins = 0;
    
    for (let i = 0; i < rooms.length; i++) {

        let room = rooms[i];
        let tokens = room.split(" ");
        let command = tokens[0];
        let amount = Number(tokens[1]);

        if (command == 'potion') {
            let hpToRestore = amount;
            let newHp = hpToRestore + health > 100 ? 100 - health : hpToRestore;
            health += newHp;
            console.log(`You healed for ${newHp} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            coins += amount;
            console.log(`You found ${amount} bitcoins.`);
        } else {
            health -= amount;
            let monster = command;
            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);
}
muOnline ("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")