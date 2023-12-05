function computerStore(arr) {

    let partPrice = arr.shift();
    let totalNoTax = 0;
    let totaltax = 0;
    let total = 0

    while (partPrice !== 'special' && partPrice !== 'regular') {
        partPrice = Number(partPrice)

        if (partPrice <= 0) {
            console.log("Invalid price!");
            partPrice = arr.shift();
            continue;
        }

        let tax = partPrice * 0.2;
        totalNoTax += partPrice;
        totaltax += tax;
        total += partPrice + tax;
        
        partPrice = arr.shift();
    }

    if (total == 0) {
        console.log("Invalid order!");
        return;
    } else if (partPrice == 'special') {
        total *= 0.9;
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalNoTax.toFixed(2)}$`);
    console.log(`Taxes: ${totaltax.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${total.toFixed(2)}$`);

}
    computerStore([
        'regular'
        ])