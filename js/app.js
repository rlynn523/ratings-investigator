$(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});


function showResults(results){
    $.each(results, function(data, value){
      $('#search-results').append('<p>' + "Episode:" + " " + results.Episode + "," + " " + "Title:" + " " + results.Title + "," +  " " + "Rating:" + " " + results.imdbRating + '</p>');
    })
  }

function getRequest(searchTerm){
  // figure out a way to display all possible seasons
  var seasonNum = 1
  var params = {
    t: searchTerm,
    plot: 'short',
    Season: seasonNum,
    r: 'json'
  };

  url = 'http://www.omdbapi.com/?'
  $.getJSON(url, params, function(data){
    for (var i = 0; i < data.Episodes.length; i++){ 
    var episode = data.Episodes[i];
    showResults(episode);
    }
  });

}