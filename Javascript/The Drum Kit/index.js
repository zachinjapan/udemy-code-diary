var number_of_drum_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < (number_of_drum_buttons); i++) {

    document.querySelectorAll("button")[i].addEventListener("click", clickEvent);

    function clickEvent() {
        alert("I was clicked");
    }
}