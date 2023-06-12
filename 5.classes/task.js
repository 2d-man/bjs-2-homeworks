class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this.state = 100;
    }
    
    fix(){
        this.state = this.state *= 1.5;
    }

    set state(_state) {
        if (_state < 0) {
            this._state = 0;
        } 
        if (_state >= 100) {
            this._state = 100;
        }
        if ((_state > 0) && (_state < 100)) {
            this._state = _state;
        }
    } 

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(book => {
            for (let key in book) {
                if ((key === type) && 
                (book[key] !== value)) {
                    return null;
                }
                if ((key === type) && 
                (book[key] === value)) {
                    return book;
                }
            }
        });
        return book ? book : null;
    }

    giveBookByName(bookName) {
        let book = this.books.find((book, i) => {
            if (book.name === bookName) {
                delete this.books[i];
                this.books = this.books.filter(Boolean);
                return book;
            }
        });
        return book ? book : null;
    }
}
