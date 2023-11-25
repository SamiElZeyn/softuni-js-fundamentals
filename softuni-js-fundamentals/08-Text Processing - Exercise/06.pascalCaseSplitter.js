function solve(input) {

    input = input.split('');

    let words = []
    let counter = -1;      

    input.map(x => {

        if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) {
            counter++
            words[counter] = x;
        } else if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
            words[counter] += x
        }
    })

    console.log(words.join(", "))
}
solve ('SplitMeIfYouCanHaHaYouCantOrYouCan')