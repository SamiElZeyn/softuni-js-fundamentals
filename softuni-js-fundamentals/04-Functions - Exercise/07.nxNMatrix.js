function matrix (num){

    for (let rowNum = 1; rowNum <= num; rowNum++){
        let curRow = `${num} `.repeat(num)
        console.log(curRow);
    }

}
matrix (3)