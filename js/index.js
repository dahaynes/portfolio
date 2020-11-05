$(".dropDown").on("click", function () {
    console.log("dropdown");
});


$(document).ready(function () {

    console.log("dropdown");

    $(".dropDown").on("click", function () {
        console.log("CLICK");
        $(".menuItems").slideToggle();
    });

});
