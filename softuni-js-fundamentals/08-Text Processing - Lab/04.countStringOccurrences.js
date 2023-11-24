function solve (text, word){

    let words = text.split(" ");
    let occurrences = 0;

    while (words.includes(word)){
        let index = words.indexOf(word);
        words.splice(index, 1);
        occurrences++;
    }
    console.log(occurrences);

}
solve ('This is a word and it also is a sentence',
'is')