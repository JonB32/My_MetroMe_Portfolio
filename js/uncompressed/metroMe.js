

$(document).ready(function() {
  
  //background color transition
  $('body').addClass('colored');
  
  //start Google map initialization using gmap3
  
  var gMap3Latitude = 28.4811689;    // modify the value with your Latitude coordinate
  var gMap3Longitude = -81.36875;   // modify the value with your Longitude coordinate
  
  function loadGmap() {
    $('#gmap-container').gmap3({
      map: {
        options: {
          center: [gMap3Latitude, gMap3Longitude],
          zoom: 6,
          mapTypeControl: false,
          navigationControl: true,
          scrollwheel: true,
          streetViewControl: false
        }
      },
      marker: {
        latLng: [gMap3Latitude, gMap3Longitude]
      }
    });
  }
  
  $('a[href="#tab-contact"]').on('shown', function () {
    loadGmap();
    $(window).resize();
  });
  
  //end Google map initialization using gmap3
  
  
  //start prettyPhoto initialization

  $("#tab-work").find("a[rel^='prettyPhoto']").prettyPhoto({
    theme: 'pp_metro_me pp_work',
    slideshow: false,
    counter_separator_label: ' of ',
    horizontal_padding: 0,
    modal: true,
    overlay_gallery: false,
    ie6_fallback: false,
    markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
              <div class="pp_social">{pp_social}</div> \
              <a class="pp_close" href="#" title="close"><i class="icon-cancel-1"></i></a> \
              <a class="pp_expand" href="#" title="expand / contract the image"><i class="icon-resize-full-1"></i></a> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#"><i class="icon-right-open"></i></a> \
											<a class="pp_previous" href="#"><i class="icon-left-open"></i></a> \
										</div> \
										<div id="pp_full_res"></div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
              <div class="pp_details"> \
                <div class="pp_nav"> \
                  <a href="#" class="pp_arrow_previous"><i class="icon-left-open"></i></a> \
                  <span class="currentTextHolder">0/0</span> \
                  <a href="#" class="pp_arrow_next"><i class="icon-right-open"></i></a> \
                </div> \
              </div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
    social_tools: '<a class="pp_facebook" title="Like" target="_blank" \
                    href="http://www.facebook.com/plugins/like.php?href={location_href}&send=false&layout=standard&width=450&show_faces=true&font&colorscheme=light&action=like&height=80" \
                    ><i class="icon-facebook"></i></a> \
                   <a class="pp_twitter" title="Tweet" target="_blank" \
                    href="https://twitter.com/share?url={location_href}" \
                    ><i class="icon-twitter"></i></a>'
  });
  
  $("#tab-life").find("a[rel^='prettyPhoto']").prettyPhoto({
    theme: 'pp_metro_me pp_life',
    slideshow: false,
    counter_separator_label: ' of ',
    horizontal_padding: 0,
    modal: true,
    overlay_gallery: false,
    ie6_fallback: false,
    markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
              <div class="pp_social">{pp_social}</div> \
              <a class="pp_close" href="#" title="close"><i class="icon-cancel-1"></i></a> \
              <a class="pp_expand" href="#" title="expand / contract the image"><i class="icon-resize-full-1"></i></a> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#"><i class="icon-right-open"></i></a> \
											<a class="pp_previous" href="#"><i class="icon-left-open"></i></a> \
										</div> \
										<div id="pp_full_res"></div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
              <div class="pp_details"> \
                <div class="pp_nav"> \
                  <a href="#" class="pp_arrow_previous"><i class="icon-left-open"></i></a> \
                  <span class="currentTextHolder">0/0</span> \
                  <a href="#" class="pp_arrow_next"><i class="icon-right-open"></i></a> \
                </div> \
              </div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
    social_tools: '<a class="pp_facebook" title="Like" target="_blank" \
                    href="http://www.facebook.com/plugins/like.php?href={location_href}&send=false&layout=standard&width=450&show_faces=true&font&colorscheme=light&action=like&height=80" \
                    ><i class="icon-facebook"></i></a> \
                   <a class="pp_twitter" title="Tweet" target="_blank" \
                    href="https://twitter.com/share?url={location_href}" \
                    ><i class="icon-twitter"></i></a>'
    
  });
  
  //end prettyPhoto initialization
  
  
  
  //START FLEXSLIDERS INITIALIZATION
  
  $('#project-gallery-img').add('#life-gallery-img').find('a[href="#"]').click(function(e){
    e.preventDefault();
  });
  
  var flexLeftIcon = 'icon-left-open-1';    //font icon css class to be used as left arrow
  var flexRightIcon = 'icon-right-open-1';   //font icon css class to be used as right arrow
  
  //my way of syncronizing the first slider with the second
  function syncSliders( firstSlider, secondSlider ) {
    $(firstSlider).find('.flex-prev' ).click(function() {
      $(secondSlider).find('.flex-prev' ).click();
    });
    $(firstSlider).find('.flex-next' ).click(function() {
      $(secondSlider).find('.flex-next' ).click();
    });
  }

  //keep this order to make sync work
  var loadedWorkBool = false;
  var loadedLifeBool = false;
  $('a[href="#tab-work"]').on('shown', function() {
    if (loadedWorkBool == false) {
      //start sliders for PROJECT with SINGLE IMAGE SLIDER 
      $('#project-single-txt').flexslider({
        animation: "slide",
        animationSpeed: 800,
        direction: "horizontal",
        animationLoop: false,
        controlNav: false,
        prevText: '<i class="' + flexLeftIcon + '"></i>',
        nextText: '<i class="' + flexRightIcon + '"></i>',
        before: function(slider) {
                  slider.slides[slider.currentSlide].setAttribute('class','slide-fade');
                  slider.slides[slider.animatingTo].setAttribute('class','slide-fade in');
                }
      });
      $('#project-single-img').flexslider({
        animation: "slide",
        animationSpeed: 800,
        direction: "vertical",
        animationLoop: false,
        controlNav: false,
        sync: "#project-single-txt"
      });    
      syncSliders('#project-single-txt', '#project-single-img');
      //end sliders for PROJECT with SINGLE IMAGE SLIDER
      
      //start sliders for PROJECT with GALLERY SLIDER
      $('#project-gallery-txt').flexslider({
        animation: "slide",
        animationSpeed: 800,
        direction: "horizontal",
        animationLoop: false,
        controlNav: false,
        prevText: '<i class="' + flexLeftIcon + '"></i>',
        nextText: '<i class="' + flexRightIcon + '"></i>',
        before: function(slider) {
                  slider.slides[slider.currentSlide].setAttribute('class','slide-fade');
                  slider.slides[slider.animatingTo].setAttribute('class','slide-fade in');
                }
      });
      $('#project-gallery-img').flexslider({
        animation: "slide",
        animationSpeed: 800,
        direction: "vertical",
        animationLoop: false,
        controlNav: false,
        sync: "#project-gallery-txt"
      });    
      syncSliders('#project-gallery-txt', '#project-gallery-img');
      //end sliders for PROJECT with GALLERY SLIDER
      loadedWorkBool = true;
    }
  });
    
  $('a[href="#tab-life"]').on('shown', function () {
    if (loadedLifeBool == false) {
      //start sliders for LIFE with GALLERY SLIDER
      $('#life-gallery-txt').flexslider({
        animation: "slide",
        animationSpeed: 800,
        direction: "horizontal",
        animationLoop: false,
        controlNav: false,
        prevText: '<i class="' + flexLeftIcon + '"></i>',
        nextText: '<i class="' + flexRightIcon + '"></i>',
        before: function(slider) {
                  slider.slides[slider.currentSlide].setAttribute('class','slide-fade');
                  slider.slides[slider.animatingTo].setAttribute('class','slide-fade in');
                }
      });
      $('#life-gallery-img').flexslider({
        animation: "slide",
        animationSpeed: 800,
        direction: "vertical",
        animationLoop: false,
        controlNav: false,
        sync: "#life-gallery-txt"
      });    
      syncSliders('#life-gallery-txt', '#life-gallery-img');
      //end sliders for LIFE with GALLERY SLIDER
      loadedLifeBool = true;
    }    
  });
  
}); //end of document.ready !

  
$(window).load(function() {
  
  //start slider for ABOUT
  $('#about-single-img').flexslider({
    animation: "slide",
    animationSpeed: 800,
    direction: "horizontal",
    directionNav: false,
    controlNav: true
  });
  //end slider for ABOUT 
//END FLEXSLIDERS INITIALIZATION
  
  //background image opacity transition
  $('#mm-bg').addClass('opaque');
  
  setTimeout( function() {
    $('#menu-container, #tabs-container').addClass('in');
  }, 2000);
  
});  //end of window.load


