function strSubstring (searchedWord, str) {

    str = str.toLowerCase().split(" ");
    
    for (let word of str) {
        if (word === searchedWord){
            console.log(searchedWord);
            return;
        }
    }
    console.log(`${searchedWord} not found!`);
}
strSubstring ('javascript',
'JavaScript is the best programming language')