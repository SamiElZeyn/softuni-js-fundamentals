function partyTime (arr) {

    let guestsList = [];
    let index = 0;
    let totalGuests = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "PARTY"){
        index = i;
            break;
        } else {
            guestsList.push(arr[i]);
            totalGuests++;
        }
    }
    

    for (i = index + 1; i < arr.length; i++){   
        if (guestsList.includes(arr[i])){
            let guestIndex = guestsList.indexOf(arr[i])
            guestsList.splice(guestIndex, 1);
            totalGuests--;
        }
    }
    
    console.log(totalGuests);
    console.log(guestsList.sort((a, b) => a -b).join("\n"));
}
partyTime (['7IK9Yo0h',
'9NoBUajQ', 'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])
