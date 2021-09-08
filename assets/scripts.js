//moment Js day display at top of page
var currentDayEl = $("#currentDay").text(moment().format("dddd, MMMM Do"));

// day starts at 8am for work prep.
var dayStart = 8;
var dayEnd= 17;

function loadAct(rowid) {
    return localStorage.getItem(rowid);
};


function saveAct(rowid, content) {
    if (content === null) {
        localStorage.removeItem(rowid);
    }else {
        localStorage.setItem(rowid, content);
    }
};


var currentHour = moment().format("HH");

for (i = dayStart; i <= dayEnd; i++) {
    iHour = moment(i, "HH").format("HH");
    
    var activityEl = $("<div class='row hour-" + i + "'></div>");

    var hourEl = $("<div class='hour-" + i + "col-sm-1 hour py-3 text-right'>" +
    moment(i, "HH").format("hh a") + "</div>"
    );
}
