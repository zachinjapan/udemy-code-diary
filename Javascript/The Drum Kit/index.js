var number_of_drum_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < (number_of_drum_buttons); i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {

        console.log(this);
        document.querySelector(this).addAttribute(text)

    });

}








// function clickEvent() {
//     var tom_1 = new Audio("sounds/tom-1.mp3");
//     tom_1.play();
// }