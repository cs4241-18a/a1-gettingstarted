function changeMode() {
    var footerImage = document.getElementById("footerImage")
    var isDarkMode = footerImage.getAttribute("value");
    if(isDarkMode == 0) {
        footerImage.setAttribute("value",1);
        document.getElementById("mode").href = "style/dark.css"
        console.log("switch to dark");
    } else {
        footerImage.setAttribute("value",0);
        document.getElementById("mode").href = "style/light.css"
        console.log("switch to light");
    }
}


$(document).ready(function() {
    $("#footerImage").on("click touchstart",function() {
        changeMode();
    });
})