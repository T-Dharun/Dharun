(function(window)
{
	var speakword="Hello";
	var helloSpeaker=function(name)
	{
		console.log(speakword+" "+name);
	}
	window.helloSpeaker=helloSpeaker;
})(window);