'use strict'
const SPORTRADAR_SEARCH_URL = "https://api.sportradar.us/mlb-"

function getDataFromApi(searchTerm, callback) {
 const settings = {
    url: SPORTRADAR_SEARCH_URL,
    data: {
      access_level: 't',
      version: 6,
      seasontd: 'seasontd',
      season_year: 2018,
      mlb_season: 'REG',
      your_api_key: 'jm9frdbhpz26zspgamqj394d',
      q: `${searchTerm}`,
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };

  $.ajax(settings);
}

function handleSearchRestart() {
 $('.js-menu').on('click', '.js-restart-search', function(event) {
    $('.js-search-results, .js-selected-artist').empty();
  });
}

function renderResult(result) {
  return `
  <h4>Player: ${hitting.batting_average.players}</h4></br>
  <div class ="accordion">
  </div>
  `;
}

function renderSearchResult(result) {
return `
<div class="search-result">
  <p> Your Selection:</br><span class="result-name">${result.Name}</span></p>

  <p class="result-description">Based on your selection, here are your recommendations:</p>
</div>`
}

function displayPlayerSearchData(data) {
  const results = data.season.leagues.hitting.map((item, index) => renderResult(item));
  if (results.length != 0) {
    $('.js-search-results').html(results);
  }

  else {
     $('.js-search-results').html("<p> Sorry! No Results Found. Please Search Again.</p>");
  }  
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromAPI(query, displayPLayerSearchData);
  });
}

function createApp() {
  watchSubmit();
  handleSearchRestart();
}

$( function() {

  createApp();
});