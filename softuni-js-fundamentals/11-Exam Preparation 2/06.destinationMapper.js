function destinationMapper (str){


    let pattern = /([=|\/])(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g;

    let destinations = [];
    let travelPoints = 0;
    let match = pattern.exec(str);

    while (match) {
        
        let destination = match[2];
        travelPoints += destination.length;
        destinations.push(destination)

        match = pattern.exec(str)
    }
    destinations = destinations.join(", ");
    console.log(`Destinations: ${destinations}`);
    console.log(`Travel Points: ${travelPoints}`);


}
destinationMapper ("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")