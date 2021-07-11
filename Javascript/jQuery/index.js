// adding css styles with jQuery
$("h1").addClass("big-title");

// removing css classes with jQ
// $("h1").removeClass("big-title");

// check if an element has a class
$("h1").hasClass("big-title");

// change text
$(".normal-button").text("dont click me...plweese");

// inner html
$(".normal-button").html("<em>heyyyy</em>");

// chanining attributes
$("img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPClDwJkYkXKkSNOcpElkJ2G6T_N60FmZDQ&usqp=CAU");

$("a").attr("src", "https://google.com");

// addEventListener -> click

// no JQ (click to turn h1 puple)

// for (var i = 0; 1 = 5; i++) {
//     document.querySelectorAll("button")[0].addEventListener("click",
//         function () {
//             document.querySelector("h1").style.color = "purple";
//         });
// }


// no need for a for loop

$("button").click(function () {
    $("h1").css("color", "green");
})

// listen for keypresses

$("input").keypress(function () {
    $("h1").text(event.key);
})

// listen for events using 'on'
$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
})

// making new elements
$("h1").before("<button> before button sponsered by JS</button>");
$("h1").after("<button> after button sponsered by JS</button>");
// to put it just before or after the content of the tag (EX inside h1 before the text)
$("h1").prepend("<button> prepend button sponsered by JS</button>");
$("h1").append("<button> append button sponsered by JS</button>");

// animations

$("h2").on("click", function () {
    $("h1").hide();
});

$("h3").on("click", function () {
    $("h1").show();
});

$("h4").on("click", function () {
    $("h1").toggle();
});

$("h5").on("click", function () {
    $("h1").fadeToggle();
});

$("h6").on("click", function () {
    $("h1").slideToggle();
})

// must have a numeric value
$("h7").on("click", function () {
    $("h1").animate({
        opacity: 0.1
    });
});

$("h8").on("click", function () {
    $("h1").fadeToggle().fadeToggle().slideUp().slideDown().animate({
        opacity: 0.1
    });
})