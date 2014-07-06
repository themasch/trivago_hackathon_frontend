/**
 * Output the search results (json)
 */
function showResults(json, location) {

	var results;
	var where = document.getElementById("js_itemlist");

	while (where.hasChildNodes()) {
		where.removeChild(where.lastChild);
	}

	var counter = 0;
	for ( var hoteldata in json) {
		if (json[hoteldata].location == location) {

			counter++;
			var newLi = document.createElement("li");
			newLi.setAttribute("class",
					"hotel item bookmarkable historisable active");

			var newDivWrapper = document.createElement("div");
			newDivWrapper.setAttribute("class", "cf item_wrapper");

			var newDiv = document.createElement("div");
			newDiv.setAttribute("class", "item_image");
			newDiv.innerHTML = '<img src="' + json[hoteldata].img + '">';
			newDivWrapper.appendChild(newDiv);

			var newDiv2 = document.createElement("div");
			newDiv2.setAttribute("class", "item_prices");
			var content = "";
			content += '<h3  class="jsheadline">' + json[hoteldata].name
					+ "</h3>";
			content += '<p style="float:right;">' + json[hoteldata].preis
					+ "€</p>";
			newDiv2.innerHTML = content;
			newDivWrapper.appendChild(newDiv2);

			newLi.appendChild(newDivWrapper);

			where.appendChild(newLi);
		}

	}

	var js_hotel_count = document.getElementById("js_hotel_count");
	js_hotel_count.innerHTML = counter + " Hotels";

}

/**
 * Output the search results with google maps (json)
 */
function showMap(json, location, events) {

	var results;
	var where = document.getElementById("js_itemlist");

	while (where.hasChildNodes()) {
		where.removeChild(where.lastChild);
	}

	var newLi = document.createElement("li");
	var newDivWrapper = document.createElement("div");
	newDivWrapper.setAttribute("id", "map_canvas");
	newDivWrapper.style.width = "600px";
	newDivWrapper.style.height = "500px";

	newDivWrapper.innerHTML = "Loading...";

	newLi.appendChild(newDivWrapper);

	where.appendChild(newLi);

	var myLatlng = new google.maps.LatLng(50, 6);

	var mapOptions = {
		zoom : 7,
		center : myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map_canvas'),
			mapOptions);

	var minLat = 0;
	var minLng = 0;
	var maxLat = 0;
	var maxLng = 0;

	// Add hotel markers
	for ( var hoteldata in json) {

		if (json[hoteldata].location == location) {
			var myLatlng = new google.maps.LatLng(json[hoteldata].lat,
					json[hoteldata].lon);

			var marker = new google.maps.Marker({
				position : myLatlng,
				map : map,
				title : json[hoteldata].name
			});
			if (minLat > json[hoteldata].lat)
				minLat = json[hoteldata].lat;
			if (minLng > json[hoteldata].lng)
				minLng = json[hoteldata].lng;

			if (maxLat < json[hoteldata].lat)
				maxLat = json[hoteldata].lat;
			if (maxLng > json[hoteldata].lng)
				maxLng = json[hoteldata].lng;

		}
	}

	var address = encodeURIComponent(location);
	$.getJSON(
			'https://maps.googleapis.com/maps/api/geocode/json?address='
					+ address).done(function(json) {
		var loc = json["results"][0]["geometry"]["location"];
		map.setCenter(loc, 11);

		/*
		 * var southWest = new google.maps.LatLng(minLat, minLng); var northEast =
		 * new google.maps.LatLng(maxLat, maxLng); var bounds = new
		 * google.maps.LatLngBounds(southWest,northEast); map.fitBounds(bounds);
		 */
		map.setZoom(12);

	}).fail(function() {
		console.log('Cannot load lat and lng data from google.?');
	})

}

function callBackCenterMap(json, map) {

	console.log(json);
	console.log("Wo:" + json["results"][0]["geometry"]["location"]["lat"]);

	var loc = json["results"][0]["geometry"]["location"];

	map.setCenter(loc, 11);
}

function searchHotels(searchFieldValue, dateFieldFrom, dateFieldTo) {

	var getRequestURL = "./testdata/hotels.json";

	var address = encodeURIComponent(location);
	$.getJSON(getRequestURL).done(function(json) {
		showResults(json, searchFieldValue);
	}).fail(function() {
		console.log('Cannot load lat and lng data from trivago database?');
	})
}

/**
 * Load data from trivago
 * 
 * @param callBack
 */
function loadDataFromTrivago(url, callBack, location) {

	//var address = encodeURIComponent(url);
	$.getJSON(url).done(function(json) {
		callBack(json, location, "");
	}).fail(function() {
		console.log('Cannot load data from trivago database?');
	})
	
	
}



/**
 * Click on Karte button
 */
jQuery("#js_itemlist_controls").on("click", function(event) {
	event.preventDefault();
	var searchFieldValue = document.getElementById("js_querystring").value;
	loadDataFromTrivago("./testdata/hotels.json", showMap, searchFieldValue);
});


/**
 * Click on Search button
 */
jQuery("#js_go").on("click", function(event) {
	event.preventDefault();
	var searchFieldValue = document.getElementById("js_querystring").value;
	var dateFieldFrom = document.getElementById("date_from").innerHTML;
	var dateFieldTo = document.getElementById("date_to").innerHTML;
	
	searchHotels(searchFieldValue, dateFieldFrom, dateFieldTo);

});

