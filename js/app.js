var hasData = true;
$(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});
  
var getRequest = function (searchTerm) {
    var params; 
    var url = 'http://www.omdbapi.com/?';
    var seasonNum = 1;
    var maxSeason = 30;
  $("#search-results").show();
  // div is display: none in css, when user clicks submit, the div will show
  	while(hasData && seasonNum < maxSeason){
  	// run the while loop until we reach maxSeason, or we have data
	    params = {
		    t: searchTerm,
		    plot: 'short',
		    Season: seasonNum,
		    r: 'json'
	    }; 

	    $.getJSON(url, params, function (data) {
	    	console.log(data);
	    	if(data.Response == "False"){
	      	console.log(data.Response);
	      	// if data is null, then hasData will equal false, thus stopping the while loop.
	      	hasData = false
	      	return;
	      }

	    $(".title").find(".series-title").text(data.Title);
	      // 
	    $(".plot").find(".series-plot").text(data.imdbRating);
    	var seasonContent = $(".season-content").clone();
	    	// cloning the season-content div and storing in variable
	    seasonContent.find(".season-title").text("Season " + data.Season);

	    var episode 
	    for (var i = 0; i < data.Episodes.length; i++) {
	        episode = data.Episodes[i]; 
	        // showResults(episode);
	        var episodeContent = $(".episode-content").clone();
	     	// cloning the season-content div and storing in variable
	     		episodeContent.find(".episode-title").text("Episode " + episode.Episode + ":" + " " + episode.Title + ", " + "Rating: " + episode.imdbRating);
	      	// changing the value of seasonContent
	      	seasonContent.append(episodeContent.html());
	      	// when you use .html(), you return only a string value
			} 
	      $("#search-results").append(seasonContent.html());
	      // all the data, the final commit
	    });
	    seasonNum++;
  	}
}