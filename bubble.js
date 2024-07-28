function BSort(){
    c_delay=0;

    bubble();
}

function bubble()
{
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j]*2, "#EE964B");      //Sandy brown

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j]*2, "#49697F");      //gray-blue
                div_update(divs[j+1],div_sizes[j+1]*2, "#49697F");  //gray-blue

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j]*2, "#49697F");      //gray-blue
                div_update(divs[j+1],div_sizes[j+1]*2, "#49697F");  //gray-blue
            }
            
            div_update(divs[j],div_sizes[j]*2, "#EFC11A");          //og yellow
        }
        div_update(divs[j],div_sizes[j]*2, "#F95738");      //tomato
    }
    div_update(divs[0],div_sizes[0]*2, "#F95738");          //tomato

    // enable_buttons();
}