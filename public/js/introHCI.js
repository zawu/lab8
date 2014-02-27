'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

var startTime;

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	startTime = new Date().getTime();
	$("#likeClick").click(likeClick);
}

function likeClick(e)
{
	e.preventDefault();
	// console.log("CLICKED");	
	ga('send', 'event', 'like', 'click');
	
	var endTime = new Date().getTime();
  	var timeSpent = endTime - startTime;
	ga('send', 'timing', 'jQuery', 'like', timeSpent);
}