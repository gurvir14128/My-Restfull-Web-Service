// Userlist data array for filling in info box
var videogamesData = [];

// DOM Ready =============================================================
$(document).ready(function() {

  // Populate the user table on initial page load
  populateTable();
  


//Username link click
$('#videogames table tbody').on('click', 'td a.linkshowuser', showgameInfo);



});

// Functions =============================================================

// Fill table with data
function populateTable() {

  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/users/videogames', function( data ) {

	  videogamesData = data;
	  
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.videogame + '">' + this.videogame + '</a></td>';
      tableContent += '<td>' + this.MainCharacter + '</td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#videogames table tbody').html(tableContent);
  });
};


function showgameInfo(event) {

  // Prevent Link from Firing
  event.preventDefault();

  // Retrieve username from link rel attribute
  var thisvideogame = $(this).attr('rel');

  // Get Index of object based on id value
  var arrayPosition = videogamesData.map(function(arrayItem) { return arrayItem.videogame; }).indexOf(thisvideogame);
  
  // Get our User Object
  var thisUserObject = videogamesData[arrayPosition];

  //Populate Info Box
  $('#gameInfovideogame').text(thisUserObject.videogame);
  $('#gameInfoMainCharacter').text(thisUserObject.MainCharacter);
  $('#gameInfoconsole').text(thisUserObject.console);
  $('#gameInfogenre').text(thisUserObject.genre);

};