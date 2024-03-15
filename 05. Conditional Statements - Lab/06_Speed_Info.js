function speedInfo(input) {
    let speed = +input[0];

    if (speed <= 10) {
        console.log("slow");
    } else if (10 < speed && speed <= 50) {
        console.log("average");
    } else if (10 < speed && speed <= 150) {
        console.log("fast");
    } else if (150 < speed && speed <= 1000) {
        console.log("ultra fast");
    } else if (speed > 1000) {
        console.log("extremely fast");
    }
}

speedInfo(["8"]);
speedInfo(["49.5"]);
speedInfo(["126"]);
speedInfo(["160"]);
speedInfo(["3500"]);