$(document).ready(function() {
  
  //START mCostomScrollbar initialization
  var textScroll = 
    '#about-me, '+
    '#about-short, '+
    '#my-experience, '+
    '#all-skills, '+
    '#feedback, '+
    '#project-single-txt p, '+
    '#project-gallery-txt p, '+
    '#project-gallery-img .gallery-slide, '+
    '#personality, '+
    '#interests, '+
    '#life-gallery-txt p, '+
    '#life-gallery-img .gallery-slide, '+
    '#contact-details';
  
  $( textScroll ).mCustomScrollbar({
    scrollInertia: 800,
    advanced: {
      updateOnBrowserResize: true,
      updateOnContentResize: true
    },
    contentTouchScroll: true,
    scrollButtons:{
      enable: false
    }
  });
  
  var galleryScroll = 
    '#project-gallery-img .gallery-slide, '+
    '#life-gallery-img .gallery-slide';
  
  $( galleryScroll ).mCustomScrollbar({
    scrollInertia: 800,
    autoHideScrollbar: true,
    advanced: {
      updateOnBrowserResize: true,
      updateOnContentResize: true
    },
    contentTouchScroll: true,
    scrollButtons:{
      enable: false
    }
  });
  //END mCostomScrollbar initialization
  
  //START scrollTO initialization
  $('a[href^="#tab-"]').on('shown', function () {
    setTimeout(function() {
      $.scrollTo('#tabs-container',{duration: 800, easing: 'swing', offset: -20});
    } ,1500)    
  });
  
  $('#to-top').find('a').click(function(e){
    e.preventDefault();
    $.scrollTo('#menu-container',{duration: 800, easing: 'swing', offset: -20});
  });
  //END scrollTO initialization
  
  
  //START Ajax Contact Form initialization
  var formBox = $('#form-box');
  var submitBtn = formBox.find('button');
  
  submitBtn.click(function(e) {
    e.preventDefault();
    var error = false;
    
    //message validation
    var messageArea = formBox.find('textarea');
    var messageVal = messageArea.val();
    if (messageVal == "" || messageVal == " ") {
      error = true;
      messageArea.addClass('error');
      submitBtn.html('Say something !');
    }
    
    //email validation
    var emailInput = $('#email');
    var emailVal = emailInput.val();
    if (emailVal == "" || emailVal == " " || emailVal.indexOf('@') == -1 || emailVal.indexOf('.') == -1) {
      error = true;
      emailInput.addClass('error');
      submitBtn.html('Invalid email !');
    }

    //name validation
    var nameInput = $('#name');
    var nameVal = nameInput.val();
    if (nameVal == "" || nameVal == " ") {
      error = true;
      nameInput.addClass('error');
      submitBtn.html('Name please !');
    }

    //check if any error occured
    if (!error) {
      submitBtn.html('Sending...');
      
      //collect form data
      var formData = formBox.find('form').serialize();
      
      //ajax request
      $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: formData,
        success: function() {
          submitBtn.html('Message sent. Thanks !');
          setTimeout(function() {
            submitBtn.html('Send message');
          }, 5000)
        },
        error: function(jqXHR, errorType) {
          submitBtn.html('Try again ...');
          console.log(errorType);
        }
      });
    }
  });
  
  formBox.find('input, textarea').focus(function() {
    submitBtn.html('Send message');
    $(this).removeClass('error');
  });
  //END Ajax Contact Form initialization
  
}); //end of document.ready
