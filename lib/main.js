/**
***	CintoJS library
***
*** author	: Siqual
*** date	: 10/29/2014
*** version	: 0.1
***
**/

// // Function extended for inheritance
// Function.prototype.extends = function(parent)
// {
//     if (parent.constructor == Function)
//     {
// 	this.prototype = new parent;
// 	this.prototype.constructor = this;
// 	this.prototype.parent = parent.prototype;
//     }
//     else
//     {
// 	this.prototype = parent;
// 	this.prototype.constructor = this;
// 	this.prototype.parent = parent;
//     }

//     // in the case of using it : not needed for now
//     // for (key in parent.prototype)
//     // {
//     // 	this.prototype[key] = parent.prototype[key];
//     // }

//     return (this);
// }

function	all_includes()
{
    include('colors.js');
    include('egraph.min.js');
    include('definitions.min.js');
    // include('Human.js');
}

function	main()
{
    return (0);
}
