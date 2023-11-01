function solve (input){
   
    let arr = input
            .shift()
            .split(" ")
            .map(Number);
     
    for (i = 0; i < input.length; i++){
        let comands = input[i].split(" ");
        let comand = comands[0];
        let firstNum = Number(comands[1]);
        let secondNum = Number(comands[2]);


        switch (comand){
            case "Add": arr.push(firstNum); break;
            case "Remove": arr = arr.filter(x => x !== firstNum); break;
            case "RemoveAt": arr.splice(firstNum, 1); break;
            case "Insert": arr.splice(secondNum, 0, firstNum); break;
        }
    }
    console.log(arr.join(" "));

}
solve (['4 19 2 53 6 43', 
'Add 3', 
'Remove 2', 
'RemoveAt 1', 
'Insert 8 3'])