$(document).ready(function () {
    
    /* My animation */
    $(".myEmail").on("click", function () {
        
        /* $(".email").slideToggle(); */
        $(".email").removeClass("invisible")
        $(".email").css("display", "block");
        $(".email").css({position: 'absolute', left:0, top:182}).animate({ left: '1500px' }); 
        /* $(".email").css({ position: 'float' }).animate({ left: '230px' }); */
        $(".connectMessage").text("Connected")


    });


});