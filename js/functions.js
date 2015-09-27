var randomize = function() {

	var w = window.innerWidth;
	var h = window.innerHeight;
	document.getElementById("img").style.height = h + "px";
	$(".filler-text").css("color",chooseRandom(colors));
	// document.getElementById("text").style.height = h-25 + "px";

	$.ajax({
	  	url: "https://api.artsy.net:443/api/search?q=" + chooseRandom(artists),
	  	headers: {'X-Xapp-Token':api_token},
	  	success: function(e) {
	  		html = "<img class='img' src='";
	  		html1 = "' />"
	  		artist = e
	  		link_list = artist._embedded.results;
	  		art = chooseRandom(link_list)
	  		link = art._links.thumbnail.href
	  		$(".img").html(html + link + html1);
	  		$(".title").html(art.title);
	  		$(".description").html(art.description);
	  	}
	});

	$("#filler1").html(chooseRandom(filler1))
	$("#filler2").html(chooseRandom(filler2))
	
}

var api_token = "JvTPWe4WsQO-xqX6Bts49sYSoxGdNEnOVU-GxPhDqHnGPMFSOa7Xhop8l-7DN7hOYAsq1lPD2uP1EBIs9sizM28Rerz_IBi862CVS69Nm3Q9t6nz5H-I8NzpOtkc5AV6I1tL8KpWNxQZ_ElrDzBIOad4OivamsImqsT0C9L5PH28BsEU5JZdYVnUmjxqnvYi1fuJTshponDc-N17h7JJdsvbynMgh24zbqesCzqRU2I=";

var chooseRandom = function(list) {
	index = Math.floor(Math.random() * list.length)
	return list[index]
}