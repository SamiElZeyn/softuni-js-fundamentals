function inventory (arr) {

    let heroes = [];

    for (heroStr of arr){
        let heroInfo = heroStr.split(" / ");
        let heroName = heroInfo[0];
        let heroLevel = Number(heroInfo[1]);
        let heroItems = heroInfo.length > 2 ? heroInfo[2].split(', ') : [];

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroes.push(hero);
    }

    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

    for (let hero of sortedHeroes){
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}
inventory ([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
          ])