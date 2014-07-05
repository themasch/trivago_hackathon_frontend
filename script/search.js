

/**
 * Output the search results (json)
 */
function showResults(json, location){
	
	console.log("location:"+location+json);
	var results;
	var where = document.getElementById("js_itemlist"); 

	while (where.hasChildNodes()) {
	    where.removeChild(where.lastChild);
	}
		
	var counter = 0;
	for(var hoteldata in json){
		if (json[hoteldata].location == location){
		
			counter++;
		var newLi = document.createElement("li");
		
		var content = "";
		content += '<b>'+json[hoteldata].name+"</b><br>";
		content +='<div>';
		content +='<img src="'+json[hoteldata].img+'">';
		content += "<i>"+json[hoteldata].preis+"€</i><br>";
		content += "</div>";

		
	console.log(content);
		newLi.innerHTML=content;
		where.appendChild(newLi);
		}

	}
	
	var js_hotel_count = document.getElementById("js_hotel_count");
	js_hotel_count.innerHTML=counter + " Hotels";

}





function search(){

	var searchFieldValue = document.getElementById("js_querystring").value;
	var dateFieldFrom = document.getElementById("date_from").innerHTML;
	var dateFieldTo = document.getElementById("date_to").innerHTML;
	
	var getRequestURL = "./testdata/hotels.json";

	console.log("location:"+searchFieldValue+" from:"+dateFieldFrom+" to:"+dateFieldTo);

	loadDataFromTrivago(getRequestURL, showResults, searchFieldValue);
}







/**
 * Load data from template
 * @param callBack
 */
function loadDataFromTrivago(url, callBack, location)
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
    callBack(json, location);
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
