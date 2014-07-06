var hotelTemplate = ''+
'<li class="hotel item bookmarkable historisable " id="js_item_52546" data-path="15481" data-item="52546" data-alternative="0">' +
    '<div class="cf item_wrapper">' +
        '<div class="item_image ">' +
            '<img class="js_slideout_trigger" src="{{img}}" data-slideout="gallery-52546">' +
                '<a class="img_sprite_moon bookmark" title="zu Favoriten hinzufügen" data-addtext="zu Favoriten hinzufügen" data-remtext="Aus Favoritenliste löschen">+</a>' +
            '<div id="js_button_gallery_52546" class="gallery js_slideout_trigger" data-slideout="gallery-52546" title="" style="display: none;">' +
                '<span class="img_sprite_moon gallery_icon"><!-- --></span>' +
            '</div>' +
        '</div>' +
        '<div class="item_prices">' +
            '<h3 id="jsheadline_52546" title="{{name}}" class="jsheadline js_slideout_trigger js_trackable" data-slideout="deals-52546">' +
                '{{name}}' +
            '</h3>' +
            '<div class="item_main">' +
                '<div class="item_category cf">' +
                    '<span class="img_sprite_moon stars cat4">4</span>' +
                    '<span class="img_sprite_moon superior" title="superior">S</span>' +
                    '<div class="city hidden_phone ">' +
                        '<div class="city_link " data-ipathid="15481">' +
                            '<span class="img_sprite_moon city_icon"></span>' +
                            '<span>{{location}}</span>' +
                        '</div>' +
                    '</div>' +
                '</div>' +

                '<ul class="hotel_prices hidden_phone ">' +
                    '<li class="single_price price js_cClickoutLink" onclick="window.Clickout.shortClick(this, false);" data-bucket="22" data-link="aHR0cDovL3d3dy50cml2YWdvLmRlL2ZvcndhcmQucGhwP3B0PTgwMDEmdHlwZT03JnJlZj02MjYmaTJwPTMxNTcxNTkyJmdyb3VwPTYyNiZwYXRoPTE1NDgxJml0ZW09NTI1NDYmYXJyaXZhbD0yMDE0MDcyNyZkZXBhcnR1cmU9MjAxNDA3Mjgmcm9vbV90eXBlPTcmcG9zaXRpb249MS4yJmJ1Y2tldD0yMiZyYXRlX2tleT1fLTE1NTg2MTY0NjImcGFnZT0zMDAwJmlTb3VyY2U9NyZzSXRlbVNhbXBsZT0maGFzX3ByaWNlPTEmaVByaWNlPTY1NDImc2RrPVBMRDMlM0Fic2JwcW04Y2FvOW40bHZ0cnY4bG1udWdwNCUzQTE1NDgxJTJDMjElMkMyMiUyQzElMkMyJTJDMCUzQTQyJnNMYW5ndWFnZUxvY2FsZT1ERQ==" data-partner="626" data-item="52546" data-alternative="0"><em>Booking.com</em><strong>65€</strong></li>' +
                    '<li class="even single_price price js_cClickoutLink " onclick="window.Clickout.shortClick(this, false);" data-bucket="5" data-link="aHR0cDovL3d3dy50cml2YWdvLmRlL2ZvcndhcmQucGhwP3B0PTgwMDEmdHlwZT03JnJlZj0xNSZpMnA9NDQ3NzM3Jmdyb3VwPTE1JnBhdGg9MTU0ODEmaXRlbT01MjU0NiZhcnJpdmFsPTIwMTQwNzI3JmRlcGFydHVyZT0yMDE0MDcyOCZyb29tX3R5cGU9NyZwb3NpdGlvbj0xLjMmYnVja2V0PTUmcmF0ZV9rZXk9Xy0xJnBhZ2U9MzAwMCZpU291cmNlPTcmc0l0ZW1TYW1wbGU9Jmhhc19wcmljZT0xJmlQcmljZT02NTQyJnNkaz1QTEQzJTNBYnNicHFtOGNhbzluNGx2dHJ2OGxtbnVncDQlM0ExNTQ4MSUyQzIxJTJDMjIlMkMxJTJDMiUyQzAlM0E0MiZzTGFuZ3VhZ2VMb2NhbGU9REU=" data-partner="15" data-item="52546" data-alternative="0"><em>HRS</em><strong>65€</strong></li>' +
                    '<li class="single_price price js_cClickoutLink " onclick="window.Clickout.shortClick(this, false);" data-bucket="1" data-link="aHR0cDovL3d3dy50cml2YWdvLmRlL2ZvcndhcmQucGhwP3B0PTgwMDEmdHlwZT03JnJlZj00NTImaTJwPTIwMDE5NTk2Jmdyb3VwPTQ1MiZwYXRoPTE1NDgxJml0ZW09NTI1NDYmYXJyaXZhbD0yMDE0MDcyNyZkZXBhcnR1cmU9MjAxNDA3Mjgmcm9vbV90eXBlPTcmcG9zaXRpb249MS40JmJ1Y2tldD0xJnJhdGVfa2V5PV8tMzg0MDA3NzQwJnBhZ2U9MzAwMCZpU291cmNlPTcmc0l0ZW1TYW1wbGU9Jmhhc19wcmljZT0xJmlQcmljZT02NTQxJnNkaz1QTEQzJTNBYnNicHFtOGNhbzluNGx2dHJ2OGxtbnVncDQlM0ExNTQ4MSUyQzIxJTJDMjIlMkMxJTJDMiUyQzAlM0E0MiZzTGFuZ3VhZ2VMb2NhbGU9REU=" data-partner="452" data-item="52546" data-alternative="0"><em>Hotels.com</em><strong>65€</strong></li>' +
                    '<li class="even single_price price js_cClickoutLink " onclick="window.Clickout.shortClick(this, false);" data-bucket="10" data-link="aHR0cDovL3d3dy50cml2YWdvLmRlL2ZvcndhcmQucGhwP3B0PTgwMDEmdHlwZT03JnJlZj04MDgmaTJwPTQ1MzYyNzAwJmdyb3VwPTgwOCZwYXRoPTE1NDgxJml0ZW09NTI1NDYmYXJyaXZhbD0yMDE0MDcyNyZkZXBhcnR1cmU9MjAxNDA3Mjgmcm9vbV90eXBlPTcmcG9zaXRpb249MS41JmJ1Y2tldD0xMCZyYXRlX2tleT1fLTEmcGFnZT0zMDAwJmlTb3VyY2U9NyZzSXRlbVNhbXBsZT0maGFzX3ByaWNlPTEmaVByaWNlPTY2MDAmc2RrPVBMRDMlM0Fic2JwcW04Y2FvOW40bHZ0cnY4bG1udWdwNCUzQTE1NDgxJTJDMjElMkMyMiUyQzElMkMyJTJDMCUzQTQyJnNMYW5ndWFnZUxvY2FsZT1ERQ==" data-partner="808" data-item="52546" data-alternative="0"><em>ab-in-den-urlaub</em><strong>66€</strong></li>' +
                    '<li class="last single_price price js_cClickoutLink " onclick="window.Clickout.shortClick(this, false);" data-bucket="3" data-link="aHR0cDovL3d3dy50cml2YWdvLmRlL2ZvcndhcmQucGhwP3B0PTgwMDEmdHlwZT03JnJlZj04MiZpMnA9Nzc5ODM3MSZncm91cD04MiZwYXRoPTE1NDgxJml0ZW09NTI1NDYmYXJyaXZhbD0yMDE0MDcyNyZkZXBhcnR1cmU9MjAxNDA3Mjgmcm9vbV90eXBlPTcmcG9zaXRpb249MS42JmJ1Y2tldD0zJnJhdGVfa2V5PV8tMzE5MTUzMDcwJnBhZ2U9MzAwMCZpU291cmNlPTcmc0l0ZW1TYW1wbGU9Jmhhc19wcmljZT0xJmlQcmljZT03MzI5JnNkaz1QTEQzJTNBYnNicHFtOGNhbzluNGx2dHJ2OGxtbnVncDQlM0ExNTQ4MSUyQzIxJTJDMjIlMkMxJTJDMiUyQzAlM0E0MiZzTGFuZ3VhZ2VMb2NhbGU9REU=" data-partner="82" data-item="52546" data-alternative="0"><em>otel.com</em><strong>73€</strong></li>' +
                    '<li class="even last single_price price js_cClickoutLink max_price" onclick="window.Clickout.shortClick(this, false);" data-bucket="0" data-link="aHR0cDovL3d3dy50cml2YWdvLmRlL2ZvcndhcmQucGhwP3B0PTgwMDEmdHlwZT03JnJlZj04MzAmaTJwPTM5NDYwNTkyJmdyb3VwPTgzMCZwYXRoPTE1NDgxJml0ZW09NTI1NDYmYXJyaXZhbD0yMDE0MDcyNyZkZXBhcnR1cmU9MjAxNDA3Mjgmcm9vbV90eXBlPTcmcG9zaXRpb249MS43JmJ1Y2tldD0wJnJhdGVfa2V5PV8xNjkwODAwOTU4JnBhZ2U9MzAwMCZpU291cmNlPTcmc0l0ZW1TYW1wbGU9Jmhhc19wcmljZT0xJmlQcmljZT04NjAwJnNkaz1QTEQzJTNBYnNicHFtOGNhbzluNGx2dHJ2OGxtbnVncDQlM0ExNTQ4MSUyQzIxJTJDMjIlMkMxJTJDMiUyQzAlM0E0MiZzTGFuZ3VhZ2VMb2NhbGU9REU=" data-partner="830" data-item="52546" data-alternative="0"><em>Amoma.com</em><strong>86€</strong></li>' +
                '</ul>' +
                '<ul class="item_nav cf">' +
                    '<li class="rating js_slideout_trigger val_4 button standard" id="js_button_rating_52546" data-slideout="rating-52546" data-mysteryguest="1" title="1053 Bewertungen von {{name}}"><strong>78</strong><span class="img_sprite_moon rating_smiley rating4"><!-- --></span><span class="hotel_tester_icon img_sprite_moon hidden_phone"><span class="hotel_tester_tooltip"><span class="hotel_tester_tooltip_text">Getestet</span></span></span></li>' +
                    '<li data-slideout="map-52546" id="js_button_map_52546" class="distance map js_slideout_trigger button standard" title="Entfernung vom Stadtzentrum zum {{name}}"><strong>7,2</strong><span>km</span></li>' +
                    '<li class="info js_slideout_trigger button standard last" data-slideout="info-52546" id="js_button_info_52546" title="Informationen über {{name}}"><span class="img_sprite_moon hotel_info"><!-- --></span><span class="hidden_phone">Info</span></li>' +
                    '<li class="available_on deals js_slideout_trigger button standard all_prices" id="js_button_deals_52546" data-slideout="deals-52546" title="Alle verfügbaren Angebote"><span class="label">Alle Angebote <i>von 12 Webseiten</i></span></li>' +
                '</ul>' +
            '</div>' +
            '<div onclick="window.Clickout.shortClick(this, false);" data-link="aHR0cDovL3d3dy50cml2YWdvLmRlL2ZvcndhcmQucGhwP3B0PTgwMDEmdHlwZT0xJnJlZj00MDYmaTJwPTE4NDA0Nzc0Jmdyb3VwPTQwNiZwYXRoPTE1NDgxJml0ZW09NTI1NDYmYXJyaXZhbD0yMDE0MDcyNyZkZXBhcnR1cmU9MjAxNDA3Mjgmcm9vbV90eXBlPTcmcG9zaXRpb249MS4xJmJ1Y2tldD0xOCZyYXRlX2tleT1fNDA2JnBhZ2U9MzAwMCZpU291cmNlPTEmc0l0ZW1TYW1wbGU9Jmhhc19wcmljZT0xJmlQcmljZT02NTQxJnNkaz1QTEQzJTNBYnNicHFtOGNhbzluNGx2dHJ2OGxtbnVncDQlM0ExNTQ4MSUyQzIxJTJDMjIlMkMxJTJDMiUyQzAlM0E0MiZzTGFuZ3VhZ2VMb2NhbGU9REU=" data-bucket="18" data-partner="406" data-item="52546" data-alternative="0" class="item_bestprice js_cClickoutLink reduced">' +
                '<span class="saving saving_20"><!----></span>' +
                '<strong class="partner_name">Expedia</strong>' +
                '<div class="price_max">' +
                    '<span class="wrapper"><span class="price "><del>86€</del></span></span>' +
                '</div>' +
                '<strong class=" price_min "> {{preis}}€ </strong>' +
                '<button class="button deal" type="button"><span class="label "> zum Angebot </span>' +
                '<span class="img_sprite_moon arrow_right"><!----></span></button>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '<div class="slideout_wrapper collapsed closed" id="js_slideout_52546" data-routing.deals="{&quot;sSearchId&quot;:52546,&quot;sItemIds&quot;:52546}">' +
        '<div id="i_52546" class="slideout_control">' +
            '<span class="js_shareLink sharing_menu">' +
                '<span class="sharing_icon"><!-- --></span>' +
                '<span class="shareLink_Text">Teilen</span>' +
                '<span class="img_sprite_moon arrow_down"><!-- --></span>' +
            '</span>' +
            '<span class="close_wrapper slideout_close"><span class="img_sprite_moon close_icon_black"><!----></span></span>' +
        '</div>' +

        '<div class="slideout_content_container">' +
            '<div class="slideout_content deals persistent active" id="js_deals_52546" data-type="deals" data-item="52546"></div>' +
        '</div>' +
    '</div>' +
    '<div class="slideout_expand_shadow"><!-- --></div>' +
    '<div class="slideout_expand_button">' +
        '<span class="label_more">mehr</span>' +
        '<span class="label_close">schließen</span>' +
        '<span class="img_sprite_moon"></span>' +
    '</div>' +
'</li>';

var hotelTplFunc = Handlebars.compile(hotelTemplate);

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
			var newLi = $(hotelTplFunc(json[hoteldata]))[0]
			where.appendChild(newLi);
		}

	}

	var js_hotel_count = document.getElementById("js_hotel_count");
	js_hotel_count.innerHTML = counter + " Hotels";
	$('#js_pricesearch_transparency').hide()
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

