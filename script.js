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
    var currHour = parseInt($(this).attr('id').split('-')[1]);
    //console.log(currHour);

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

// Button Click Needs to Store Information

var textDescriptionEl = $("#col-8 col-md-10 description");

//var inputAnswer = $(".3");
//var timeEl = $("hour-9, hour-10, hour-11, hour-12, hour-12, hour-14, hour-15, hour-16, hour-17, hour-18")
//var valueEl = ("fas fa-save")


function saveToStorage () {
  const value = $(this).siblings('textarea').val()
  const key = $(this).parent().attr("id");
  localStorage.setItem(key,value);

}
$("#hour textarea").val(localStorage.getItem('hour'))

$('.saveBtn').on("click", saveToStorage);

// Call Functions displayTime & displayDate
displayDate ();

displayTime ();
setInterval (displayTime, 1000);
 
timeBlockColor();

$(function () {



 
});
