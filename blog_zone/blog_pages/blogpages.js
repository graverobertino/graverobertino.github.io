$(document).ready(function(){
    $(".btn .play").on('click', function(){
        $(this).hide();
        $(".pause").fadeIn(0);
        $("#track")[0].play();
    });

    $(".btn .pause").on('click', function(){
        $(this).hide();
        $(".play").fadeIn(0);
        $("#track")[0].pause();
    });
});