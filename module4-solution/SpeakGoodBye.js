(function(window)
{
	var speakword="Good Bye";
	var byeSpeaker =function(name)
	{
		console.log(speakword+" "+name);
	}
	window.byeSpeaker=byeSpeaker;
})(window);