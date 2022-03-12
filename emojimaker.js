var leftContainer = $('#left-container');
var rightContainer = $('#right-container');
var color = $('.color');
var eyes = $('.eyes');
var mouth = $('.mouth');
var colorDiv =$('#select-color-div');
var eyesDiv =$('#select-eyes-div');
var mouthDiv =$('#select-mouth-div');
var leftSwipe = $('#left-swipe');
var rightSwipe = $('#right-swipe');
var colorId;
var page=0;
color.click(function(e){
    colorId=e.target.id;
    backgroundColor = $("#"+colorId).css("background-color");
    $('#right-container div').addClass("right-emoji");
    $('.right-emoji').css("background-color",backgroundColor);
    page= 1;
    display();
});

eyes.click(function(e){
    eyesId = e.target.id;
    var imgSrc = $('#'+eyesId)[0].src;
    $('#eyes-right').attr("src",imgSrc);
    page=2;
    display();

})

mouth.click(function(e){
    mouthId = e.target.id;
    var imgSrc = $('#'+mouthId)[0].src;
    $('#mouth-right').attr("src",imgSrc);
    page=0;
    display();
})
function mouseHover(){
    console.log("inside over",page);
    if (page===0) {
        $('#right-swipe').css("display","block")
    }
    else if (page===1) {

        $('#left-swipe').css("display","block")
        $('#right-swipe').css("display","block")
    }
    else if (page===2) {
        $('#left-swipe').css("display","block")
    }
}
leftContainer.hover(mouseHover, function(){
    $('#left-swipe').css("display","none")
    $('#right-swipe').css("display","none")
})
leftSwipe.click(function(){
    if(page>0){
    page-=1;}
    display();
    mouseHover();
})
rightSwipe.click(function(){
    if(page<2){
    page+=1;
}
    display();
    mouseHover();
})

function display(){
    if(page === 0){
        console.log(page)
        colorDiv.css("display","flex");
        eyesDiv.css("display","none");
        mouthDiv.css("display","none");
    }
    else if(page === 1){
        colorDiv.css("display","none");
        eyesDiv.css("display","flex");
        mouthDiv.css("display","none");
    }
    else if(page === 2){
        colorDiv.css("display","none");
        eyesDiv.css("display","none");
        mouthDiv.css("display","flex");
    }
    else{
        alert('Invalid move')
    }

}