function censoredWords (text, str){

    let censor = '*'.repeat(str.length);
    let result = text;

    while (result.includes(str)){
        result = result.replace(str, censor)
    }
    console.log(result);
}
censoredWords ('A small sentence with some words', 'small')