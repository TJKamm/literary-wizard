var chosenImages = new Array();
var chosenArray = new Array();
var booksRecomList = new Array();

var bookList = document.getElementById("bookList");
var bookRecs = document.getElementById("bookRecs");

	var booksDisplay = [];
	
	booksDisplay = [
		{
			img : "images/book1.jpg",
			title : "A Song of Ice and Fire",
			author : "George R.R. Martin",
            genre : "High Fantasy"
		},
		{
			img : "images/book2.jpg",
			title : "All the Light We Cannot See",
			author : "Anthony Doerr",
            genre : "WW2 Historical Fiction"
		},
		{
			img : "images/book3.jpg",
			title : "The Thirteenth Tale",
			author : "Diane Setterfield",
            genre : "Books about Books"
		},
        {
			img : "images/book4.jpg",
			title : "The Girl with the Dragon Tattoo",
			author : "Stieg Larsson",
            genre : "Murder Mystery"
		},
		{
			img : "images/book5.jpg",
			title : "The Road",
			author : "Cormac McCarthy",
            genre : "Post-Apocalyptic"
		},
		{
			img : "images/book6.jpg",
			title : "Fahrenheit 451",
			author : "Ray Bradbury",
            genre : "Futuristic Utopia"
		},
		{
			img : "images/book7.jpg",
			title : "Frankenstein",
			author : "Mary Shelley",
            genre : "Monster Horror"
        },
		{
			img : "images/book8.jpg",
			title : "Watchmen",
			author : "Alan Moore",
            genre : "Superhero or Graphic Novel"
		},
		{
			img : "images/book9.jpg",
			title : "Gone Girl",
			author : "Gillian Flynn",
            genre : "Psychological Thriller"
		},
		{
			img : "images/book10.jpg",
			title : "Harry Potter and the Sorcerer's Stone",
			author : "J.K. Rowling",
            genre : "YA Fantasy"
		},
		{
			img : "images/book11.jpg",
			title : "The Great Gatsby",
			author : "F. Scott Fitzgerald",
            genre : "Classic Fiction"
		},
		{
			img : "images/book12.jpg",
			title : "The Kite Runner",
			author : "Khaled Hosseini",
            genre : "Cultural Fiction"
		},
		{
			img : "images/book13.jpg",
			title : "The Goldfinch",
			author : "Donna Tartt",
            genre : "Modern Fiction"
		},
		{
			img : "images/book14.jpg",
			title : "Storm Front",
			author : "Jim Butcher",
            genre : "Fantasy Mystery"
		},
		{
			img : "images/book15.jpg",
			title : "The Bell Jar",
			author : "Sylvia Plath",
            genre : "Psychological Fiction"
		}
	];

	booksRecom = [
		{
			img : "images/bookRec1.jpg",
			title : "The Name of the Wind (The Kingkiller Chronicle)",
			author : "Patrick Rothfuss",
            genre : "High Fantasy"
		},
		{
			img : "images/bookRec2.jpg",
			title : "The Blade Itself (The First Law)",
			author : "Joe Abercrombie",
            genre : "High Fantasy"
		},
		{
			img : "images/bookRec3.jpg",
			title : "The Book Thief",
			author : "Markus Zusak",
            genre : "WW2 Historical Fiction"
		},
        {
			img : "images/bookRec4.jpg",
			title : "City of Thieves",
			author : "David Benioff",
            genre : "WW2 Historical Fiction"
		},
		{
			img : "images/bookRec5.jpg",
			title : "Night Film",
			author : "Marisha Pessl",
            genre : "Murder Mystery"
		},
		{
			img : "images/bookRec6.jpg",
			title : "In the Woods",
			author : "Tana French",
            genre : "Murder Mystery"
		},
		{
			img : "images/bookRec7.jpg",
			title : "Station Eleven",
			author : "Emily St. John Mandel",
            genre : "Post-Apocalyptic"
		},
		{
			img : "images/bookRec8.jpg",
			title : "The Passage",
			author : "Justin Cronin",
            genre : "Post-Apocalyptic"
		},
		{
			img : "images/bookRec9.jpg",
			title : "The Giver",
			author : "Lois Lowry",
            genre : "Futuristic Utopia"
		},
		{
			img : "images/bookRec10.jpg",
			title : "The House of the Scorpion",
			author : "Nancy Farmer",
            genre : "Futuristic Utopia"
		},
		{
			img : "images/bookRec11.jpg",
			title : "Interview with a Vampire",
			author : "Anne Rice",
            genre : "Monster Horror"
		},
		{
			img : "images/bookRec12.jpg",
			title : "The Girl With All the Gifts",
			author : "M.R. Carey",
            genre : "Monster Horror"
		},
		{
			img : "images/bookRec13.jpg",
			title : "Steelheart",
			author : "Brandon Sanderson",
            genre : "Superhero or Graphic Novel"
		},
		{
			img : "images/bookRec14.jpg",
			title : "Fables",
			author : "Bill Willingham",
            genre : "Superhero or Graphic Novel"
		},
		{
			img : "images/bookRec15.jpg",
			title : "Rebecca",
			author : "Daphne Du Maurier",
            genre : "Psychological Thriller"
		},
        {
			img : "images/bookRec16.jpg",
			title : "The Girl on the Train",
			author : "Paula Hawkins",
            genre : "Psychological Thriller"
		},
		{
			img : "images/bookRec17.jpg",
			title : "A Wrinkle in Time",
			author : "Madeleine L'Engle",
            genre : "YA Fantasy"
		},
		{
			img : "images/bookRec18.jpg",
			title : "The Golden Compass",
			author : "Philip Pullman",
            genre : "YA Fantasy"
		},
		{
			img : "images/bookRec19.jpg",
			title : "The Sun Also Rises",
			author : "Ernest Hemingway",
            genre : "Classic Fiction"
		},
		{
			img : "images/bookRec20.jpg",
			title : "The Picture of Dorian Gray",
			author : "Oscar Wilde",
            genre : "Classic Fiction"
		},
        {
			img : "images/bookRec21.jpg",
			title : "The Secret Life of Bees",
			author : "Sue Monk Kidd",
            genre : "Cultural Fiction"
		},
        {
			img : "images/bookRec22.jpg",
			title : "The Help",
			author : "Kathryn Stockett",
            genre : "Cultural Fiction"
		},
        {
			img : "images/bookRec23.jpg",
			title : "Life After Life",
			author : "Kate Atkinson",
            genre : "Modern Fiction"
		},
        {
			img : "images/bookRec24.jpg",
			title : "A Little Life",
			author : "Hanya Yanagihara",
            genre : "Modern Fiction"
		},
        {
			img : "images/bookRec25.jpg",
			title : "Girl, Interrupted",
			author : "BLANK",
            genre : "Psychological Fiction"
		},
        {
			img : "images/bookRec26.jpg",
			title : "Franny and Zooey",
			author : "J.D. Salinger",
            genre : "Psychological Fiction"
		},
        {
			img : "images/bookRec27.jpg",
			title : "Mr. Penumbra's 24-Hour Bookstore",
			author : "Robin Sloan",
            genre : "Books about Books"
		},
        {
			img : "images/bookRec28.jpg",
			title : "The Shadow of the Wind",
			author : "Carlos Ruiz Zafon",
            genre : "Books about Books"
		},
        {
			img : "images/bookRec29.jpg",
			title : "The Eyre Affair",
			author : "Jasper Fforde",
            genre : "Fantasy Mystery"
		},
        {
			img : "images/bookRec30.jpg",
			title : "Hounded",
			author : "Kevin Hearne",
            genre : "Fantasy Mystery"
		}
	];

    function displayBookList(booksDisplay) {
        var output = "";
        
        for(i in booksDisplay)
        {
          output += '<li>';
          output += '<img src="' + booksDisplay[i].img + '" class="smallImg" />';
          output += '</li>';
        };
        
        bookList.innerHTML = output;
      };
      
        displayBookList(booksDisplay);

