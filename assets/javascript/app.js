$(document).ready(function () {


//initialize variables

var sportsArray = ["soccer", "football", "polo", "hockey", "curling", "baseball", "basketball", "golf", "rugby", "boxing", "gymnastics"]



//function for displaying buttons
function renderButtons() {
    //deletes buttons prior to load
    $("#buttons-view").empty();
    
    //looping through sports array to add button for each sport
    for (var i = 0; i < sportsArray.length; i++) {
        
        //generate buttons for each sport

        var a = $("<button>");
        //adding a class to movie button
        a.addClass("sport-button");
        //add a data attribute
        a.attr("data-name", sportsArray[i]);
        //add name to button
        a.text(sportsArray[i]);
        //add button to buttons-view div
        $("#buttons-view").append(a);
    }
}



//event handler to add another sport button 
$("#add-gif").on("click", function(event) {
    event.preventDefault();

    //grab user input from text box
    var sport = $("#sports-input").val().trim();

    //new sport from user is added to array
    sportsArray.push(sport);
    //input box is cleared
    $("#sports-input").val("");
    //buttons are reloaded
    renderButtons();
})



function getSportsGifs() {
    //grab sport name from button click
    var sportName = $(this).attr("data-name");
   //set rating limit
    var rating = 'pg';
    //  set number of gifs shown
    var limit = 10;
    //  api Key
    var apiKey = 'dDn9PFRnzfIiJQk7Z88v3edbxIGdJ06J';

    //create Giphy URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sportName + "&rating=" +rating + "&limit=" + limit+ "&api_key=" + apiKey;

    // Creating an AJAX call for the specific sports button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function (response) {
        console.log(response);
        console.log(queryURL);


    });


};  
getSportsGifs();
});
