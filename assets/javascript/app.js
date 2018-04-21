$(document).ready(function () {


//initialize variables

var sportsArray = ["soccer", "football", "polo", "hockey", "curling", "baseball", "basketball", "golf", "rugby", "boxing", "gymnastics"]

renderButtons();
getSportsGifs();

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
    console.log(sportsArray);
    console.log(sport);
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
        console.log(sportName);

        var results = response.data;
        //start with empty div
        $("#sports").empty();
        //create div for each of 10 returned gifs
        for (var i = 0; i < results.length; i++) {
            var newDiv = $("<div>");
            newDiv.addClass("sportsGif");
            //create rating variable
            var ratingDisp = $("<p id='rating'>").text('Rating: ' + results[i].rating);
            //add rating for each gif
            newDiv.append(ratingDisp);

            console.log(ratingDisp);
            //create img to hold each gif and add still and animated classes
            var sportsImage = $('<img>');
            sportsImage.attr({'src': results[i].images.fixed_height_still.url});
            sportsImage.attr({'data-still': results[i].images.fixed_height_still.url});
            sportsImage.attr({'data-animate': results[i].images.fixed_height.url});
            sportsImage.attr({'data-state': "still"});
            sportsImage.attr("class", "gif");
            //add images to the new div
            newDiv.append(sportsImage);
            //place new div in container div
            $("#sports").append(newDiv);
        }


    });


};  

});
