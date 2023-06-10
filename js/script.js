// Type effect
var typed = new Typed("#element", {
  strings: [
    "very happy to see you here!",
    "Mohammad Hosein Lashani.",
    "<i>a</i> Developer.",
    "a Frontend junior.",
  ],
  typeSpeed: 250,
  loop: true, // Enable infinite loop
});
// END of type effect

// tabs
$(document).ready(function () {
  $("#tabNav1").on("click", function () {
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");
    $(".tab3").removeClass("active");
    $(".tab4").removeClass("active");
  });

  $("#tabNav2").on("click", function () {
    $(".tab2").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab3").removeClass("active");
    $(".tab4").removeClass("active");
  });

  $("#tabNav3").on("click", function () {
    $(".tab3").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab2").removeClass("active");
    $(".tab4").removeClass("active");
  });

  $("#tabNav4").on("click", function () {
    $(".tab4").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab3").removeClass("active");
    $(".tab2").removeClass("active");
  });
});
