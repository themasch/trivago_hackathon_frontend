

/**
 * Output the search results
 */
function showResults(json){
	
	var results;
	var where = document.getElementById("js_itemlist"); 

	var js_hotel_count = document.getElementById("js_hotel_count");
	js_hotel_count.innerHTML=Object.keys(json).length+" Hotels";
	
	
	for(var hoteldata in json){
		console.log(json[hoteldata]);
		var newLi = document.createElement("li");
		
		newLi.setAttribute('class','hotel item bookmarkable historisable');
		
		newLi.innerHTML+=json[hoteldata];
		
		where.appendChild(newLi);

	}
	
	
}


function search(){

	var searchFieldValue = document.getElementById("js_querystring").value;
	var dateFieldFrom = document.getElementById("date_from").innerHTML;
	var dateFieldTo = document.getElementById("date_to").innerHTML;
	
	
	
	var test={
			  "hotel": "Zur Glocke"
			};
	
	test.location=searchFieldValue;
	test.dateFrom=dateFieldFrom;
	test.dateTo=dateFieldTo;

	console.log("location:"+searchFieldValue+" from:"+dateFieldFrom+" to:"+dateFieldTo);

	showResults(test);
}
