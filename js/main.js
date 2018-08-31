var currentPage = 0

function scroll(dir) //Function that moves the page when the user uses arrows to control the page
{
	newPage = currentPage + dir
	if (newPage < 0)
	{
		newPage = 0
	}
	if (newPage >= document.getElementsByClassName("page").length)
	{
		newPage = document.getElementsByClassName("page").length - 1
	}
	
	//Scroll towards the direction of the next id anchor
	document.querySelectorAll('.page')[newPage].scrollIntoView({
	  behavior: 'smooth' 
	});
	
	//Update the current page we are on
	currentPage = newPage
}


//Check for arrow key input
window.onkeydown = function(e) {
	var k = e.key
	
	if (k == "ArrowUp" || k == "ArrowDown")
	{
		e.preventDefault(); //If it is the up or down key, cancel the action and invoke the scroll function
		
		if (k == "ArrowUp")
		{
			scroll(-1)
		}
		else
		{
			scroll(1)
		}
	}
		
}

//Set a cookie to keep track of whether or not to display the popup tip
window.onload = function() {
	x = getCookie("firstTime")
	
	scroll(-10)
	
	if (x.length == 0)
	{
		window.onscroll = function() {
			window.onscroll = undefined
			swal({
			  title: 'Hi there, before you look around...',
			  text: "Try navigating the webpage by using the arrow keys!",
			  showConfirmButton: true,
			  confirmButtonText: 'Got it!',

			  width: 600,
			  padding: '3em',
			  backdrop: `
			    rgba(80,80,123,0.4)
			    url("/images/arrow.gif")
			    center left
			    no-repeat
			  `
			})
		}
		setCookie("firstTime")
	}
}

/* Functions below taken from W3Schools */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}