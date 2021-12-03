$(document).ready(function() {

    $('#landing').parallax({imageSrc:"images/background.jpg"});
    /* image obtained from https://unsplash.com/photos/NIl1A1hfye4 */
    var myIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("round_bx");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2300); // Change image every 2 seconds
    }

        
});