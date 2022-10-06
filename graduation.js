function graduation(input) {

    let name = input[0];
    let index = 1;
    command = input[index];
    index++;
    let avrGrade = 0;
    let countGrades = 0;
    let badGrades = 0;

    while (command < 12) {
        let grade = Number(command);
        avrGrade += grade;
        if (grade < 4) {
            badGrades++;
        }
        if (badGrades > 1) {
            console.log(`${name} has been excluded at ${countGrades} grade`);
            break;
        }
        countGrades++;
        command = input[index];
        index++;
    }
    if (badGrades < 1) {
        console.log(`${name} graduated. Average grade: ${(avrGrade / countGrades).toFixed(2)}`);
    }
}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])