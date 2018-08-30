function changeMode() {
    var isDarkMode = localStorage.getItem("isDarkMode");
    if(isDarkMode == 0) {
        document.getElementById("mode").href = "style/dark.css";
        localStorage.setItem("isDarkMode",1);
        console.log("switch to dark");
    } else {
        document.getElementById("mode").href = "style/light.css";
        localStorage.setItem("isDarkMode",0);
        console.log("switch to light");
    }
}

function initMode() {
    if(localStorage.getItem("isDarkMode") == undefined) {
        localStorage.setItem("isDarkMode",0);
    }
    var isDarkMode = localStorage.getItem("isDarkMode");
    if(isDarkMode == 0) {
        document.getElementById("mode").href = "style/light.css";
    } else {
        document.getElementById("mode").href = "style/dark.css";
    }
}