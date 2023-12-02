function adAstra (arr){

    let str = arr.shift();

    let pattern = /(#|\|)(?<name>[A-Za-z\s]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;

    let totalKcals = 0;
    let products = [];
    
    let matches = str.matchAll(pattern)
    
    for (let match of matches){
        let { name, expdate, kcal } = match.groups;
        kcal = Number(kcal);
        totalKcals += kcal;
        products.push({ name, expdate, kcal })
    }

    let days = Math.floor(totalKcals /2000);
    console.log(`You have food to last you for: ${days} days!`);

    products.forEach(product => console.log(`Item: ${product.name}, Best before: ${product.expdate}, Nutrition: ${product.kcal}`))
}   
adAstra ([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])