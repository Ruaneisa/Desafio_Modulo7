const repositorio = require('./repositorio');

function addBook(title, author, year, genre) {
    return repositorio.addBook(title, author, year, genre);
}

function listBooks() {
    return repositorio.listBooks();
}

function updateBook(id, updatedData) {
    return repositorio.updateBook(id, updatedData);
}

function deleteBook(id) {
    return repositorio.deleteBook(id);
}

function findBooksByTitle(title) {
    return repositorio.findBooksByTitle(title);
}

function findBooksByAuthor(author) {
    return repositorio.findBooksByAuthor(author);
}

function findBooksByYear(year) {
    return repositorio.findBooksByYear(year);
}

function findBooksByGenre(genre) {
    return repositorio.findBooksByGenre(genre);
}

module.exports = {
    addBook,
    listBooks,
    updateBook,
    deleteBook,
    findBooksByTitle,
    findBooksByAuthor,
    findBooksByYear,
    findBooksByGenre
};