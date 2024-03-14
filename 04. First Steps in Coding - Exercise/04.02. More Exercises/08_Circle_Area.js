function circleArea(input) {
    let r = +input[0];
    console.log((r * r * Math.PI).toFixed(2));
    console.log((2 * r * Math.PI).toFixed(2));
}

circleArea(["3"]);
circleArea(["4.5"]);