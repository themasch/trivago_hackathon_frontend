

/**
 * Output the search results (json)
 */
function showResults(json){
	
	var results;
	var where = document.getElementById("js_itemlist"); 

	while (where.hasChildNodes()) {
	    where.removeChild(where.lastChild);
	}
	
	
	var js_hotel_count = document.getElementById("js_hotel_count");
	js_hotel_count.innerHTML=Object.keys(json).length+" Hotels";
	
	
	for(var hoteldata in json.hotels){
		console.log(json[hoteldata]);
		var newLi = document.createElement("li");
		
		newLi.innerHTML+=json[hoteldata];
		
		where.appendChild(newLi);

	}
}





function search(){

	var searchFieldValue = document.getElementById("js_querystring").value;
	var dateFieldFrom = document.getElementById("date_from").innerHTML;
	var dateFieldTo = document.getElementById("date_to").innerHTML;
	
	var getRequestURL = "./test
	/*
	var test={
			  "hotel": "Zur Glocke"
			};
	
	test.location=searchFieldValue;
	test.dateFrom=dateFieldFrom;
	test.dateTo=dateFieldTo;

	console.log("location:"+searchFieldValue+" from:"+dateFieldFrom+" to:"+dateFieldTo);

	*/
	
	loadDataFromTrivago(getRequestURL, showResults);
	
	
	//showResults(test);
}







/**
 * Load data from template
 * @param callBack
 */
function loadDataFromTrivago(url, callBack)
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	  
	var json = JSON.parse(xmlhttp.responseText);
    callBack(json);
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
