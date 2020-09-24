$(document).ready(function() {

  //show-hide Upcoming
  $('#toggle-events').on('click', function() {
      var btnText = $('#toggle-events').text(),
          toggleEvents = $('#toggle-events'),
          previousEvents = $('#previous')

      if (btnText == 'Previous events') {
        toggleEvents.text('Back');
        previousEvents.slideDown(500);
      } else {
        toggleEvents.text('Previous events');
        previousEvents.slideUp(500);
        $('html,body').animate({
          scrollTop: $('#new').offset().top}, 'slow');
      }
    });

    //show-hide Media-Music
    function showHide(a,b,c){

    $(a).on('click', function() {
        var btnMore = $(a).text();

        if (btnMore == 'Show more') {
          $(a).text('Show less');
          $(b).slideDown(500);
        } else {
          $(a).text('Show more');
          $(b).slideUp(500);
          $('html,body').animate({
          scrollTop: $(c).offset().top}, 'slow');
        }
      });
      };

      var tme = $('#toggle-media'),
          mme = $('#more-media'),
          lme = $('#less-media'),
          tmu = $('#toggle-music'),
          mmu = $('#more-music'),
          lmu = $('#less-music')

      showHide(tmu,mmu,lmu);
      showHide(tme,mme,lme);

  //smooth scroll
    $('.navbar-nav>li>a').on('click', function(event) {

        if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          window.location.hash = hash;
        });
      }
    });

  //back to top
  var backToTop = $('<a>', {
      href: '#home',
      class: 'back-to-top',
      html: '<i class="fas fa-chevron-up fa-3x"></i>'
    });

  backToTop
    .hide()
    .appendTo('body')
    .on('click', function(event) {
      event.preventDefault();
      $('html,body').animate({ scrollTop: 0 });
    });

  var win = $(window);
  win.scroll(function() {
    if ( win.scrollTop() >= 500 ) backToTop.fadeIn();
    else backToTop.hide();
  });

  //navbar hide
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });

  //mediaelements.js player
  $('audio').mediaelementplayer({
    features:['playpause','progress','current','duration','volume']
  });

  //yt video modal
  $('.video-link').on('click', function(){

    var iframe = $('<div class="embed-responsive embed-responsive-16by9 video-yt"><iframe width="100%"  src="'+ $(this).attr('data-video') +'" allowfullscreen></iframe></div>'),
        video = $('.video-yt')

    if (video.is(':visible')) {
      video.remove();
    }
    else {
      $(this).after(iframe);
    }

  });
});

//animate on scroll
AOS.init();






