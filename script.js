// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Global Variables for DOM References
var dateDisplayEl= $('#currentDay')
var timeDisplayEl = $('#time')
//var PastEl = $('#row time-block past')
//var PresentEl = $("#row time-block present")
//var FutureEl = $("#row time-block future")
//get current time in hA format
//var currentHour = moment().hour();
//array that lists all of the hours for current work day
//var workDayHours = [
  //moment().hour(9).format('hA'),
 // moment().hour(10).format('hA'),
 // moment().hour(11).format('hA'),
 // moment().hour(12).format('hA'),
  //moment().hour(1).format('hA'),
  //moment().hour(2).format('hA'),
  //moment().hour(3).format('hA'),
  //moment().hour(4).format('hA'),
  //moment().hour(5).format('hA'),
  //moment().hour(6).format('hA')
//];
// target the div that holds the time block hour
var timeBlockHour = $('col-2 col-md-1 hour text-center')

//target the div that holds the time task info
var task = $(".col-8 col-md-10 description")

// End Global Variables

//Function to Display Date
function displayDate () {
  var rightNow = dayjs().format ('MMM DD, YYYY');
  dateDisplayEl.text(rightNow)
}

// Function to Display Time
function displayTime () {
  var timeNow = dayjs ().format ('hh:mm:ss a');
  timeDisplayEl.text(timeNow)
}

function auditTimeBlock(timeBlockEventSpace) {
  //retrieve the hour from the div and convert it to the x'th hour of the day
  var currentTimeBlockHour = moment($("#container-lg px-5").text().trim(), 'hA').hour();

  //remove class of 'past present future
  $(timeBlockEventSpace).removeClass('past present future');

  //conditional to add correct color background to time block depending on time
  if (currentTimeBlockHour > currentHour) {
      $(timeBlockEventSpace).addClass('future');
  }
  else if (currentTimeBlockHour === currentHour) {
      $(timeBlockEventSpace).addClass('present');
  }
  else {
      $(timeBlockEventSpace).addClass('past');
  }
}

// Call Functions displayTime & displayDate
displayDate ();

displayTime ();
setInterval (displayTime, 1000);

//moment ();
//hour ();

 

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
