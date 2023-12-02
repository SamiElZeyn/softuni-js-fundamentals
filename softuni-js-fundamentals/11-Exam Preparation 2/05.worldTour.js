function worldTour (arr){

    let stops = arr.shift();
    let command = arr.shift();

    while (command != 'Travel'){
        let tokens = command.split(":");
        let action = tokens.shift();

        if (action == 'Add Stop'){
            let idx = Number(tokens.shift());
            let addStop = tokens.shift();
            if (idx > 0 && idx < stops.length) {
                let firstHalf = stops.slice(0, idx);
                let secondHalf = stops.slice(idx);
                stops = firstHalf + addStop + secondHalf;
            }
        } else if (action == 'Remove Stop') {
            let startIdx = Number(tokens.shift());
            let endIdx = Number(tokens.shift());
            if ((startIdx > 0 && startIdx < stops.length) && (endIdx > 0 && endIdx < stops.length)) {
                let left = stops.slice(0, startIdx);
                let right = stops.slice(endIdx + 1);
                stops = left + right;
            }   
        } else if (action == 'Switch') {
            let oldStop = tokens.shift();
            let newStop = tokens.shift();
            let oldStopIdx = oldStop.indexOf(stops);
            let newStopIdx = newStop.indexOf(stops);
        }

        command = arr.shift();
    }
}
worldTour ((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]))