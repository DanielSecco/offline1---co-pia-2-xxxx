// defaults
var timerFade 	= 250;
var timerDelay 	= 1000;

function callModal(color, title, content, icon, timer, callback) {

	var splashScreen 	= $('#splashScreen');
	var splashTitle 	= $('#splashTitle');
	var splashContent 	= $('#splashContent');
	var splashIcon		= $('#splashIcon');

	splashTitle.html(title);
	splashContent.html(content);
	splashIcon.attr('src', '/assets/svg/icon'+ icon +'.svg')

	// remove background color
	splashScreen.removeClass(function (index, className) {
		return (className.match (/\bb\S+/g) || []).join(' ');
	});

	// remove text color
	splashScreen.removeClass(function (index, className) {
		return (className.match (/\bc\S+/g) || []).join(' ');
	});

	splashScreen.addClass(color);

	// work with fadeout
	if (typeof timer === 'undefined') { timer = timerDelay; }

	// show, delay, hide
	splashScreen.fadeIn(timerFade).delay(timer).fadeOut(timerFade);

}


callModal('bRed cWhite', 'WoOps!', 'Suas credenciais não conferem.<br />Verifique-as e tente novamente.', 'Error');