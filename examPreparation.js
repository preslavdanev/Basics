function examPreparation(input) {

    let goodGrade = 0;
    let badGrade = 0;
    let avgGrade = 0;
    let lastProblem = "";
    let maxProblems = Number(input[0]);
    let index = 1;
    let command = input[index];
    let count = 0;
    while (command !== "Enough") {
        lastProblem = command;
        index++
        command = input[index];
        let grade = Number(command);
        avgGrade += grade;
        count++
        if (grade > 4) {
            goodGrade++;
        } else {
            badGrade++
        }
        if (badGrade >= maxProblems) {
            console.log(`You need a break, ${badGrade} poor grades.`);
            break;
        }
        index++
        command = input[index];
    }
    if (badGrade < maxProblems) {
        console.log(`Average score: ${(avgGrade / count).toFixed(2)}`);
        console.log(`Number of problems: ${count}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])