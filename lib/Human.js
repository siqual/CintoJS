/** Tests **/ 

function	Human()
{
    var name = "Unknown";
    var sex = "Unknown";
    var age = "Unknown";

    this.getName = function()
    {
	return (name);
    }

    this.getSex = function()
    {
	return (sex);
    }

    this.toString = function()
    {
	return ("Name = " + this.getName());
    }
}

function	Man(name, age)
{
    var name = name;
    var sex = "M";
    var age = age || "unknown";

    this.getName = function()
    {
	return (name);
    }

    this.getSex = function()
    {
    	return (sex);
    }

    this.toString = function()
    {
    	return ("Name = " + this.getName());
    }
}
Man.inherits(Human);

function	Woman(name, age)
{
    var name = name;
    var sex = "F";
    var age = age || "unknown";

    this.getName = function()
    {
	return (name);
    }

    this.getSex = function()
    {
    	return (sex);
    }

    this.toString = function()
    {
    	return ("Name = " + this.getName());
    }
}
Woman.inherits(Human);
