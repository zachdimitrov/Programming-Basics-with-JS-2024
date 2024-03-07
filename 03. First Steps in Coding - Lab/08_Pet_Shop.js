function petShop(input) {
    let dogCount = Number(input[0]);
    let catCount = Number(input[1]);
    console.log(`${dogCount * 2.5 + catCount * 4} lv.`);
}

petShop(["5", "4"]);
petShop(["13", "9"]);