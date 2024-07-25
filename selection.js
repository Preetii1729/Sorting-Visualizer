function SSort(){
    c_delay=0;

    selectionSort(array_size);
}

function selectionSort(n) {
    for(var i=0;i<n;i++){
        var min=i;
        div_update(divs[min],div_sizes[min]*2,"#BCB57B"); //sage- brown yellow

        for(var j=i+1;j<n;j++){
            div_update(divs[j],div_sizes[j]*2, "#EE964B"); //Sandy brown
            if(div_sizes[min]>div_sizes[j]){
                min=j;
            }
            div_update(divs[j],div_sizes[j]*2, "#EFC11A"); //original yellow
   
        }
        var temp=div_sizes[min];
        div_sizes[min]=div_sizes[i];
        div_sizes[i]=temp;
        div_update(divs[i],div_sizes[i]*2, "#49697F");
        div_update(divs[min],div_sizes[min]*2, "#49697F");//Color updat - gray blue
        if(min!=i){
            div_update(divs[min],div_sizes[min]*2, "#EFC11A");
        }
        div_update(divs[i],div_sizes[i]*2, "#F95738");//Color update - tomato
    }
    div_update(divs[0],div_sizes[0]*2, "#F95738");//Color update - tomato
}