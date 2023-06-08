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
        if (_state > 100) {
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
    constructor(name, releaseDate, pagesCount, state = 100, type = 'magazine') {
        super(name, releaseDate, pagesCount, state = 100, type = 'magazine');
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state = 100, type = 'book');
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'novel') {
        super(author, name, releaseDate, pagesCount, state = 100, type = 'novel');
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'fantastic') {
        super(author, name, releaseDate, pagesCount, state = 100, type = 'fantastic');
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'detective') {
        super(author, name, releaseDate, pagesCount, state = 100, type = 'detective');
        this.type = 'detective'
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
       return this.books.find((book, index) => {
        for (let i = 0; i < book[index].length; i++) {
            if ((Object.keys(this.books[index])[i] === type) &&
            (Object.values(this.books[index])[i] === value)) {
                return book[index];
            }
        }
        return null;
     });
    }

    giveBookByName(bookName) {
        return this.books.find((book, index) => {
            for (let i = 0; i < book[index].length; i++) {
                if (Object.values(this.books[index])[i] === bookName) {
                    delete this.books[index];
                    return book[index];
                }
            }
            return null;
         });
    }
}
