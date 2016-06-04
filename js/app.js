
$(function(){
  $("#search").submit(function(event){
    event.preventDefault();
    var searchTerm = $("#query").val();
    if(searchTerm === "") {
    	alert("Please investigate a series!");
    } else {
    	getRequest(searchTerm);
    }
  })
  function resetSearch() {
  	$("#query").val("");
  	$(".title").hide();
  	$(".plot").hide();
  	$(".seasons").remove();
  }
  $("#reset").click(function(){
  	resetSearch();
  })
});
var getRequest = function (searchTerm) {
	var hasData = true;
    var params; 
    var url = 'http://www.omdbapi.com/?';
    var seasonNum = 1;
    var maxSeason = 30;
  $("#search-results").show();
  $(".title").show();
  $(".plot").show();
  // div is display: none in css, when user clicks submit, the div will show
  		params = {
		    t: searchTerm,
		    r: 'json'
	    }; 

	    $.getJSON(url, params, function (data) {
	    	console.log(data);
		    if (data.imdbRating === undefined) {
		    	$("#star-rate").hide();
		    	$(".plot").hide();
		    	$(".series-title").hide();
    			$(".series-rating").text("Series Not Found!");
   			} else {
   				$(".series-title").show();
   				$(".series-rating").text("Series Rating: " + data.imdbRating); 
	  			$(".series-plot").text(data.Plot); 	
	  			$(".title").find(".series-title").text(data.Title);
		      	// places the text of the show title to the page
   			}
	   	})
  	while(hasData && seasonNum < maxSeason){
  	// run the while loop until we reach maxSeason, or we have data
	    params = {
		    t: searchTerm,
		    Season: seasonNum,
		    r: 'json'
	    };
	    $.getJSON(url, params, function (data) {
	    	if(data.Response == "False"){
	      	// if data is null, then hasData will equal false, thus stopping the while loop.
	      	hasData = false
	      	return;
	    	}
		    // $(".plot").find(".series-plot").text(data.Plot);
	    	var seasonContent = $(".season-content").clone();
		    // cloning the season-content div and storing in variable
		    seasonContent.find(".season-title").text("Season " + data.Season);
		    // this shows the correct season number
		    var episode 
		    for (var i = 0; i < data.Episodes.length; i++) {
		        episode = data.Episodes[i]; 
		        // showResults(episode);
		        var episodeContent = $(".episode-content").clone();
		     	// cloning the season-content div and storing in variable
		     	episodeContent.find(".episode-title").text("Episode " + episode.Episode + ":" + " " + episode.Title + ", " + episode.imdbRating);
		      	// changing the value of seasonContent
		      	seasonContent.append(episodeContent.html());
		      	// when you use .html(), you return only a string value
				} 
	    $("#search-results").append("<div class ='seasons'>" + seasonContent.html() + "</div>");
	    // all the data, the final commit
	    // seasons append to separate div classes
	    });
	    seasonNum++;
  	}
}