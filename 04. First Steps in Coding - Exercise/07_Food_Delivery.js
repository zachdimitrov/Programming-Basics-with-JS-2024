function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fisheMenus = Number(input[1]);
    let vegiMenus = Number(input[2]);

    let fullPrice = chickenMenus * 10.35 + fisheMenus * 12.40 + vegiMenus * 8.15;
    let desert = fullPrice * 0.2;
    console.log(fullPrice + desert + 2.5);
}

foodDelivery(["2 ",
"4 ",
"3 "]
);

foodDelivery(["9 ",
"2 ",
"6 "]
);