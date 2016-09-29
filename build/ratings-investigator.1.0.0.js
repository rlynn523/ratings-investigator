/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	$(function () {
	    $('#search').submit(function (event) {
	        event.preventDefault();
	        var searchTerm = $('#query').val().trim();
	        if (searchTerm === '') {
	            alert('Please investigate a series!');
	        } else {
	            getRequest(searchTerm);
	        }
	        newSearch();
	    });
	    function newSearch() {
	        $('#query').val('');
	        $('.seasons').remove();
	    }
	    function resetSearch() {
	        $('#query').val('');
	        $('.title').hide();
	        $('.plot').hide();
	        $('.seasons').remove();
	    }
	    $('#reset').click(resetSearch);
	});
	var getRequest = function getRequest(searchTerm) {
	    var hasData = true;
	    var params = void 0;
	    var url = 'http://www.omdbapi.com/?';
	    var seasonNum = 1;
	    var maxSeason = 30;
	    $('#search-results').show();
	    $('.title').show();
	    $('.plot').show();
	    // div is display: none in css, when user clicks submit, the div will show
	    params = {
	        t: searchTerm,
	        r: 'json'
	    };
	
	    $.getJSON(url, params, function (data) {
	        if (data.imdbRating === undefined) {
	            $('#star-rate').hide();
	            $('.plot').hide();
	            $('.series-title').hide();
	            $('.series-rating').text('Series Not Found!');
	        } else {
	            $('.series-title').show();
	            $('.series-rating').text('Series Rating: ' + data.imdbRating);
	            $('.series-plot').text(data.Plot);
	            $('.title').find('.series-title').text(data.Title);
	            // places the text of the show title to the page
	        }
	    });
	    var seasonResponse = 0;
	    var seasonObject = {};
	    while (hasData && seasonNum < maxSeason) {
	        // run the while loop until we reach maxSeason, or we have data
	        params = {
	            t: searchTerm,
	            Season: seasonNum,
	            r: 'json'
	        };
	        $.getJSON(url, params, function (data) {
	            seasonResponse++;
	            var seasonContent = void 0;
	            if (data.Response == 'False') {
	                // if data is null, then hasData will equal false, thus stopping the while loop.
	                hasData = false;
	                seasonContent = null;
	            } else {
	                // $('.plot').find('.series-plot').text(data.Plot);
	                seasonContent = $('.season-content').clone();
	                // cloning the season-content div and storing in variable
	                seasonContent.find('.season-title').text('Season ' + data.Season);
	                // this shows the correct season number
	                var episode = void 0;
	                for (var i = 0; i < data.Episodes.length; i++) {
	                    episode = data.Episodes[i];
	                    // showResults(episode);
	                    var episodeContent = $('.episode-content').clone();
	                    // cloning the season-content div and storing in variable
	                    episodeContent.find('.episode-title').text('Episode ' + episode.Episode + ':' + ' ' + episode.Title + ', ' + episode.imdbRating);
	                    // changing the value of seasonContent
	                    seasonContent.append(episodeContent.html());
	                    // when you use .html(), you return only a string value
	                }
	            }
	            seasonObject[parseInt(data.Season)] = seasonContent;
	            if (seasonResponse == seasonNum - 1) {
	                for (var key in seasonObject) {
	                    if (!seasonObject[key]) {
	                        continue;
	                    }
	                    $('#search-results').append('<div class ="seasons">' + seasonObject[key].html() + '</div>');
	                }
	            }
	            // all the data, the final commit
	            // seasons append to separate div classes
	        });
	        seasonNum++;
	    }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=ratings-investigator.1.0.0.js.map