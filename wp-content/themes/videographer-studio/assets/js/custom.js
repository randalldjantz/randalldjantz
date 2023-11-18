function videographer_studio_menu_open() {
  jQuery(".sidenav").addClass('open');
}
function videographer_studio_menu_close() {
  jQuery(".sidenav").removeClass('open');
}

jQuery(function($){
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
      $('#return-to-top').fadeIn(200);
    } else {
      $('#return-to-top').fadeOut(200);
    }
  });
  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 500);
  });
});

jQuery(function($){
  $(window).load(function() {
    $(".loader").delay(2000).fadeOut("slow");
  })
});

jQuery(window).scroll(function() {
  var data_sticky = jQuery('.headerbox').attr('data-sticky');

  if (data_sticky == "true") {
    if (jQuery(this).scrollTop() > 1){
      jQuery('.headerbox').addClass("stick_head");
    } else {
      jQuery('.headerbox').removeClass("stick_head");
    }
  }
});

function videographer_studio_text_copyied() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}