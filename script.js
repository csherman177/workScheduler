// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Global Variables for DOM References
var dateDisplayEl= $('#currentDay')
var timeDisplayEl = $('#time')
var saveBtn = $(".saveBtn");
var timeBlockHour = $('col-2 col-md-1 hour text-center')
//target the div that holds the time task info
var task = $(".col-8 col-md-10 description")

// End Global Variables

//Function to Display Date
function displayDate () {
  var moment = dayjs().format ('MMM DD, YYYY');
  dateDisplayEl.text(moment)
}

// Function to Display Time
function displayTime () {
  var timeNow = dayjs ().format ('hh:mm:ss a');
  timeDisplayEl.text(timeNow)
}

// Function for Time Block Color
function timeBlockColor() {
  var hour = dayjs().hour();

  $(".time-block").each(function() {
      var currHour = parseInt($(this).attr("id"));

      // console.log(this); //each time-block

      if (currHour > hour) {
          $(this).addClass("future");
      } else if (currHour === hour) {
          $(this).addClass("present");
      } else {
          $(this).addClass("past");
      }
  })
};

// WHEN I click the save button for that time block
saveBtn.on("click", function() {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
});

// WHEN I refresh the page
// THEN the saved events persist
function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        // console.log(this);
        // console.log(currHour);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}


// Call Functions displayTime & displayDate
displayDate ();

displayTime ();
setInterval (displayTime, 1000);
 
timeBlockColor();

$(function () {

  
  // Event Listener for Each Button



  // Save Answers to Local Storage


  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
