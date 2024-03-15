function greaterNumber(input) {
    let left = +input[0];
    let right = +input[1];

    if (left > right) {
        console.log(left);
    } else {
        console.log(right);
    }
}

greaterNumber(["5", "3"]);
greaterNumber(["3", "5"]);
greaterNumber(["10", "10"]);