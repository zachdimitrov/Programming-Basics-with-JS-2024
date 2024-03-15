function figureArea(input) {
    let figure = input[0];
    
    if (figure == "square") {
        let side = Number(input[1]);
        console.log((side * side).toFixed(3));
    } else if (figure == "rectangle") {
        let width = Number(input[1]);
        let length = Number(input[2]);
        console.log((width * length).toFixed(3));
    } else if (figure == "circle") {
        let radius = Number(input[1]);
        console.log((radius * radius * Math.PI).toFixed(3));
    } else if (figure == "triangle") {
        let height = Number(input[2]);
        let side = Number(input[1]);
        console.log((side * height * 0.5).toFixed(3));
    }
}

figureArea(["square", "5"]);
figureArea(["rectangle","7", "2.5"]);
figureArea(["rectangle",
"7",
"2.5"]);
figureArea(["triangle",
"4.5",
"20"]);