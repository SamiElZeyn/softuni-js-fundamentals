function easterEggs ([str]) {

    let pattern = /(?:@+|#+)(?<color>[a-z]{3,})(?:@+|#+)[^A-z\d]*\/+(?<amount>\d+)\/+/g;

    let match = pattern.exec(str);

    while (match !== null) {
        let {color, amount} = match.groups;
        console.log(`You found ${Number(amount)} ${color} eggs!`);
        match = pattern.exec(str);
    }
}
easterEggs (['#@##@red@#/8/@rEd@/2/#@purple@////10/'])