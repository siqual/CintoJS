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
    // Defines
    this.MAX_VALUE = Math.pow(2, 31) - 1;
    this.MIN_VALUE = Math.pow(-2, 31);

    // Contructor
    if (val == null)
	this.value = 0;
    else
    {
	if (isNaN(val) || (val < this.MIN_VALUE) || (val > this.MAX_VALUE))
	    throw ("" + val + " : Invalid value for Int : value has to be between " +
		   this.MIN_VALUE +
		   " and " +
		   this.MAX_VALUE);
	else
	    this.value = Math.floor(val);
    }

    // Methods
    this.setValue = function(val)
    {
	if (val == null)
	    this.value = 0;
	else
	{
	    if (isNaN(val) || (val < this.MIN_VALUE) || (val > this.MAX_VALUE))
		throw ("" + val + " : Invalid value for Int : value has to be between " +
		       this.MIN_VALUE +
		       " and " +
		       this.MAX_VALUE);
	    else
		this.value = Math.floor(val);
	}
    }

    this.getValue = function()
    {
	return (this.value);
    }

    this.toString = function()
    {
    	return (this.value.toString());
    }
}
Int.extends(Number);

/** Class UInt **/
function	UInt(val)
{
    // Defines
    this.MIN_VALUE = 0;
    this.MAX_VALUE = Math.pow(2, 32) - 1;

    // Contructor
    if (val == null)
	this.value = 0;
    else
    {
	if (isNaN(val) || (val < this.MIN_VALUE) || (val > this.MAX_VALUE))
	    throw ("" + val + " : Invalid value for UInt : value has to be between " +
		   this.MIN_VALUE +
		   " and " +
		   this.MAX_VALUE);
	else
	    this.value = Math.floor(val);
    }

    // Methods
    this.setValue = function(val)
    {
	if (val == null)
	    this.value = 0;
	else
	{
	    if (isNaN(val) || (val < this.MIN_VALUE) || (val > this.MAX_VALUE))
		throw ("" + val + " : Invalid value for UInt : value has to be between " +
		       this.MIN_VALUE +
		       " and " +
		       this.MAX_VALUE);
	    else
		this.value = Math.floor(val);
	}
    }
    
    this.toString = function()
    {
    	return (this.value.toString());
    }

}
UInt.extends(Int);
