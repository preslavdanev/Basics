function vacationBookList(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let hours = bookPages / pagesPerHour;
    let finalResult = hours / days;
    console.log(finalResult)
}
vacationBookList(["212", "20", "2"])