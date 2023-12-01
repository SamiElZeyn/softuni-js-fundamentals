function storage (input){
    let map = new Map();

    for (let str of input){
        let tokens = str.split(" ");
        let product = tokens[0];
        let qty = Number(tokens[1]);

        if (!map.has(product)){
            map.set(product, + qty);
        } else {
            let currentQty = map.get(product);
            let newQty = currentQty += qty;
            map.set(product, newQty);
        }
    }

    for (let kvp of map){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
storage (['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])