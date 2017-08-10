$(function() {

$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="img/logo.png" alt="Волшебные гонки">'
		},
		offCanvas: {
			position  : 'right'
		},
			"pageScroll": true
	
});

var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function () {
		$('.hamburger').removeClass('is-active');
	});

$('.res').owlCarousel({
		loop: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 3,
			}
		}
	});

$('.res').equalHeights();

$('.lp3_item_content').equalHeights();


	$("a[href='#callback'], a[href='#conpolicy']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

	$("a[href='#callback']").click(function() {
		var dataForm = $(this).data("form");
		var dataText = $(this).data("text");
		$(".callback h3").text(dataText);
		$(".callback [name=admin-data]").val(dataForm);
	});

$('#bgvideo').videoBG({
    mp4:'/img/header.mp4',
    webm:'/img/header.webm',
    poster:'/img/header.jpg',
    ogv:'/img/header.ogv',
    scale:true,
    zIndex:0
});


	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css("display", "flex").hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});

