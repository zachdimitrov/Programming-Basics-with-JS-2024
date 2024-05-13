function shopping(input) {
    let budget = +input[0];
    let videocards = +input[1];
    let processors = +input[2];
    let ram = +input[3];

    let moneySpent = videocards * 250;
    let processorCost = moneySpent * 0.35;
    let ramCost = moneySpent * 0.1;

    moneySpent += processorCost * processors;
    moneySpent += ram * ramCost;

    if (videocards > processors) {
        moneySpent -= moneySpent * 0.15;    
    }

    if (moneySpent <= budget) {
        console.log(`You have ${(budget - moneySpent).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(moneySpent - budget).toFixed(2)} leva more!`);
    }
}

shopping(["900",
"2",
"1",
"3"]);

shopping(["920.45",
"3",
"1",
"1"]);
