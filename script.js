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

    var currentDay = moment().format('dddd');
    $("#currentDay").text(currentDay);

    var currentHour = moment().format('H');
    
    // function for updating clock
    var updatingTime = function() {
        $("#currentTime").text(moment().format('LTS'));
    }
    // interval responsible for running updatingTime function
    setInterval(updatingTime, 1000);


    var settingID = 9;

    var createContent = function() {
        timeList.forEach(function(value) {
            // console.log(value);

            // creating a heading id by using value and the tag type
            var headingID = value + " H5";
            // console.log(headingID);

            //creating a textarea id by using value and tag type
            // var textID = value + " textarea" ;
            // console.log(textID);

            // creating a btn id using value and tag type
            var btnID = value + " btn";
            // console.log(btnID);

            // creating the variable for saveSymbol
            var $saveSymbol = $("<i class='far fa-save'></i>"); 

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

            // create a textarea - object style - id is just a number for time checks
            var $textArea = $("<textarea>", {
                class: "col-8 textArea",
                id: settingID,
            });

            // creat a btn - object style
            var $newBtn = $("<button>", {
                class: "col-2 saveBtn",
                id: btnID,
                html: $saveSymbol,
            });

            // append div to container
            $(".container").append($div);

            // append h3, textarea & btn to div by id
            $($div).append($heading, $textArea, $newBtn);

            // iterating settingID by 1 to match time to each div 
            settingID++
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


   

    // function to set background color
    var setColor = function(element, color){
        element.style.backgroundColor = color;
    }
    
    // create an array from a search result
    var textSearch = $(".textArea");

    // turning the jquery search into an array
    var textArray = Array.from(textSearch);

    // looping through the array to make if checks
   textArray.forEach(element => {

        var textIDString = element.id;
        var textHour = parseInt(textIDString);
      
        // can be deleted later
        // if (textIDString) {
        //       textHour = parseInt(textIDString);
        // }
        
        // check to see what the textArea id is & the current Hour
        console.log("the textarea id is " + textHour);
        console.log("the current hour is " + currentHour);

        // remove commented out sections later if still working 
        // if (textHour) {
            //compare the current hour and sets color
            if (currentHour == textHour) {
                setColor(element, "red");
            } else if (currentHour < textHour) {
                setColor(element, "green");
            } else if (currentHour > textHour) {
                setColor(element, "lightGrey");
            } else {
                return
            };
        // };

    })
});