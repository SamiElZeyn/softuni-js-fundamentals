function meetings (input){

    let meetings = {};

    for (let el of input){
        let [day, name] = el.split(" ");

        if (!meetings.hasOwnProperty(day)){
            console.log(`Scheduled for ${day}`);
            meetings[day] = name;
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let [day, name] of Object.entries(meetings)){
        console.log(`${day} -> ${name}`);
    }

}
meetings (['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])