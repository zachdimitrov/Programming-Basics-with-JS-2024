function godzillaKong(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let costume = Number(input[2]);

    let moneySpent = budget * 0.1;
    if (statists > 150) {
        moneySpent += statists * ( costume - costume * 0.1 );
    } else {
        moneySpent += statists * costume;
    }

    if (budget < moneySpent) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(moneySpent - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - moneySpent).toFixed(2)} leva left.`);
    }
}


godzillaKong(["20000",
"120",
"55.5"]);

godzillaKong(["15437.62",
"186",
"57.99"]);

godzillaKong(["9587.88",
"222",
"55.68"]);

