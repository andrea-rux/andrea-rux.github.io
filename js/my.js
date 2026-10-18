$(document).ready(function(){

  function fake_hover(id_elemento, viewportHeight, collezioneHeight){
    if(($(id_elemento).offset().top - $(window).scrollTop()) <= (viewportHeight/2 + collezioneHeight/2 + (viewportHeight/100)*2) && ($(id_elemento).offset().top - $(window).scrollTop()) >= (viewportHeight/2 - collezioneHeight/2 - (viewportHeight/100)*2)){
      $(id_elemento).addClass("hover");
      $(id_elemento + "Preview").css("opacity", "1");
      $(id_elemento + "Preview").css("pointer-event", "click");
      if(id_elemento == '#dis') $(id_elemento).css("color", "blue");
    } else {
      $(id_elemento).removeClass("hover");
      if(id_elemento == '#dis') $(id_elemento).css("color", "white");
    }
  }

  var viewportHeight = $(window).height();
  var collezioneHeight = $("#adjango").height();

  $(window).resize(function() {
    viewportHeight = $(window).height();
    collezioneHeight = $("#wip").height();
  });

  $(window).scroll(function() {
    if($(".collezione").hasClass("hover")) $(".previewBox").css("opacity", "0");
    fake_hover('#lotta', viewportHeight, collezioneHeight);
    fake_hover('#adjango', viewportHeight, collezioneHeight);
    fake_hover('#sofia', viewportHeight, collezioneHeight);
    fake_hover('#polifonic', viewportHeight, collezioneHeight);
    fake_hover('#street', viewportHeight, collezioneHeight);
    fake_hover('#hilfordhp5', viewportHeight, collezioneHeight);
    fake_hover('#wip', viewportHeight, collezioneHeight);
  });
  
  $('#titolo').on('click', function(){
    $(this).toggleClass('negative');
    $('#titoloDescription').toggleClass('visible');
  });
  
});