$(document).ready(function () {
    $(".tech-green, .tech-red, .tech-yellow").hover(function () {
        $(".tech-experience", this).toggle();
        $(".tech-title", this).toggle();
    });
});