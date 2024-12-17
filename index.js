//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.
 
//* Step 1:Use at least one array.
//book ..... (array)

// Step 2: Use at least two classes.
// class representing book 
class Book {  //book ..... (array)

  constructor(title , author, year){
    this.title = title;
    this.author = author;
    this.year = year
  }
  
  describe() {
    return `${this.title} by ${this.author} (${this.year})`;
  }
}
 
// class representing library
class Library{
    constructor (){
        this.books = []; ///array to store the books
    }
    // Add a new book to the library
    addBook(title, author,year) {
        const newBook = new Book(title,author,year);
        this.books.push(newBook);
        console.log(`Added: ${newBook.display()}`);
    }

 //view all books in the library
 viewBooks() {
    if (this.books.length === 0) {
        console.log("The library is empty.");
    } else {
        console.log("Library Collection:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.display()}`);
        });
    }
}
// Delete a book by index
deleteBook(index) {
    if (index < 1 || index > this.books.length) {
        console.log("Invalid selection. Please choose a valid book number.");
    } else {
        const removedBook = this.books.splice(index - 1, 1)[0];
        console.log(`Deleted: ${removedBook.display()}`);
    }
 }
}
 // Initialize the library
let library = new Library();

 // Function to display main menu
 function displayMainMenu() {
      console.log("\n--- Library Menu App ---");
      console.log("1. Add a book");
      console.log("2. View all books");
      console.log("3. Delete a book");
      console.log("4. Exit");
 }

// Function to handle user input
function runApp() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    function mainLoop() {
        displayMainMenu();
        readline.question("Choose an option: ", (Option) => {
            switch (Option) {
                case "1": // Add a book
                  readline.question("Enter the book title: ", (title) => {
                      readline.question("Enter the author: ", (author) => {
                          readline.question("Enter the publication year: ", (year) => {
                              library.addBook(title, author, year);
                              mainLoop();
                          });
                      });
                  });
                  break;
                
                case "2": // View all books
                    library.viewBooks();
                    mainLoop();
                    break;
                    
                case "3": // Delete a book
                    library.viewBooks();
                    readline.question("Enter the number of the book to delete: ", (index) => {
                        library.deleteBook(parseInt(index));
                        mainLoop();                         
                    });
                    break;
                    
                case "4": // Exit
                    console.log("Goodbye!");
                    readline.close();
                    break;
                    
                default:
                    console.log("Invalid option. Please try again.");
                    mainLoop();
                    break;    
            }         
        });
    }
    
    mainLoop();
  }

// Run the app
runApp();
