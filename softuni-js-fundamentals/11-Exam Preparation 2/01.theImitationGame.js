function limitaionGame (arr){

    let encryptedMsg = arr.shift();
    let command = arr.shift();

    while (command != 'Decode') {

        let tokens = command.split('|');
        let action = tokens[0];
        
        switch (action){
            case 'Move':
                let lettersCount = Number(tokens[1]);
                let firstLetters = encryptedMsg.slice(0, lettersCount);
                encryptedMsg = encryptedMsg.replace(firstLetters, '');
                encryptedMsg += firstLetters;
                break;
            case 'Insert':
                let index = Number(tokens[1]);
                let letter = tokens[2];
                encryptedMsg = encryptedMsg.slice(0, index) + letter + encryptedMsg.slice(index)
                break;
            case 'ChangeAll':
                let removedLetter = tokens[1];
                let newLetter = tokens[2];
                let parts = encryptedMsg.split(removedLetter);
                encryptedMsg = parts.join(newLetter);
                break;
        }
        
        command = arr.shift();
    }
    console.log(`The decrypted message is: ${encryptedMsg}`);
    

}
limitaionGame ([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',])