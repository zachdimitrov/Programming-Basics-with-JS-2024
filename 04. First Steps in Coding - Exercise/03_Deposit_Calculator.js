function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let months = Number(input[1]);
    let interest = Number(input[2]);

    let finalSum = depositSum + months * ((depositSum * interest / 100) / 12);
    console.log(finalSum)
}

depositCalculator(["200 ",
"3 ",
"5.7 "]
)

depositCalculator(["2350",
"6 ",
"7 "]
)