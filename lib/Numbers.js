/**
***	CintoJS library
***
*** author	: Siqual
*** date	: 11/03/2014
*** version	: 0.1
***
**/

/** Class Int **/
function	Int(val)
{
    // Public Defines
    this.MAX_VALUE = Math.pow(2, 31) - 1;
    this.MIN_VALUE = Math.pow(-2, 31);

    // Private attributes
    var	value;

    // Contructor
    if (val == null)
	value = 0;
    else
    {
	if (isNaN(val) || (val < this.MIN_VALUE) || (val > this.MAX_VALUE))
	    throw ("" + val + " : Invalid value for Int : value has to be between " +
		   this.MIN_VALUE +
		   " and " +
		   this.MAX_VALUE);
	else
	    value = Math.floor(val);
    }

    // Public methods
    this.setValue = function(val)
    {
	if (val == null)
	    value = 0;
	else
	{
	    if (isNaN(val) || (val < this.MIN_VALUE) || (val > this.MAX_VALUE))
		throw ("" + val + " : Invalid value for Int : value has to be between " +
		       this.MIN_VALUE +
		       " and " +
		       this.MAX_VALUE);
	    else
		value = Math.floor(val);
	}
    }

    this.getValue = function()
    {
	return (value);
    }

    this.toString = function()
    {
    	return (value.toString());
    }
}
Int.inherits(Number);

/** Class UInt **/
function	UInt(val)
{
    // Defines
    this.MIN_VALUE = 0;
    this.MAX_VALUE = Math.pow(2, 32) - 1;

    // Private attributes
    var	value;

    // Contructor
    if (val == null)
	value = 0;
    else
    {
	if (isNaN(val) || (val < this.MIN_VALUE) || (val > this.MAX_VALUE))
	    throw ("" + val + " : Invalid value for UInt : value has to be between " +
		   this.MIN_VALUE +
		   " and " +
		   this.MAX_VALUE);
	else
	    value = Math.floor(val);
    }

    // Public methods
    this.setValue = function(val)
    {
	if (val == null)
	    value = 0;
	else
	{
	    if (isNaN(val) || (val < this.MIN_VALUE) || (val > this.MAX_VALUE))
		throw ("" + val + " : Invalid value for UInt : value has to be between " +
		       this.MIN_VALUE +
		       " and " +
		       this.MAX_VALUE);
	    else
		value = Math.floor(val);
	}
    }
    
    this.getValue = function()
    {
	return (value);
    }

    this.toString = function()
    {
    	return (value.toString());
    }

}
UInt.inherits(Int);
