 var bookList = document.getElementById("bookList");

	var booksDisplay = {};
	
	booksDisplay = {
		book1 : {
			img : "images/book1.jpg",
			title : "A Song of Ice and Fire",
			author : "George R.R. Martin",
            genre : "High Fantasy"
		},
		book2 : {
			img : "images/book2.jpg",
			title : "All the Light We Cannot See",
			author : "Anthony Doerr",
            genre : "WW2 Historical Fiction"
		},
		book3 : {
			img : "images/book3.jpg",
			title : "The Book Thief",
			author : "Markus Zusak",
            genre : "Historical Fiction"
		},
        book4 : {
			img : "images/book4.jpg",
			title : "The Girl with the Dragon Tattoo",
			author : "Stieg Larsson",
            genre : "Murder Mystery"
		},
		book5 : {
			img : "images/book5.jpg",
			title : "The Road",
			author : "Cormac McCarthy",
            genre : "Post-Apocalyptic"
		},
		book6 : {
			img : "images/book6.jpg",
			title : "Fahrenheit 451",
			author : "Ray Bradbury",
            genre : "Futuristic Utopia"
		},
		book7 : {
			img : "images/book7.jpg",
			title : "Frankenstein",
			author : "Mary Shelley",
            genre : "Monster Horror"
        },
		book8 : {
			img : "images/book8.jpg",
			title : "Watchmen",
			author : "Alan Moore",
            genre : "Superhero/Graphic Novel"
		},
		book9 : {
			img : "images/book9.jpg",
			title : "Gone Girl",
			author : "Gillian Flynn",
            genre : "Psychological Thriller"
		},
		book10 : {
			img : "images/book10.jpg",
			title : "Harry Potter and the Sorcerer's Stone",
			author : "J.K. Rowling",
            genre : "YA Fantasy"
		},
		book11 : {
			img : "images/book11.jpg",
			title : "The Great Gatsby",
			author : "F. Scott Fitzgerald",
            genre : "Classic Fiction"
		},
		book12 : {
			img : "images/book12.jpg",
			title : "The Kite Runner",
			author : "Khaled Hosseini",
            genre : "Cultural Fiction"
		},
		book13 : {
			img : "images/book13.jpg",
			title : "The Goldfinch",
			author : "Donna Tartt",
            genre : "Modern Fiction"
		},
		book14 : {
			img : "images/book14.jpg",
			title : "Storm Front",
			author : "Jim Butcher",
            genre : "Fantasy Mystery"
		},
		book15 : {
			img : "images/book15.jpg",
			title : "BLANK",
			author : "BLANK",
            genre : "BLANK"
		}
	};

	booksRecom = {
		book1 : {
			img : "images/bookRec1.jpg",
			title : "The Name of the Wind (The Kingkiller Chronicle)",
			author : "Patrick Rothfuss",
            genre : "High Fantasy"
		},
		book2 : {
			img : "images/bookRec2.jpg",
			title : "The Blade Itself (The First Law)",
			author : "Joe Abercrombie",
            genre : "High Fantasy"
		},
		book3 : {
			img : "images/bookRec3.jpg",
			title : "The Book Thief",
			author : "Markus Zusak",
            genre : "WW2 Historical Fiction"
		},
        book4 : {
			img : "images/bookRec4.jpg",
			title : "City of Thieves",
			author : "David Benioff",
            genre : "WW2 Historical Fiction"
		},
		book5 : {
			img : "images/bookRec5.jpg",
			title : "Night Film",
			author : "Marisha Pessl",
            genre : "Murder Mystery"
		},
		book6 : {
			img : "images/bookRec6.jpg",
			title : "In the Woods",
			author : "Tana French",
            genre : "Murder Mystery"
		},
		book7 : {
			img : "images/bookRec7.jpg",
			title : "Station Eleven",
			author : "Emily St. John Mandel",
            genre : "Post-Apocalyptic"
		},
		book8 : {
			img : "images/bookRec8.jpg",
			title : "The Passage",
			author : "Justin Cronin",
            genre : "Post-Apocalyptic"
		},
		book9 : {
			img : "images/bookRec9.jpg",
			title : "The Giver",
			author : "Lois Lowry",
            genre : "Futuristic Utopia"
		},
		book10 : {
			img : "images/bookRec10.jpg",
			title : "The House of the Scorpion",
			author : "Nancy Farmer",
            genre : "Futuristic Utopia"
		},
		book11 : {
			img : "images/bookRec11.jpg",
			title : "Interview with a Vampire",
			author : "Anne Rice",
            genre : "Monster Horror"
		},
		book12 : {
			img : "images/bookRec12.jpg",
			title : "The Girl With All the Gifts",
			author : "M.R. Carey",
            genre : "Monster Horror"
		},
		book13 : {
			img : "images/bookRec13.jpg",
			title : "Steelheart",
			author : "Brandon Sanderson",
            genre : "Superhero/Graphic Novel"
		},
		book14 : {
			img : "images/bookRec14.jpg",
			title : "Fables",
			author : "Bill Willingham",
            genre : "Superhero/Graphic Novel"
		},
		book15 : {
			img : "images/bookRec15.jpg",
			title : "Rebecca",
			author : "Daphne Du Maurier",
            genre : "Psychological Thriller"
		},
        book16 : {
			img : "images/bookRec16.jpg",
			title : "The Girl on the Train",
			author : "Paula Hawkins",
            genre : "Psychological Thriller"
		},
		book17 : {
			img : "images/bookRec17.jpg",
			title : "A Wrinkle in Time",
			author : "Madeleine L'Engle",
            genre : "YA Fantasy"
		},
		book18 : {
			img : "images/bookRec18.jpg",
			title : "The Golden Compass",
			author : "Philip Pullman",
            genre : "YA Fantasy"
		},
		book19 : {
			img : "images/bookRec19.jpg",
			title : "The Sun Also Rises",
			author : "Ernest Hemingway",
            genre : "Classic Fiction"
		},
		book20 : {
			img : "images/bookRec20.jpg",
			title : "The Picture of Dorian Gray",
			author : "Oscar Wilde",
            genre : "Classic Fiction"
		},
        book21 : {
			img : "images/bookRec21.jpg",
			title : "The Secret Life of Bees",
			author : "Sue Monk Kidd",
            genre : "Cultural Fiction"
		},
        book22 : {
			img : "images/bookRec22.jpg",
			title : "The Help",
			author : "Kathryn Stockett",
            genre : "Cultural Fiction"
		},
        book23 : {
			img : "images/bookRec23.jpg",
			title : "Life After Life",
			author : "Kate Atkinson",
            genre : "Modern Fiction"
		},
        book24 : {
			img : "images/bookRec24.jpg",
			title : "A Little Life",
			author : "Hanya Yanagihara",
            genre : "Modern Fiction"
		}
	};

    function displayBookList(booksDisplay)
      {
        var output = "";
        
        for(i in booksDisplay)
        {
          output += '<li>';
          output += '<img src="' + booksDisplay[i].img + '" class="smallImg" />';
          output += '</li>';
        }
        
        bookList.innerHTML = output;
      }
      
        displayBookList(booksDisplay);

$( ".smallImg" ).click(function() {
  $( this ).toggleClass( "border" );
});

$('#submitBooks').on( 'click', function () {
  var chosenArray = new Array();
  chosenArray.push($(value.genre).attr('border'));
  console.log(chosenArray);
  
});
  // var bookGenreInput = document.getElementById("bookGenre").value;
 // var bookAuthorInput = document.getElementById("bookAuthor").value;
//  var yearPublishedInput = document.getElementById("yearPublished").value;
    
// bookData.push({bookTitle: bookTitleInput, bookAuthor: bookAuthorInput, yearPublished: yearPublishedInput});
//  displayRecs();
//});

//function chooseBooks() { 
   //     var chosenArray = new Array();
    //    $('.smallImg').click(function() {
     //      $(this).css({border: '1px solid #000'});
      //      chosenArray.push($(this).attr('genre'));
      //      console.log(chosenArray);
     //   });
//}

//output += '<h3>' + booksDisplay[i].title + '</h3>';
     //     output += '<h4>' + booksDisplay[i].author + '</h4>';
    //      output += '<h4>' + booksDisplay[i].genre + '</h4>';