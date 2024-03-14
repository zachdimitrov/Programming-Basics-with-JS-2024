function repainting(input) {
    sqMetersNylon = Number(input[0]);
    litersPaint = Number(input[1]);
    litersRazreditel = Number(input[2]);
    hoursWork = Number(input[3]);

    fullPrice = (sqMetersNylon + 2) * 1.5 +
     (litersPaint + litersPaint * 0.1) * 14.5 +
      litersRazreditel * 5 + 0.4;

    workPrice = fullPrice * 0.3 * hoursWork;
    console.log(fullPrice + workPrice);
}

repainting(["10 ",
"11 ",
"4 ",
"8 "]
);

repainting(["5 ",
"10 ",
"10 ",
"1 "]
);