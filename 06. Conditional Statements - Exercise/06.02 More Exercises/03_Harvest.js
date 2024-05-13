function harvest(input) {
    let area = +input[0];
    let grapesPerSM = +input[1];
    let wineNeeded = +input[2];
    let workers = +input[3];

    let wineProduced = 0.4 * (area * grapesPerSM) / 2.5;

    if (wineNeeded <= wineProduced) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineProduced)} liters.`);
        let perWorker = Math.ceil((wineProduced - wineNeeded) / workers);
        console.log(`${Math.ceil(wineProduced - wineNeeded)} liters left -> ${perWorker} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded - wineProduced)} liters wine needed.`);
    }
}

harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);