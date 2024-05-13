function flowerShop(input) {
    let magnolia = +input[0];
    let zumbul = +input[1];
    let roses = +input[2];
    let kaktus = +input[3];
    let price = +input[4];

    let earned = magnolia * 3.25 + zumbul * 4 + roses * 3.5 + kaktus * 8;
    earned = earned - earned * 0.05;

    if (earned >= price) {
        console.log(`She is left with ${Math.floor(earned - price)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(price - earned)} leva.`);
    }
}

flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);