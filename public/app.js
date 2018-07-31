'use strict'

let MOCK_DATA = {
  "playerStats": [
  {
    "id": "11111",
    "playerName": "Mookie Betts",
    "stat": "Batting Average",
    "statrank": "1",
    "statNumber": ".339",
  },

  {
    "id": "22222",
    "playerName": "Mike Trout",
    "stat": "Batting Average",
    "statrank": "2",
    "statNumber":".330",
  }  
]

};

function getRecentPlayerUpdates(callbackFn) {
    // we use a `setTimeout` to make this asynchronous
    // as it would be with a real AJAX call.
  setTimeout(function(){ callbackFn(MOCK_DATA)}, 1);
}

function displayPlayerStats(data) {
    for (let index in data.playerStats) {
       $('.js-search-results').append(
        '<p>' + data.playerStats[index].playerName + '</p>');
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplayStats() {
    getRecentPlayerUpdates(displayPlayerStats);
}

$(function() {
    getAndDisplayStats();
});

