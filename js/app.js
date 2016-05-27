$(function(){
  var show = {
    seasons: [ 
      { seasonOne: [
          episodeOne = {
            Episode: 1,
            Title: "Winter Is Coming",
            Rating: 8.9
          },
          episodeTwo = {
            Episode: 2,
            Title: "The Kingsroad",
            Rating: 8.7
          },
          episodeThree = {
            Episode: 3,
            Title: "Lord Snow",
            Rating: 8.6
          }
        ]
      },
      {
        seasonTwo: [
          episodeOne = {
            Episode: 1,
            Title: "The North Remembers",
            Rating: 8.7
          },
          episodeTwo = {
            Episode: 2,
            Title: "The Night Lands",
            Rating: 8.4
          },
          episodeThree = {
            Episode: 3,
            Title: "What Is Dead May Never Die",
            Rating: 8.7
          }
        ]
      }
    ]
  }
  console.log(show);
  $('#search').submit(function (event) {
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