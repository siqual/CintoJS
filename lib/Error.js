/** Utils functions **/
function	realTypeOf(obj)
{
    return (Object.prototype.toString.apply(obj));
}

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
    script.type = 'text/x-javascript';
    script.src = source;
    script.id = source;
    var src = document.getElementById(source);
    if (src === null)
	span.appendChild(script);
}
