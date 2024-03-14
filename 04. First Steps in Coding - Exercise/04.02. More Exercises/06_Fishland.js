function fishMarket(input) {
    let skumria = Number(input[0]);
    let caca = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamud = skumria + skumria * 0.6;
    let safrid = caca + caca * 0.8;

    console.log((palamud * palamudKg + safrid * safridKg + midiKg * 7.5).toFixed(2));
}

fishMarket(["6.9", "4.2", "1.5", "2.5", "1"]);
fishMarket(["5.55", "3.57", "4.3", "3.6", "7"]);