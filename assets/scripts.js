//moment Js day display at top of page
var currentDayEl = $("#currentDay").text(moment().format("dddd, MMMM Do"));

// day starts at 8am for work prep.
var dayStart = 8;
var endDay = 17;

function loadAct(rowid) {
    return localStorage.getItem(rowid);
}


function saveAct(rowid, content) {
    if (content === null) {
        localStorage.removeItem(rowid);
    }else {
        localStorage.setItem(rowid, content);
    }
}