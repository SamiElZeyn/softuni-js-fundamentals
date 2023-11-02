function solve (nums, bombInfo){

    let [bombNumber, bombpower] = bombInfo;

    while (nums.includes(bombNumber)){

        let index = nums.indexOf(bombNumber);
        nums.splice(Math.max(0, index - bombpower), bombpower * 2 + 1);
    }

    let sum = 0;

    for (let el of nums){
        sum += el;
    }

    console.log(sum);

}
solve ([1, 7, 7, 1, 2, 3],
    [7, 1]
    )