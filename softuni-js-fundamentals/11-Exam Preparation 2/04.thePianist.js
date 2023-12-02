function thePianist (arr){
    let numPieces = Number(arr.shift());
    let pianoPieces = {};

    for (let i = 0; i < numPieces; i++){
        let pieceData = arr.shift();
        let [piece, composer, key] = pieceData.split("|");
        let pieceInfo = {
            composer: composer,
            key: key
        }
        pianoPieces[piece] = pieceInfo;
    }

    command = arr.shift();

    while (command != 'Stop'){
        let tokens = command.split("|");
        let action = tokens.shift();

        if (action == "Add"){
            let [piece, composer, key] = tokens;
            if (piece in pianoPieces){
                console.log(`${piece} is already in the collection!`);
        } else {
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            pianoPieces[piece] = { composer, key }
        }
    } else if (action == "Remove") {
        let piece = tokens.shift();
        if (piece in pianoPieces) {
            console.log(`Successfully removed ${piece}!`);
            delete pianoPieces[piece];
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    } else if (action == 'ChangeKey'){
        let piece = tokens.shift();
        let newKey = tokens.shift();
        if (piece in pianoPieces) {
            pianoPieces[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    } 
    command = arr.shift();
    }

    let entries = Object.entries(pianoPieces);
    
    entries.forEach(([piece, pieceInfo]) => console.log(`${piece} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`));
}
thePianist ([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])