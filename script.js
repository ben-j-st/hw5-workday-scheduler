var dateObject = {
    date: "dd-mm-yy",
    dayPlanner = {
        nineAM: "",
        tenAM: "",
        elevenAM: "",
        twelvePM: "",
        onePM: "",
        twoPM: "",
        threePM: "",
        fourPM: "",
        fivePM: "",
    };
};

var saveSchedule = function() {
    console.log("i was saved");
    console.log("i was pushed by the " + "(time)" + " button");
}


// click event on the document targeting buttons with the class of .timeButton
$(document).on("click", ".timeButton", saveSchedule);