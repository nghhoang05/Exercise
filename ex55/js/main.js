function pt2(a,b,c)
{
    if (a==0)
    {
        if (b==0)
        {
            if (c==0)
            {
                r="Phương trình có vô số nghiệm"
            }
            else
            {
                r="Phương trình vô nghiệm"
            }
        }
        else
        {
            r=-c/b
        }
    }
    else
    {
        delta=(b*b)-(4*a*c)
        if (delta>0)
        {
            x1=(-b+Math.sqrt(delta))/(2*a)
            x2=(-b-Math.sqrt(delta))/(2*a)
            r="x1="+x1+"; x2="+x2
        }
        else if (delta==0)
        {
            x=-b/(2*a)
            r="x1=x2="+x
        }
        else
        {
            r="Phương trình vô nghiệm"
        }
    }
    result.innerText=r
}