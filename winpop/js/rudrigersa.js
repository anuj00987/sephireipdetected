 $(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'img/johnney.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
   
    
    $('#aollonios').click(function() {
        audioElement.play();
        
    });
    
    
});
 $(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'img/kiitto.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);



    $('#aollonios').click(function() {
        audioElement.play();

    });


});

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);


$(document).ready(function() {
    $(".arow-div").delay(1000).fadeIn(500);
});

    $(document).ready(function(){
  $(".delayedPopupWindow").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});
   $(document).ready(function(){
  $(".black").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});

   $(document).ready(function(){
  $("#win1").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});
 $(document).ready(function(){
  $("#win2").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});
  $(document).ready(function(){
  $("alert_popup").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});
$(document).ready(function() {
    $(".delayedPopupWindow").delay(1500).fadeIn(500);
});
 $(document).ready(function() {
    $(".alert_popup").delay(1000).fadeIn(500);
});
  $(document).ready(function() {
    $("#msanko").delay(2000).fadeIn(100);
});


