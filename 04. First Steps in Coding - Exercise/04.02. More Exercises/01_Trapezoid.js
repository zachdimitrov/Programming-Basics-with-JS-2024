function trapezoidArea(input) {
    let b1 = +input[0];
    let b2 = +input[1];
    let h = +input[2];
    console.log(((b1 + b2) * h * 0.5).toFixed(2));
}

trapezoidArea(["8", "13", "7"]);