$( ".smallImg" ).click(function() {
  $( this ).toggleClass( "border" );
});

$('#submitBooks').on('click', function () {
  var borderImages = $('.border');
  borderImages.each(function () {
    chosenImages.push($(this).attr('src'));
  });
   for (var j = 0; j < chosenImages.length; j++) {
    for (var i = 0; i < booksDisplay.length; i++) {
      if ( chosenImages[j] == booksDisplay[i].img){
      chosenArray.push(booksDisplay[i]);
    };
   };
  };
  
  function changeBookList(chosenArray) {
        var output = "";
        
        for(i in chosenArray)
        {
          output += '<li>';
          output += '<img src="' + chosenArray[i].img + '" class="smallImg" />';
          output += '</li>';
        };
        
        bookList.innerHTML = output;
      };
        displayBookList(chosenArray);
  
    for (var l = 0; l < chosenArray.length; l++) {
      for (var m = 0; m < booksRecom.length; m++) {
      if (chosenArray[l].genre == booksRecom[m].genre)
        booksRecomList.push(booksRecom[m]);
      };
    };  
  function displayRecList() {
        var outputRecs = "";
        for(i in booksRecomList)
        {
          outputRecs += '<li class="book">';
          outputRecs += '<img src="' + booksRecomList[i].img + '" class="smallImg" />';
          outputRecs += '<div class="description">' + booksRecomList[i].title + '<br><br>' + booksRecomList[i].author + '</div>';
          outputRecs += '</li>';
        };
        bookRecs.innerHTML = outputRecs;
      };

displayRecList(); 
hoverDescription();
  });

$('#resetBooks').on('click', function () {
  chosenArray = [];
  chosenImages = [];
  booksRecomList = [];
  document.getElementById("bookRecs").innerHTML = "";
  displayBookList(booksDisplay);
  
  $( ".smallImg" ).click(function() {
  $( this ).toggleClass( "border" );
});
});
  
function hoverDescription () {
  $(".book").hover( 
   function(e){
          $(this).find('div').css({
          "left" : event.pageX,
          "top" : event.pageY
        });
      $(this).find('div').show();
   },
   function(e){
      $(this).find('div').hide();
  });
};

$( "#wizard-header" ).hover(function() {
  $( "#wizard-header" ).animate({
    top: "-50",
    duration: 1000, 
    easing: 'easeOutBounce'
  });
});
