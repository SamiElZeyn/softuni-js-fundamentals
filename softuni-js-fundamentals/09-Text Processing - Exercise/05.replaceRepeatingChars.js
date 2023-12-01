function replaceRepeatingChars (str){

    let noRepeatstr = '';
    let prevChar = '';

    for (let curChar of str){
        if (curChar !== prevChar){
            noRepeatstr += curChar;
            prevChar = curChar;
        }
    }
    console.log(noRepeatstr);
}
replaceRepeatingChars ('aaaaabbbbbcdddeeeedssaa')