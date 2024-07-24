function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#BCB57B");     //sage- brown yellow

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#EE964B");//Color update-Sandy brown
                div_update(divs[j+1],div_sizes[j+1], "#EE964B");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#EE964B");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#EE964B");//Height update
            }
            div_update(divs[j],div_sizes[j], "#49697F");//Color updat - gray blue
        }
        div_update(divs[j],div_sizes[j], "#F95738");//Color update
    }
    div_update(divs[0],div_sizes[0], "#F95738");//Color update - tomato

    // enable_buttons();
}