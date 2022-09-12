let books = [
    {
        isbn: 111111,
        title: 'Lorem',
        author: 'ipsum',
        year: 2020,
        read: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price: 999,
    },
    {
        isbn: 222222,
        title: 'dolor',
        author: 'ipsum',
        year: 2000,
        read: false,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price: 99,
    },
    {
        isbn: 333333,
        title: 'ipsum',
        author: 'dolor',
        year: 2013,
        read: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price: 111,
    },
    {
        isbn: 444444,
        title: 'consectetur',
        author: 'adipisicing',
        year: 2010,
        read: false,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price: 10,
    },
    {
        isbn: 555555,
        title: 'dolor',
        author: 'sit',
        year: 2010,
        read: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price: 999,
    },
    {
        isbn: 666666,
        title: 'amet',
        author: 'consectetur',
        year: 2010,
        read: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price: 999,
    },
    {
        isbn: 777777,
        title: 'adipisicing',
        author: 'elit',
        year: 2010,
        read: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price: 599,
    },
    {
        isbn: 888888,
        title: 'Cum',
        author: 'suscipit',
        year: 2016,
        read: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum suscipit dolores, aperiam, dolorum doloremque vel assumenda illum sit adipisci, voluptatibus eligendi? Nulla impedit dolorum expedita ullam, vitae maiores dolores corrupti?',
        price: 799,
    },
]

// Question a. Display books with ISBN number, author and title.
function displayAll() {
    for (let i = 0; i < books.length; i++) {
        console.log(`${books[i].isbn} ${books[i].author} ${books[i].title}`);
    }
}
displayAll();

// Question b. Display books by read status.
function displayByReadStatus(readStatus) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].read === readStatus) {
            console.log(`${books[i].isbn} ${books[i].author} ${books[i].title}`);
        }
    }
}
displayByReadStatus(true);

// Question c. Calculates total value of all books in a given year. 
function totalForYear(year) {
    let total = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].year === year) {
            total += books[i].price;
        }
    }
    // if no books are found.
    if (total === 0) {
        return `No books found for ${year}`;
    }
    return `Total for year ${year} is : ${total}`;
}

console.log(totalForYear(2000));