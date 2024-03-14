function classRoom(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    let rows = Math.floor(w / 1.2);
    let cols = Math.floor((h - 1) / 0.7);

    console.log(rows * cols - 3);
}

classRoom(["15", "8.9"]);
classRoom(["8.4", "5.2"]);