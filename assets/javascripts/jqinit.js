$(function(){

	var userMenu = $('.header-user-dropdown .header-user-menu');

	userMenu.on('touchend', function(e){

		userMenu.addClass('show');

		e.preventDefault();
		e.stopPropagation();

	});

	// This code makes the user dropdown work on mobile devices

	$(document).on('touchend', function(e){

		// If the page is touched anywhere outside the user menu, close it
		userMenu.removeClass('show');

	});


	var links = $('.sidebar-links > a');

	links.on('click', function () {

		links.removeClass('selected');
		$(this).addClass('selected');

	})

	$('#logo').click(function(){
		  var clicks = $(this).data('clicks');
		  if (clicks) {
			$('.sec-sidebar').find('.sidebar-left').stop().animate({marginLeft: '0px'}, 300);
		  } else {
		    $('.sec-sidebar').find('.sidebar-left').stop().animate({marginLeft: '-115px'}, 300);
		  }
		  $(this).data("clicks", !clicks);
	});

	$('.sidebar-links').click(function(e){
	  e.preventDefault();
	  if( $(this).closest('.sec-sidebar').hasClass('sidebar-locked') ){
	    //unlocked
	    $(this).closest('.sec-sidebar').removeClass('sidebar-locked');
	    $(this).closest('.sec-sidebar').stop().animate({width: '38px'}, 300).css({'overflow': 'visible'});
	    setupHover();
	  } else{
	    //locked
	    $(this).closest('.sec-sidebar').addClass('sidebar-locked');
	    $(this).closest('.sec-sidebar').stop().animate({width: '253px'}, 300).css({'overflow': 'visible'});
	    $('.sec-sidebar').unbind('mouseover');
	    $('.sec-sidebar').unbind('mouseout');
	  }
	});

	function setupHover() {	   
	    //Hover
	    $('.sec-sidebar').mouseover(function(){
	      $(this).find('.sidebar-left').stop().animate({marginLeft: '0px'}, 300);
	    }).mouseout(function(){
	      $(this).find('.sidebar-left').stop().animate({marginLeft: '-115px'}, 300);
	    });
	}

	setupHover();

});




