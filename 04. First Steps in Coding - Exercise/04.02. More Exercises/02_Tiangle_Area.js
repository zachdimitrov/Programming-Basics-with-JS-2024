function triangleArea(input) {
    let a = +input[0];
    let h = +input[1];
    console.log((a * h * 0.5).toFixed(2));
}

triangleArea(["20", "30"]);