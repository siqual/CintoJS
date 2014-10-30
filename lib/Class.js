/**
***	CintoJS library
***
*** author	: Siqual
*** date	: 10/25/2014
*** version	: 0.1
***
**/

var Class = function()
{
    this.initialize && this.initialize.apply(this, arguments);
};
Class.extend = function(childPrototype)
{
    var parent = this;
    var child = function()
    {
        return parent.apply(this, arguments);
    };
    child.extend = parent.extend;

    var Surrogate = function() {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;
    for(var key in childPrototype)
    {
        child.prototype[key] = childPrototype[key];
    }
    return (child);
};

/** Class Integer **/
var	Integer = function(val)
{
    // Contructor
    this.type = "Integer";
    this.MAX_VALUE = 42;

    if (!(isNaN(val)) || val == null)
	this.value = val || 0;
    else
	throw (throwError(realTypeOf(val), this.type));

    // Methods
    this.setValue = function(val)
    {
	this.value = val;
    }

    this.getValue = function()
    {
	return (this.value);
    }

    this.toString = function()
    {
    	return ("Integer value = " + this.value.toString());
    }
}
for (key in Number.prototype)
{
    Integer.prototype[key] = Number.prototype[key];
}
Integer.prototype = new Number();
