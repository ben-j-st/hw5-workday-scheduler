var dateObject = {
    date: "dd-mm-yy",
    dayPlanner = {
        nineAM: "9am",
        tenAM: "10am",
        elevenAM: "11am",
        twelvePM: "12pm,",
        onePM: "onepm",
        twoPM: "twopm",
        threePM: "threepm",
        fourPM: "fourpm",
        fivePM: "fivepm",
    };
};

var createSchedule = function() {
    dateObjects.dateObjects.forEach(function(time) {
        console.log(time)
    })
}

var saveSchedule = function() {
    console.log("i was saved");
    console.log("i was pushed by the " + "(time)" + " button");

    // sends the dateObject to local storage as a string
    // localStorage.setItem("datObject", JSON.stringify(dateObject));
}


// click event on the document targeting buttons with the class of .timeButton
$(document).on("click", ".timeButton", saveSchedule);

// gets data from local storage and turns back into an object
localStorage.getItem("dataObject", JSON.parse(dataObject));