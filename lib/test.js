Function.prototype.extends = function(parent)
{
    if (parent.constructor == Function)
    {
	this.prototype = new parent;
	this.prototype.constructor = this;
	this.prototype.parent = parent.prototype;
    }
    else
    {
	this.prototype = parent;
	this.prototype.constructor = this;
	this.prototype.parent = parent;
    }
    // for (key in parent.prototype)
    // {
    // 	this.prototype[key] = parent.prototype[key];
    // }
    return (this);
}

function	Int(val)
{
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
    	return ("Int value = " + this.value.toString());
    }
}
Int.extends(Number);

function	UInt(val)
{
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
    	return ("UInt value = " + this.value.toString());
    }

}
UInt.extends(Int);

function	main()
{
    try
    {
	var i = new UInt(0);
	console.log(i instanceof Number);
    }
    catch (error)
    {
	console.log(error);
	return;
    }
}
