function groceryStore(arr) {

    let products = arr.shift().split("|");

    let command = arr.shift();

    while (command != 'Shop!') {

        let tokens = command.split("%");
        let action = tokens.shift();

        if (action == 'Important') {

            let product = tokens.shift();

            if (products.includes(product)) {

                let idx = products.indexOf(product);
                product = products.splice(idx, 1).shift();
                products.unshift(product)

            } else {
                products.unshift(product);
            }
        } else if (action == 'Add') {
            let product = tokens.shift();
            if (products.includes(product)) {
                console.log("The product is already in the list.");
            } else {
                products.push(product)
            }
        } else if (action == 'Swap') {
            let firstProduct = tokens.shift();
            let secondProduct = tokens.shift();

            if (products.includes(firstProduct) && products.includes(secondProduct)) {

                let idx1 = products.indexOf(firstProduct);
                let idx2 = products.indexOf(secondProduct);
                let temp = products[idx1];
                products[idx1] = products[idx2];
                products[idx2] = temp;
            } else {
                if (products.includes(firstProduct)) {
                    console.log(`Product ${secondProduct} missing!`);
                } else {
                    console.log(`Product ${firstProduct} missing!`);
                }
            }

        } else if (action == 'Remove') {
            let product = tokens.shift();

            if (products.includes(product)) {
                let idx = products.indexOf(product);
                products.splice(idx, 1);
            } else {
                console.log(`Product ${product} isn't in the list.`);
            }
        } else if (action == 'Reversed') {
            products.reverse();
        }
        command = arr.shift()
    }

    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}. ${products[i]}`);
    }
}
groceryStore(["kiwi|paper|coffee",
    "Add%coffee",
    "Important%bread",
    "Reversed",
    "Shop!"])