/**
***	CintoJS library
***
*** author	: Siqual
*** date	: 10/25/2014
*** version	: 0.1
***
**/

function	include(source)
{
    var	span = document.getElementById("include");
    if (span === null)
    {
    	var div = document.createElement('div');
    	div.id = "include";
    	document.body.appendChild(div);
    	span = document.getElementById("include");
    }
    var script = document.createElement('script');    
    script.type = 'text/javascript';
    script.src = source;
    script.id = source;
    var src = document.getElementById(source);
    if (src === null)
    {
    	span.appendChild(script);
    }
}

function	__start()
{
    document.body.onload = function()
    {
    	main();
    }
}

include('Error.js');
all_includes();
__start();
