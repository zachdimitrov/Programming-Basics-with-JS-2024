function supplies(input) {
    let penPackets = Number(input[0]);
    let markerPackets = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);
    
    fullPrice = penPackets * 5.8 + markerPackets * 7.2 + liters * 1.2;
    discounted = fullPrice - fullPrice * discount / 100;
    console.log(discounted);
}

supplies(["2 ",
"3 ",
"4 ",
"25 "]
);

supplies(["4 ",
"2 ",
"5 ",
"13 "]
);
