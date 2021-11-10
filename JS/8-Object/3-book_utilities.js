let book1 = {
    name: "Harry Potter and the Philosopher's stone",
    author: "J.K. Rowling",
    year: 1997,
};

let book2 = {
    name: "Horrible Harry",
    author: "Suzy Kline",
    year: 1989,
};

let bookUtils = {};

bookUtils.getFirstPublished = (book1, book2) =>
    book1.year < book2.year ? book1 : book2;

bookUtils.setNewEdition = (book, editionYear) => {
    book.latestEdition = editionYear;
};

bookUtils.setLanguage = (book, language) => {
    book.language = language;
};

bookUtils.setTranslation = (book, language, translator) => {
    book.translation = { language, translator };
};

bookUtils.setPublisher = (book, name, location) => {
    book.publisher = { name, location };
};

bookUtils.isSamePublisher = (book1, book2) => {
    return (
        book1.publisher.name === book2.publisher.name &&
        book1.publisher.location === book2.publisher.location
    );
};
