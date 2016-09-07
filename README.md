# TV Ratings Investigator
##Link
http://rlynn523.github.io/ratings-investigator/build/
##Table of Contents
<li><a href='#purpose'>Purpose</a></li>
<li><a href='#use'>Use</a></li>
<li><a href='#tech-used'>Tech Used</a></li>
<li><a href='#what-does-the-future-hold'>What Does The Future Hold?</a></li>
##Purpose
I created this app because of my love of great television. I would often find myself surfing IMDB.com to look up a show I had hear was worth watching in order to get the overall series rating. If the series was rated well, I would give it a shot. If the series was rated poorly, I would dismiss it. However, once I was invested in a show, I would return to IMDB.com and look at the individual episode ratings to see how my own opinion matched up with critics and other television enthusiasts. I noticed that when I would search a series, I would have to go to separarte pages according to season in order to view the episode ratings from that particular season. I decided that I would create my own app that was tailored to my own interest in series and episode ratings. In my app, you can search for a television series and recieve the overall series rating and a div containing each season/episode title and rating from that season all on the same page!
##Use
### Landing page
<img src='https://github.com/rlynn523/ratings-investigator/blob/master/images/homescreen.png?raw=true' width='500'>
<img src='https://github.com/rlynn523/ratings-investigator/blob/master/images/mobile-home.png?raw=true' height='400'>

User can search for any television series.

<img src='https://github.com/rlynn523/ratings-investigator/blob/master/images/main.png?raw=true' width='500'>
<img src='https://github.com/rlynn523/ratings-investigator/blob/master/images/mobile-plot.png?raw=true' height='400'>

Once the user has searched for a series, a div will appear containg the following: 
<li>Name of the series</li>
<li>Overall series rating</li>
<li>A brief synopsis of the series</li>

<img src='https://github.com/rlynn523/ratings-investigator/blob/master/images/divs.png?raw=true' width='500'>
<img src='https://github.com/rlynn523/ratings-investigator/blob/master/images/mobile-div.png?raw=true' height='400'>

Under the main series div, there will be multiple divs appended to the page. The number of divs is equal to the number of seasons the show currently has or had during its run. Each of the divs contain the following information: 
<li>The season number</li>
<li>A list of all episodes for that particular season</li>
<li>Each episode has an episode number, title, and episode rating </li>

##Tech Used
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>jQuery</li>
  <li>OMDb API</li>
  <li>webpack</li>
  <li>npm</li>
  <li>LESS</li>
</ul>
##What Does The Future Hold?
One feature I plan to implement in the near future is having the "season" divs appear as accordian-style containers, so the user can toggle each season to show the episodes. 
Another feature I plan to implemenet is allowing the user to click an episode and have a brief episode summary appear. 
