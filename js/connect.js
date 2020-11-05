$(document).ready(function () {
    
    /* My animation */
    $(".myEmail").on("click", function () {

        /* $(".email").slideToggle(); */
        $(".email").css("display", "block");
        $(".email").css({position: 'absolute', left:0, top:182}).animate({ left: '1500px' }); 
        /* $(".email").css({ position: 'float' }).animate({ left: '230px' }); */
        $(".connectContent h1").text("Connected")


    });

    /* Code for the dropdown menu */
    $(".dropDown").on("click", function () {
        $(".menuItems").slideToggle();
    });

});