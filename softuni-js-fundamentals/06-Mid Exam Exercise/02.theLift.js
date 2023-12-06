function theLift(arr) {

    let people = Number(arr[0]);
    let liftState = arr[1].split(" ").map(Number);
    

    for (i = 0; i < liftState.length; i++) {
        while (liftState[i] < 4 && people > 0) {
            liftState[i]++;
            people--;
        }
    }

    let filtered = liftState.filter((wagon) => wagon < 4);

    if (filtered.length > 0) {
        console.log("The lift has empty spots!");
        console.log(`${liftState.join(' ')}`);
    } else {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(`${liftState.join(' ')}`);
    }
}
theLift(["15", "0 0 0 0 0"])