/**
***	CintoJS library
***
*** author	: Siqual
*** date	: 10/29/2014
*** version	: 0.1
***
**/

// Allow the user to use the equivalent of '#include <file>' in C language
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

// Entry point : force the user to have a "main()" function
function	__start()
{
    document.body.onload = function()
    {
    	main();
    }
}

// Requirements to use CintoJS
include('Class.js');
include('Numbers.js');
all_includes();
__start();
