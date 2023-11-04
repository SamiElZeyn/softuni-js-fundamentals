function solve (product, quantity){
    let total;

    switch (product){
        case 'coffee': total = quantity * 1.5; break;
        case 'coke': total = quantity * 1.4; break;
        case 'water': total = quantity * 1; break;
        case 'snacks': total = quantity * 2; break;
    }

    console.log(total.toFixed(2));

}
solve ("water", 5)