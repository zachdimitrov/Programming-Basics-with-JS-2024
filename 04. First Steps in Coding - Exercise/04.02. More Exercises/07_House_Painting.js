function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let red = 2 * (h * x / 2 + x * y);
    let green = 2 * (x * x + x * y - 1.5 * 1.5) - 1.2 * 2;

    console.log((green / 3.4).toFixed(2));
    console.log((red / 4.3).toFixed(2));
}

housePainting(["6", "10", "5.2"]);