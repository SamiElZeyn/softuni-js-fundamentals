function gladiatorInventory (arr) {

    let inventory = arr.shift().split(" ");

    for (let i = 0; i < arr.length; i++) {

        let tokens = arr[i].split(" ");
        let command = tokens.shift();
        
        if (command == "Buy") {
            let equipment = tokens.shift();

            if (!inventory.includes(equipment)) {
                inventory.push(equipment)
            }
        } else if (command == "Trash") {
            let equipment = tokens.shift();
            if (inventory.includes(equipment)) {
                let idx = inventory.indexOf(equipment);
                inventory.splice(idx, 1);
            }
        } else if (command == 'Repair') {
            let equipment = tokens.shift();
            if (inventory.includes(equipment)) {
                let idx = inventory.indexOf(equipment);
                inventory.splice(idx, 1);
                inventory.push(equipment);
            }
        } else if (command == 'Upgrade') {
            let splited = tokens.shift().split("-");
            let upgraded = splited.join(":");
            let equipment = splited[0];

            if (inventory.includes(equipment)) {
                let idx = inventory.indexOf(equipment);
                inventory.splice(idx + 1, 0, upgraded)
            }
        }
    }
    console.log(inventory.join(" "));
}
gladiatorInventory (['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])