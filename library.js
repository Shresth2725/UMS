
var booksData = [
    { title: "Book Title 1", author: "Author 1", isbn: "ISBN1", genre: "Fiction", availability: true },
    { title: "Book Title 2", author: "Author 2", isbn: "ISBN2", genre: "Non-fiction", availability: false },
   
];


function displayBooks() {
    var tableBody = document.getElementById("books");
    tableBody.innerHTML = "";
    booksData.forEach(function(book) {
        var row = "<tr>";
        row += "<td>" + book.title + "</td>";
        row += "<td>" + book.author + "</td>";
        row += "<td>" + book.isbn + "</td>";
        row += "<td>" + book.genre + "</td>";
        row += "<td>" + (book.availability ? "Available" : "Not Available") + "</td>";
        row += "<td>";
        if (book.availability) {
            row += "<button class='borrow-btn' onclick='borrowBook(\"" + book.isbn + "\")'>Borrow</button>";
        } else {
            row += "<button class='return-btn' onclick='returnBook(\"" + book.isbn + "\")'>Return</button>";
        }
        row += "</td>";
        row += "</tr>";
        tableBody.innerHTML += row;
    });
}


function searchBooks() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("books");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; 
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function borrowBook(isbn) {
    
    console.log("Borrowing book with ISBN: " + isbn);
}


function returnBook(isbn) {
    
    console.log("Returning book with ISBN: " + isbn);
}


window.onload = function() {
    displayBooks();
};
