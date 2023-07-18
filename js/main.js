(function($) {
	"use strict";

	$(window).on('load', function() {

	    // $(".preloader").fadeOut(2500, function() {
	    //     $(".preloader-left").addClass("slide-left");
	    // });

	    $('#lionhero').owlCarousel({
	        animateOut: 'fadeOut',
	        nav: true,
	        navText: [
	            '<i class="ion-ios-arrow-thin-left"></i>',
	            '<i class="ion-ios-arrow-thin-right"></i>'
	        ],
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });

	    $('#liontextslider').owlCarousel({
	        nav: false,
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });

	    $('#liontestimonial').owlCarousel({
	        nav: true,
	        navText: [
	            '<i class="ion-ios-arrow-thin-left"></i>',
	            '<i class="ion-ios-arrow-thin-right"></i>'
	        ],
	        items: 1,
	        navSpeed: 400,
	        loop: true,
	        autoplay: true,
	        autoplayTimeout: 4000,
	        autoplayHoverPause: true,
	    });
	});

	$('.portfolio-block, .menu-item').on('click', function() {

	    //Portfolio masonry
	    var $container = $('#portfolio-container');
	    	$container.isotope({
				masonry: {
					columnWidth: '.portfolio-item'
				},
				itemSelector: '.portfolio-item'
		});
		
	    $('#filters').on('click', 'li', function() {
	        $('#filters li').removeClass('active');
	        $(this).addClass('active');
	        var filterValue = $(this).attr('data-filter');
	        $container.isotope({ filter: filterValue });
	    });

	});
	
	// Typing Animation (Typed.js)
	$('#skills').typed({
	    strings: ["I am available for freelance","UX, UI Designer", "Web App Developer", "Android and Ios Programmer"],
	    typeSpeed: -50,
	    loop: true,
	    startDelay: 500,
	    backDelay: 3000,
	    contentType: 'html',
	});

	//Video background
	var myPlayer;
    $(function () {
      myPlayer = $("#bgndVideo").YTPlayer({useOnMobile:true, mobileFallbackImage:"assets/mask-4.png"});

    });
	//Portfolio Modal
	$(document).on('click', '.open-project', function() {
	    // var projectUrl = $(this).attr("href");
	    // $('.inline-menu-container').removeClass('showx');
	    // $('.sidebar-menu').addClass('hidex');
	    // $('.content-blocks.pop').addClass('showx');
	    // $('.content-blocks.pop section').load(projectUrl+' .load-data > *');
	    return false;
	});
	//Blog post Modal
	$('.open-post').on('click', function() {
	    var postUrl = $(this).attr("href");
	    $('.inline-menu-container').removeClass('showx');
	    $('.sidebar-menu').addClass('hidex');
	    $('.content-blocks.pop').addClass('showx');
	    $('.content-blocks.pop section').load(postUrl);
	    return false;
	});
	//On Click Open Menu Items
	$('.menu-block, .menu-item').on('click', function() {
	    $('.name-block').addClass('reverse');
	    $('.name-block-container').addClass('reverse');
	    $('.menu-blocks').addClass('hidex');
	    $('.inline-menu-container').addClass('showx');
	    $('.inline-menu-container.style2').addClass('dark');
	});
	//On Click Open About/Resume Block
	$('.about-block, .menu-item.about').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.about').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.about').addClass('active');
	});
	//On Click Open Portfolio Block
	$('.portfolio-block, .menu-item.portfolio').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.portfolio').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.portfolio').addClass('active');
	});
	//On Click Open Blog Block
	$('.blog-block, .menu-item.blog').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.blog').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.blog').addClass('active');
	});
	//On Click Open Contact Block
	$('.contact-block, .menu-item.contact').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.contact').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.contact').addClass('active');
	});
	//On Click Close Blocks
	$('#close').on('click', function() {
	    $('.name-block').removeClass('reverse');
	    $('.name-block-container').removeClass('reverse');
	    $('.content-blocks').removeClass('showx');
	    $('.menu-blocks').removeClass('hidex');
	    $('.inline-menu-container').removeClass('showx');
	    $('.menu-item').removeClass('active');
	});
	//On Click Close Blog Post And Project Details
	$('#close-pop').on('click', function() {
	    $('.content-blocks.pop').removeClass('showx');
	    $('.sidebar-menu').removeClass('hidex');
	    $('.inline-menu-container').addClass('showx');
	    $('.content-blocks.pop section').empty();
	});
	$('.menu-block, .menu-item, #close').on('click', function() {
	    $('.content-blocks').animate({ scrollTop: 0 }, 800);
	});	
	//Function for 'Index-Menu2.html'
	$('#home').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.menu-item').removeClass('active');
	    $(this).addClass('active');
		$('.inline-menu-container.style2').removeClass('dark');
	});

	//init
	var windowWidth = $(window).width();
		if (windowWidth < 1000) {
			$(".name-block").hide();
			$(".name-block.reverse").hide();
			$(".content-blocks").removeClass('responsive');
	 
		}

	//on resize widnow
	$( window ).resize(function() {
		var windowWidth = $(window).width();
		if (windowWidth < 1000) {
			$(".name-block").hide();
			$(".name-block.reverse").hide();
			$(".content-blocks").addClass('responsive');

		} else {
			$(".name-block").show();
			$(".name-block.reverse").show();
			$(".content-blocks").removeClass('responsive');

		}

	});
	
	//mail
	$('#submit').on('click', function() {
	    var name = $('#name').val();
	    var email = $('#email').val();
	    var message = $('#message').val();
	    
	    if(name.length===0 || email.length===0 || message.length===0){
	        alert("please, fill all fields!");
	        return false;
	    }else{
	        
	        
	        $.ajax({
                url: 'https://dlovan.me/send-mail.php',
                type: 'POST',
                data:{
                    'mail': 'ok',
                    'm':message,
                    'n':name,
                    'e':email
                },
                success:function(d){
                    console.log(d);
                    if(d==="ok"){
                        alert("Thanks,your mail has been sent.I'w reply soon.");
                    }else{
                         alert("something went wrong!.Try again");
                    }
                            
                },
                error: function( req, status, err ) {
                    console.log( 'something went wrong', status, err );
              }
            
        });
   
	}
	    
	});
	

// function submitForm(){
//     // Initiate Variables With Form Content
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var msg_subject = $("#msg_subject").val();
//     var message = $("#message").val();


//     $.ajax({
//         type: "POST",
//         url: "php/form-process.php",
//         data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
//         success : function(text){
//             if (text == "success"){
//                 formSuccess();
//             } else {
//                 formError();
//                 submitMSG(false,text);
//             }
//         }
//     });
// }

// function formSuccess(){
//     $("#contactForm")[0].reset();
//     submitMSG(true, "Message Submitted!")
// }

// function formError(){
//     $("#contactForm").removeClass().addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $(this).removeClass();
//     });
// }

// function submitMSG(valid, msg){
//     if(valid){
//         var msgClasses = "h3 text-center tada animated text-success";
//     } else {
//         var msgClasses = "h3 text-center text-danger";
//     }
//     $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
// }

})(jQuery);
