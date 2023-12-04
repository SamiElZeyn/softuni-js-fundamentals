function hogwarts(arr) {
    let spell = arr.shift();
    let cast = arr.shift();
    while (cast !== 'Abracadabra') {
        let tokens = cast.split(" ");
        let spellCast = tokens.shift()
        
        if (spellCast == "Abjuration") {
            spell = spell.toUpperCase();
            console.log(spell);
        } else if (spellCast == "Necromancy") {
            spell = spell.toLowerCase();
            console.log(spell);
        } else if (spellCast == "Illusion") {
            let idx = Number(tokens.shift());
            let letter = tokens.shift();
            if (idx >= 0 && idx < spell.length) {
                let charToBeRemoved = spell[idx];
                spell = spell.replace(charToBeRemoved, letter);
                console.log("Done!");
            } else {
                console.log("The spell was too weak.");
            }
        } else if (spellCast == "Divination") {
            let firstSubstring = tokens.shift();
            let secondSubstring = tokens.shift();
            if (spell.includes(firstSubstring)) {
                let strToBeRemoved = firstSubstring;
                let newStr = secondSubstring;
                let parts = spell.split(strToBeRemoved);
                spell = parts.join(newStr);
                console.log(spell);
            } else {
                cast = arr.shift();
                continue;
            }
        } else if (spellCast == "Alteration") {
            let subString = tokens.shift();
            spell = spell.replace(subString, "");
            console.log(spell);
        } else {
            console.log("The spell did not work!");
        }
        cast = arr.shift();
    }
}
hogwarts(["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"])
