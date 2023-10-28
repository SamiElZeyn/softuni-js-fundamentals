function solve (arr){   

    let seq = 1;
    let maxSeq = 0;
    let maxSeqNum = 0;

    for (let i = 0; i < arr.length; i++){
        
        if (i !== 0){
            let curNum = arr[i];
            let prevNum = arr[i-1];
            if (curNum === prevNum){
                seq++;

                if (seq > maxSeq){
                    maxSeq = seq;
                    maxSeqNum = curNum;
                }
            } else {
                seq = 1;
            }
        }
    }

    console.log(`${(maxSeqNum + ' ').repeat(maxSeq)}`);
}
solve ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])