function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let fullVolume = length * width * height / 1000;
    console.log(fullVolume - fullVolume * percent / 100);
}

fishTank(["85 ",
"75 ",
"47 ",
"17 "]
);

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
);