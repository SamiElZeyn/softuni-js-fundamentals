function nonDecreasing (arr) {

    let curNum = arr.shift();
    let maxNum = curNum;
    let result = [];
    result.push(curNum);

    for (let i = 0; i < arr.length; i++) {

        curNum = arr[i];

        if (curNum >= maxNum) {
            maxNum = curNum;
            result.push(curNum)
        }
    }

    console.log(result.join(" "));

}

nonDecreasing ([1, 3, 8, 4, 10, 12, 3, 2, 24])