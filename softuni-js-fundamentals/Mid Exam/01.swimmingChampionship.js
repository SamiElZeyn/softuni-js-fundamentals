function swimmingChampionship (arr) {

    let daysOfChampionship = Number(arr.shift());
    let neededPoints = Number(arr.shift());
    let swimmers = Number(arr.shift());
    let horelPricePerDay = Number(arr.shift());
    let participationFee = Number(arr.shift());

    let totalHotelFee = swimmers * horelPricePerDay * daysOfChampionship;
    let totalParticipationFee = swimmers * participationFee;
    let neededMoney = totalHotelFee + totalParticipationFee;
    
    let pointsEarned = Number(arr.shift());
    let totalPointsEarned = pointsEarned;


    for (let i = 0; i < arr.length; i++) {

        let bonusPoints = pointsEarned * 0.05;
        pointsEarned = Number(arr[i]);
        totalPointsEarned += pointsEarned + bonusPoints;

    }

    if (totalPointsEarned >= neededPoints) {
        neededMoney *= 0.75;
        console.log(`Money left to pay: ${neededMoney.toFixed(2)} BGN.`);
        console.log("The championship was successful!");
    } else {
        neededMoney *= 0.90;
        console.log(`Money left to pay: ${neededMoney.toFixed(2)} BGN.`);
        console.log("The championship was not successful.");
    }
    

}
swimmingChampionship (["2",
"600",
"3",
"100.8",
"50.5",
"100.68",
"80.1"])