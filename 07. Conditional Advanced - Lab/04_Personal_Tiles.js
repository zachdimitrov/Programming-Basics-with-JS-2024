function personalTiles(input) {
    let age = +input[0];
    let gender = input[1];
    if (gender === 'm') {
        if (age < 16) {
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    } else { 
        if (age < 16) {
            console.log("Miss");
        } else {
            console.log("Ms.");
        }
    }
}

personalTiles(["12", "f"]);
personalTiles(["17", "m"]);
personalTiles(["25", "f"]);
personalTiles(["13.5", "m"]);