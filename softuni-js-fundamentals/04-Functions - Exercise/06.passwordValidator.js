function passValidator (pass){

    let isValidLength = passLength(pass);
    let isOnlyNumsDigits = lettersAndDigitsOnly(pass);
    let isMin2Digits = atLeast2Digits(pass);

    if (isValidLength && isOnlyNumsDigits && isMin2Digits){
        console.log('Password is valid');
    }

    function passLength (input){
        if (input.length >= 6 && input.length <= 10){
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function lettersAndDigitsOnly (input){
        for (i = 0; i < input.length; i++){
            let curChar = input.charCodeAt(i)
            if (curChar < 48 || (curChar > 57 && curChar < 65) || curChar > 122){
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }

    function atLeast2Digits (input){
        let digitCount = 0;

        for (i = 0; i < input.length; i++) {
            let curChar = input.charCodeAt(i)

            if (curChar >= 48 && curChar <= 57 ){
                digitCount++;
            }
        }

        if (digitCount < 2){
            console.log("Password must have at least 2 digits");
            return false;
        }
        return true;
    }

}
passValidator ('MyPass123')