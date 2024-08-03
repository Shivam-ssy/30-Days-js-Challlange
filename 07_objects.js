function defineObject() {
  let book = {
    author: "Jon Doe",
    title: "Explore the World",
    year: 2021,
    printDetails: function () {
      return `book title ${this.title} book author ${this.author}`;
    },
    updateYear: function (year) {
      this.year = year;
      console.log("Updated value of year is ", this.year);
      return this.year;
    },
    printYear: function () {
      return `Book name: ${this.title} of year ${this.year}`;
    },
  };
  console.log(book); // task 1 completed
  console.log("*********************************");
  console.log("Book Title: ", book.title);
  console.log("*********************************");

  console.log("Book Auther Name: ", book.author);
  console.log("*********************************");

  console.log("Book publish year: ", book.year);
  console.log("*********************************");

  // task 2 completed
  const string = book.printDetails();
  console.log(string);
  // task 3 completed
  console.log(
    `Calling the update year current value is ${book.year} \n`,
    book.updateYear(2022)
  );
  console.log("*********************************");

  // task 4 completed

  console.log(book.printYear());
  //task 7 completed
  console.log("*********************************");

  for (const property in book) {
    if (Object.prototype.hasOwnProperty.call(book, property)) {
      console.log(`Name of the Property ${property}: ${book[property]}`);
    }
  }
  // task 8 completed
  console.log("*********************************");
  const keys = Object.keys(book);
  console.log("Keys:");
  keys.forEach((key) => {
    console.log(key);
  });
  console.log("*********************************");

  // Log all values
  const values = Object.values(book);
  console.log("Values:");
  values.forEach((value) => {
    console.log(value);
  });
  // task 9 completed
  console.log("*********************************");
}

defineObject();
function library() {
  let library = [
    {
      name_of_book: "To Kill a Mockingbird",
      library_name: "Central Library",
      author: "Harper Lee",
      publish_year: 1960,
      genre: "Fiction",
      ISBN: "978-0-06-112008-4",
      available_copies: 4,
    },
    {
      name_of_book: "1984",
      library_name: "Eastside Branch",
      author: "George Orwell",
      publish_year: 1949,
      genre: "Dystopian",
      ISBN: "978-0-452-28423-4",
      available_copies: 2,
    },
    {
      name_of_book: "Pride and Prejudice",
      library_name: "Westside Library",
      author: "Jane Austen",
      publish_year: 1813,
      genre: "Romance",
      ISBN: "978-0-19-953556-9",
      available_copies: 5,
    },
    {
      name_of_book: "The Great Gatsby",
      library_name: "Central Library",
      author: "F. Scott Fitzgerald",
      publish_year: 1925,
      genre: "Tragedy",
      ISBN: "978-0-7432-7356-5",
      available_copies: 3,
    },
    {
      name_of_book: "Moby Dick",
      library_name: "Northside Library",
      author: "Herman Melville",
      publish_year: 1851,
      genre: "Adventure",
      ISBN: "978-0-14-243724-7",
      available_copies: 1,
    },
  ];
  console.log(library);
  // task 5 completed
  console.log("*********************************");

  library.map((book, index) => {
    console.log(
      `Name of the Book "${book.name_of_book}"  from the library: ${book.library_name}`
    );
  });
  console.log("*********************************");

  // task 6 completed
}
// library()
