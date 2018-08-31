// Retrieve images from Unsplash API
let request = new XMLHttpRequest();
request.open('GET', 'https://api.unsplash.com/photos/random?client_id=ac378ef2949e144ad716c3eac981a45f6d290ea1e04b6918c55a58b8bad0b45c&orientation=landscape&count=30', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        let images = JSON.parse(request.responseText);

        let galleryContainer = document.querySelector("#image-gallery");
        let columns = galleryContainer.querySelectorAll(".gallery-column");
        console.log("Columns");
        console.log(columns);

        let index = 0;
        // populate image elements with images from API response
        columns.forEach((column) => {
           let columnImages = column.querySelectorAll("img");
           columnImages.forEach((columnImage) => {
               let source = images[index].urls.regular;
               if (source == "https://images.unsplash.com/photo-1503322056338-171bb3538ffb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM1Mjk5fQ&s=c1384ddc407ac61c9eff1e629f1685fa") {
                   source = "https://www.planwallpaper.com/static/images/free-wallpaper-images-nature-24.jpg";
                   console.log("Change image");
               }
               columnImage.src = source;
               index++;
           });
        });
    } else {
        // Reached target server, but it returned an error
        console.log("New images could not be retrieved from the server.")
    }
};

request.onerror = function() {
    // There was a connection error of some sort
    console.log("There was an error connecting to the Unspash server.")
};

request.send();