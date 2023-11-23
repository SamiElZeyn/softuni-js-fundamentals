function oddOccurrences (str){

    let words = {};

    let infoArr = str.split(" ");
    
    for (let word of infoArr){
        let lowerCaseWord = word.toLowerCase();     
        if (!(lowerCaseWord in words)){
            words[lowerCaseWord] = 0;
        }

        words[lowerCaseWord]++;
    }

    let oddOccurrences = Object.keys(words).filter(word => words[word] % 2 !== 0);

    let result = oddOccurrences.map(word => `${word} ${words[word]}`);

    console.log(result);

}
oddOccurrences ('Cake IS SWEET is Soft CAKE sweet Food')