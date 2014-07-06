
/**
 * Output the search results (json)
 */
function showResults(json, location) {

	console.log("location:" + location + json);
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
 * Output the search results on map (json)
 */
function showMap(json, location) {

	var results;
	var where = document.getElementById("js_itemlist");
	
	while (where.hasChildNodes()) {
		where.removeChild(where.lastChild);
	}

	var newLi = document.createElement("li");
	var newDivWrapper = document.createElement("div");
	newDivWrapper.setAttribute("id", "map_canvas");
	newDivWrapper.style.width = "500px";
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

	
	//Add hotel markers
	for ( var hoteldata in json) {
		
		var myLatlng = new google.maps.LatLng(json[hoteldata].lat, json[hoteldata].lon);
		
		var marker = new google.maps.Marker({
			position : myLatlng,
			map : map,
			title : json[hoteldata].name
		});

	}
	
	
	loadDataFromGoogle("Köln", map, callBackCenterMap);
}


function callBackCenterMap(json, map){
	

	console.log(json["results"]);

	var loc = new Object;
	loc.lat= -22;
	loc.lng=151;
	
	map.setCenter(loc, 13);
}


function search() {

	var searchFieldValue = document.getElementById("js_querystring").value;
	var dateFieldFrom = document.getElementById("date_from").innerHTML;
	var dateFieldTo = document.getElementById("date_to").innerHTML;

	var getRequestURL = "./testdata/hotels.json";

	console.log("location:" + searchFieldValue + " from:" + dateFieldFrom
			+ " to:" + dateFieldTo);

	loadDataFromTrivago(getRequestURL, showResults, searchFieldValue);
}

/**
 * Load data from trivago
 * 
 * @param callBack
 */
function loadDataFromTrivago(url, callBack, location) {
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var json = JSON.parse(xmlhttp.responseText);
			callBack(json, location);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}




/**
 * Load data from google api
 * 
 * @param callBack
 */
function loadDataFromGoogle(address, map, callBack) {
	
	var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+address;
	
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var json = JSON.parse(xmlhttp.responseText);
			callBack(json, map);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}






jQuery("#js_itemlist_controls").on("click", function(event) {
	event.preventDefault();
	var searchFieldValue = document.getElementById("js_querystring").value;
	loadDataFromTrivago("./testdata/hotels.json", showMap, searchFieldValue);

});
