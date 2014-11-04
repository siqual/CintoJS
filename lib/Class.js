/**
***	CintoJS library
***
*** author	: Siqual
*** date	: 11/03/2014
*** version	: 0.1
***
**/

// Function extended for inheritance
Function.prototype.extends = function(parent)
{
    if (parent.constructor == Function)
    {
	this.prototype = new parent;
	this.prototype.constructor = new this;
	this.prototype.parent = parent.prototype;
    }
    else
    {
	this.prototype = parent;
	this.prototype.constructor = new this;
	this.prototype.parent = parent;
    }
    return (this);
}
