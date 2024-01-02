function addAndRemove (arr) {

    let result = []; 
    let num = 1;

    for (let i = 0; i < arr.length; i++) {

        let command = arr[i];

        if (command === 'add') {

            result.push(num);

        } else {

            result.pop()
        }

        num++;

    }

    if (result.length == 0) {
        console.log("Empty");
    } else {
        console.log(result.join(" "));
    }

}

addAndRemove (['add', 'add', 'remove', 'add', 'add'])