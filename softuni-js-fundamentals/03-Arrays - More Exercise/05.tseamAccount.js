function tseamAcc (arr) {

    let gameList = arr.shift().split(" ");
    let command = arr.shift();

    while (command !== "Play!") {

        let tokens = command.split(" ");
        command = tokens[0];
        let game = tokens[1];

        if (command == 'Install') {
            if (!gameList.includes(game)) {
                gameList.push(game)
            }
        } else if (command == 'Uninstall') {
            if (gameList.includes(game)) {
                let idx = gameList.indexOf(game);
                gameList.splice(idx, 1);
            }
        } else if (command == 'Update') {
            if (gameList.includes(game)) {
                let idx = gameList.indexOf(game);
                let updatedGame = gameList.splice(idx, 1);
                gameList.push(updatedGame);
            }
        } else if (command == 'Expansion') {
            let splited = game.split("-");
            let expanded = splited.join(":");
            game = splited[0];

            if (gameList.includes(game)) {
                let idx = gameList.indexOf(game);
                gameList.splice(idx + 1, 0, expanded)
            }
        }
        command = arr.shift()
    }

    console.log(gameList.join(" "));

}
tseamAcc (['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])