//if on the one of the function are one it set the style value to block or else none so can be hidden

function showMenu() {
    var x = document.getElementById("responsive_nav");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}