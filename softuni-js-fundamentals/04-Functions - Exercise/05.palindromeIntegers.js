function palindrome (arr){

    let isPalidrome = true;

    for (i = 0; i < arr.length; i++){

        let curNum = arr[i];
        let curNumAsStr = curNum.toString();

        for (j = 0; j < curNumAsStr.length / 2; j++){

            let first = Number(curNumAsStr[j]);
            let last = Number(curNumAsStr[curNumAsStr.length - j - 1]);

            if (first !== last){
                isPalidrome = false;
                break;
            }

        }

        if (isPalidrome){
            console.log('true');
        } else {
            console.log('false');
        }

        isPalidrome = true
    }

    

}
palindrome ([123,323,421,121])