// set moment js into app.

var currentDayEl = $("#currentDay").text(moment().format("dddd, MMMM Do"));
var dayStart = 9;
var dayEnd = 17;

// return storage
function loadActivity(rowid) {
  return localStorage.getItem(rowid);
}

// saverow if no content remove

function saveActivity(rowid, content) {
  if (content === null) {
    // if it's blank, remove the item
    localStorage.removeItem(rowid);
  } else {
    // else, save the content as the item
    localStorage.setItem(rowid, content);
  }
}

//var containerEl = $("#container")

var currentHour = moment().format("HH");

for (i = dayStart; i <= dayEnd; i++) {
  iHour = moment(i, "HH").format("HH");
  
  var rowEl = $("<div class='row hour-" + i + "'></div>");
  var hourEl = $(
    "<div class='hour-" +
      i +
      " col-sm-1 hour py-3 text-right'>" +
      moment(i, "HH").format("hh a") +
      "</div>"
  );
  var timerEl = $("<div class='hour-"+i+" col-sm-9 time-block'>");
  var currentVal = loadActivity("hour-" + i)
  var displayEl = $("<div class='hour-"+i+"'>")
    .addClass("inputvis")
    .addClass("t-display")
  var pEl = $("<p>")
    .text(currentVal);
  displayEl.append(pEl)
 
 
 // past, present or future logic. 
  if (iHour < currentHour) {
    timerEl.addClass("past");
  } else if (iHour === currentHour) {
    timerEl.addClass("present");
  } else {
    timerEl.addClass("future");
  }
  var inputDiv = $("<div class='hour-" + i + " inputvis t-edit'></div>").attr(
    "style",
    "display:none"
  );
  var inputArea = $("<textarea/>")
    .attr("style", "width:100%")
    .addClass("hour-" + i)
    .addClass("input" + i)
    .val(currentVal);
  inputDiv.append(inputArea);
  timerEl.append(displayEl,inputDiv);

  var saveBtnEl = $(
    "<div class='hour-" + i + " saveBtn py-4 col-sm-2 text-center'>Save</div>"
  );
  rowEl.append(hourEl, timerEl, saveBtnEl);
  $(".container").append(rowEl);
}


$(".time-block").on("click", function(event) {
  event.preventDefault();
  var el = this.className;
  arr = el.split(" ");
  curHours = arr[0];
  $("." + curHours + ".inputvis").toggle();
  if ($("." + curHours + ".inputvis").css("visibility") != "hidden") {
    $("." + curHours + ".inputvis")
      .find("textarea")
      .focus();
  }
});

// saves to localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var el = this.className;
    arr = el.split(" ");
    curHours = arr[0];
    var txtArea = $(
        "textarea." + curHours
    ).val();
    saveActivity(curHours, txtArea);
    $("." + curHours + ".inputvis.t-display"
      ).text(txtArea);
    $("." + curHours + ".inputvis"
      ).toggle();
    });