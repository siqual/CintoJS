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
}

function	Human()
{
    this.name = "Unknown";
    this.sex = "Unknown";
    this.age = "Unknown";

    this.getName = function()
    {
	return (this.name);
    }

    this.getSex = function()
    {
	return (this.sex);
    }

    this.toString = function()
    {
	return ("Name = " + this.getName());
    }
}

function	Man(name, age)
{
    this.name = name;
    this.sex = "M";
    this.age = age || "unknown";

    this.getName = function()
    {
	return (this.name);
    }

    this.getSex = function()
    {
    	return (this.sex);
    }

    this.toString = function()
    {
    	return ("Name = " + this.getName());
    }
}
Man.extends(Human);


function	main()
{
    var h = new Human();
    // console.log("sex = " + h.getSex());

    var m = new Man();
    // console.log("sex = " + m.getSex());
    console.log(m instanceof Human);
    return (0);
}
