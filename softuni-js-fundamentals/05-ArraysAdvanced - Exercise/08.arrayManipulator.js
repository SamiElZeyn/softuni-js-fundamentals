function arrManipulator(arr, commandsArr) {


    for (let el of commandsArr) {
        let tokens = el.split(" ");
        let command = tokens.shift();

        if (command == 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
            break;
        } else if (command == 'add') {
            let idx = Number(tokens.shift());
            let element = Number(tokens.shift());
            arr.splice(idx, 0, element);
        } else if (command == 'addMany') {
            let idx = Number(tokens.shift());
            for (let i = 0; i < tokens.length; i++) {
                let element = Number(tokens[i]);
                arr.splice(idx, 0, element);
                idx++;
            }
        } else if (command == 'contains') {
            let element = Number(tokens.shift());
            if (arr.includes(element)) {
                let idx = arr.indexOf(element);
                console.log(idx);
            } else {
                console.log('-1');
            }
        } else if (command == 'remove') {
            let idx = Number(tokens.shift())
            arr.splice(idx, 1);
        } else if (command == 'shift') {
            let positions = Number(tokens.shift());
            for (let i = 0; i < positions; i++) {
                let element = arr.shift();
                arr.push(element);
            }
        } else if (command == 'sumPairs') {
            let newArr = [];
            for (let i = 0; i < arr.length - 1; i = i + 2) {
                let currEl = arr[i];
                let nextEl = arr[i + 1];
                let sum = currEl + nextEl;
                newArr.push(sum);
            }
            
            if (arr.length % 2 !== 0){
                newArr.push(arr[arr.length - 1]);
            }
            arr = newArr;
        }
    }

}
arrManipulator([1, 2, 4, 5, 6, 7, 8],
    ['sumPairs', 'add 1 8', 'contains 1', 'contains 3', 'print'])