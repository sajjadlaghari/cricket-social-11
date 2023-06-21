var targetDiv = $('body');
$(window).scroll(function() {
     var windowpos = $(window).scrollTop();

     if( windowpos >= 30 ) {
          targetDiv.addClass('scrolling-active');
     } else {
          targetDiv.removeClass('scrolling-active');
     }

});

     $('.inslide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 1.06
            }
          }
       
        ]
      });

      $('.autoplay').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode:false,
              slidesToShow: 2
            }
          }
        ]
      });

      $('.recomanded').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1.2
            }
          }
        ]
      });


      $('.Collections').slick({
        slidesToShow:5,
        slidesToScroll: 1,
        cssEase: 'linear',
        infinite: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 2.5
            }
          }
         
        ]
      });

      $('.Browse').slick({
        slidesToShow:5,
        slidesToScroll: 1,
        cssEase: 'linear',
        infinite: false,
        autoplay:true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 2.5
            }
          }
          
        ]
      });


      $('.barnd-slider').slick({
        slidesToShow:5,
        slidesToScroll: 1,
        
        infinite: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 2.5
            }
          }
          
        ]
      });

      $('.mobile-blog').slick({
        slidesToShow:2,
        slidesToScroll: 1,
        cssEase: 'linear',
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2.2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 1.2
            }
          }
        ]
      });

  
      $('.test-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1.7,
        arrows: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
          
        ]
      });