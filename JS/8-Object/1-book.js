let book = {
    name: "Bible",
    author: "God(?)",
    words: "789650 words",
    publishYear: -300,
    copies: 2500000000,
};

const bookDescription = (book) =>
    console.log(
        `The book ${book.name} was written by ${book.author} in the year ${book.publishYear}`
    );

bookDescription(book);
