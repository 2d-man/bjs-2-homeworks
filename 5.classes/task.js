class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    
    fix(){
        this.newState = this.state *= 1.5;
    }

    set newState(state) {
        if (state < 0) {
            this.state = 0;
        } 
        if (state > 100) {
            this.state = 100;
        }
        if ((state > 0) && (state < 100)) {
            this.state = state;
        }
    } 

    get newState() {
        return this.state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = 'magazine') {
        super(name, releaseDate, pagesCount, state = 100, type = 'magazine');
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'book') {
        super(name, releaseDate, pagesCount, state = 100, type = 'book');
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = 'novel') {
        super(name, releaseDate, pagesCount, state = 100, type = 'novel');
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = 'fantastic') {
        super(name, releaseDate, pagesCount, state = 100, type = 'fantastic');
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state = 100, type = 'detective') {
        super(name, releaseDate, pagesCount, state = 100, type = 'detective');
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
            this.books.push = book;
        }
    }

    findBookBy(type, value) {
        for (let i in this.books) {
            if ((Object.keys(this.books[i]) === type) && (Object.values(this.books[i]) === value)) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i in this.books) {
            if (Object.values(this.books[i]) === bookName) {
                delete this.books[i];
                return this.books[i];
            }
        }
        return null;
    }
}
