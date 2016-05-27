$(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

  var showResults = function (results) {
  $('#search-results').append('<p>' + "Episode:" + " " + results.Episode + "," + " " + "Title:" + " " + results.Title + "," +  " " + "Rating:" + " " + results.imdbRating + '</p>');
  }
  var getRequest = function (searchTerm) {
    var params; 
    var url = 'http://www.omdbapi.com/?';
    var seasonNum = 3;
    var hasData = true;
  // while(hasData){
    params = {
      t: searchTerm,
      plot: 'short',
      Season: seasonNum,
      r: 'json'
    }; 

    $.getJSON(url, params, function (data) {
      console.log(data);
      var episode 
      for (var i = 0; i < data.Episodes.length; i++) { 
        episode = data.Episodes[i];
        showResults(episode);
      }
    });
  // }
}