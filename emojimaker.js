var rightContainer = $('#right-container');
var color = $('.color');
var colorId;

color.click(function(e){
    colorId=e.target.id;
    backgroundColor = $("#"+colorId).css("background-color");
    $('#right-container div').addClass("right-emoji");
    $('.right-emoji').css("background-color",backgroundColor);
});

