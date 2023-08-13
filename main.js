"use strict";

// hide
$(".hide-btn").click(function () {
  $(".text").hide(2000);
});

// show
$(".show-btn").click(function () {
  $(".text").show(2000);
});

// fade-out
$(".fade-out-btn").click(function () {
  $(".text").fadeOut("slow");
});

// fade-in
$(".fade-in-btn").click(function () {
  $(".text").fadeIn("slow");
});

// add class
$(".add-class-btn").click(function () {
  $(".text").addClass("added-class");
});

// slide down
$(".slide-down-btn").on("click", function () {
  $(".box").slideDown("slow", function () {
    alert("done!");
  });
});

// append
$(".append-btn").click(function () {
  $(".box").append("<span>Appended text</span>");
});

// another append
$(".another-append-btn").click(function () {
  $(".box").append("<span>Appended text</span>");
});

// html
$(".html-btn").click(function () {
  $(".box").html("<span>New text</span>");
});

// text
$(".text-btn").click(function () {
  $(".empty-text").text("Hello world!");
});

// val
$(".val-btn").click(function () {
  $(".text-input").val("Hello World!");
});
