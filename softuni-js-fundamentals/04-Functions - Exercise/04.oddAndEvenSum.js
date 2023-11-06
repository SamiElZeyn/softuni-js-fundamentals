function oddAndEvenSum(num) {

    let numAsString = num.toString();

    let evenOddSums = calcOddEvenSum(numAsString)

    console.log(`Odd sum = ${evenOddSums[1]}, Even sum = ${evenOddSums[0]}`);

    function calcOddEvenSum(str) {
        let evenSum = 0;
        let oddSum = 0;

        for (i = 0; i < numAsString.length; i++) {

            let curNum = Number(numAsString[i]);
            if (curNum % 2 === 0) {
                evenSum += curNum;
            } else {
                oddSum += curNum;
            }
        }
        return [evenSum, oddSum]
    }

}
oddAndEvenSum(1000435)