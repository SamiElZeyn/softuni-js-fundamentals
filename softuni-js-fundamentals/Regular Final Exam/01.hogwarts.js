function hogwarts(arr) {
    let spell = arr.shift();
    let command = arr.shift();

    while (command != 'Abracadabra') {

        let tokens = command.split(" ");
        let spellCast = tokens[0];

        if (spellCast === 'Abjuration') {
            spell = spell.toUpperCase();
            console.log(spell);
        } else if (spellCast === 'Necromancy') {
            spell = spell.toLowerCase();
            console.log(spell);
        } else if (spellCast === 'Illusion') {
            let idx = Number(tokens[1]);
            let newChar = tokens[2];
            if (newChar == ""){
                command = arr.shift();
                continue;
            }
            if (idx >= 0 && idx < spell.length) {
                let spellArr = spell.split('');
                spellArr[idx] = newChar;
                spell = spellArr.join('');
                console.log('Done!');
            } else {
                console.log("The spell was too weak.");
            }
        } else if (spellCast === 'Divination') {
            let firstSubstring = tokens[1];
            let secondSubstring = tokens[2];
            if (spell.includes(firstSubstring)) {
                spell = spell.split(firstSubstring).join(secondSubstring);
            } else {
                command = arr.shift();
                continue;
            }
        } else if (spellCast === 'Alteration') {
            let subString = tokens[1];
            if (spell.includes(subString)) {
                spell = spell.replace(subString, "");
                console.log(spell);
            }
        } else {
            console.log("The spell did not work!");
        }
        command = arr.shift();
    }
}
hogwarts(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"])
