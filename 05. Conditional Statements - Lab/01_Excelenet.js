function isExcelent(input) {
    let grade = +input[0];
    if (grade >= 5.5) {
      console.log("Excellent!");
    }
  }

isExcelent(["6"]);
isExcelent(["5"]);
isExcelent(["5.50"]);
isExcelent(["5.49"]);