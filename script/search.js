

/**
 * Output the search results
 */
function showResults(){
	
	var results;
	var where = document.getElementById("itemlist hotellist grou"); 

	for(var q=0; q<10;q++){
		var newLi = document.createElement("li");
		
		newLi.setAttribute('class','hotel item bookmarkable historisable');
		
		newLi.innerHTML("HOTEL A");
		
		newLi.appendChild(newDiv);

		where.appendChild(newLi);

	}
	
	var newP = document.createElement("li");
	newP.setAttribute('class','hotel item bookmarkable historisable');
	newP.setAttribute('id','XXXXXX');
	
	where.appendChild(newP);
	
}