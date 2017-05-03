var tabcontent = document.getElementsByClassName('tabcontent');
var tablinks = document.getElementsByClassName("tablinks");
console.log(tablinks)


function showContent (e,page) {
	
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(page).style.display = "block";
    e.currentTarget.className += " active";
	
}

