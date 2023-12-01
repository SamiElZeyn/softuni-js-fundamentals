function solve (str){

    str = str.split(" ");

    for (let word of str){
        if (word.startsWith("#") && word.length > 1){
            word = word.substring(1)
            let isValid = true;
            for (let char of word){
                if (!/[A-Za-z]/.test(char)){
                    isValid = false;
                    break;
                }
            }

            if (isValid){
                console.log(word);
            }
        }
    }
}
solve ('The symbol # is known #variously in English-speaking #regions as the #number sign')