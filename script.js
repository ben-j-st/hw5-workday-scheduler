$(document).ready(function () {


    // var dateObject = {
    //     date: "dd-mm-yy",
    //     dayPlanner: {
    //         nineAM: "9am",
    //         tenAM: "10am",
    //         elevenAM: "11am",
    //         twelvePM: "12pm,",
    //         onePM: "onepm",
    //         twoPM: "twopm",
    //         threePM: "threepm",
    //         fourPM: "fourpm",
    //         fivePM: "fivepm",
    //     }
    // };
    var timeList = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

    var createContent = function() {
        timeList.forEach(function(value) {
            // console.log(value);

            // creating a div ID by using value and tag type
            var divID = value + " div"

            // creating a heading id by using value and the tag type
            var headingID = value + " H5";
            // console.log(headingID);

            //creating a textarea id by using value and tag type
            var textID = value + " textarea" ;
            // console.log(textID);

            // creating a btn id using value and tag type
            var btnID = value + " btn";
            // console.log(btnID);

            // creating a div which acts as a row - object style
            var $div = $("<div>", {
                class: "row time-block",
                id: value,
            });

            // creating a h5 tag - object style
            var $heading = $("<h5>", {
                class: "col-2 heading",
                id:  headingID,
                text: value,
            });

            // create a textarea - object style
            var $textArea = $("<textarea>", {
                class: "col-8 textArea",
                id: textID,
            });

            // creat a btn - object style
            var $newBtn = $("<button>", {
                class: "col-2 saveBtn",
                id: btnID,
                text: "Save Schedule",
            });

            // append div to container
            $(".container").append($div);

            // append h3, textarea & btn to div by id
            $($div).append($heading, $textArea, $newBtn);
        })        
    }
    createContent()

    var saveSchedule = function() {
       
        console.log("i was saved");
        // event.srcElement.id used for targeting what button was pushed.
        console.log("i was pushed by the " + event.srcElement.id + " button");

        // sends the dateObject to local storage as a string
        // localStorage.setItem("datObject", JSON.stringify(dateObject)) || [];
    };


    // click event on the document targeting buttons with the class of .saveButton
    $(document).on("click", ".saveBtn", saveSchedule);

    // gets data from local storage and turns back into an object
    // localStorage.getItem("dataObject", JSON.parse(dateObject));

});