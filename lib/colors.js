function	colors()
{
    var		win;
    var		baw;
    var		height = 4000;
    var		width = 100;
    var		color;
    var		r = 255;
    var		g = 0;
    var		b = 0;
    var		i = 0;
    var		j = 0;
    var		dbg = 0;
    var		up = 1;

    win = mlj_new_window(height, width, "rainbow", "rainbow");
    baw = mlj_new_window(height, width, "poulp", "poulp");
    if (!dbg)
    {    
	while (i < height)
	{
	    j = 0;
	    while (j < width)
	    {
		color = "rgb(" + r + ", " + g + ", " + b + ")";
		mlj_pixel_put(win, i, j, color);
		j++;
	    }
	    (g < 255 && b == 0) ?
		g++ : (g == 255 && b == 0 && r != 0) ?
		r-- : (b < 255 && r == 0) ?
		g-- && b++ : (b == 255 && g == 0 && r != 255) ?
		r++ : b--;	
	    i++;
	}
	i = 0;
	r = 0;
	g = 0;
	b = 0;
	while (i < height)
	{
		j = 0;
		while (j < width)
		{
		    color = "rgb(" + r + ", " + g + ", " + b + ")";
		    mlj_pixel_put(baw, i, j, color);
		    j++;
		}
		(r != 255 && up) ?
		r++ && g++ && b++ : (r != 0 && !up) ?
		r-- && g-- && b-- : (r == 0) ?
		up++ : up--;
		i++;
	}

    }
}
