function oldBooks(input) {

    wantedBook = input[0];
    let index = 1;
    let command = input[index];
    index++;
    let bookCounter = 0;

    while (command !== "No More Books") {
        if (command === wantedBook) {
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        }
        bookCounter++;
        command = input[index];
        index++;
    }
    if (command !== wantedBook) {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    }
}
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])