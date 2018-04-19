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
        //add button to buttons-view div
        $("#buttons-view").append(a);
    }
}

renderButtons();
