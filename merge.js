function merge(){
    c_delay=0;
    console.log("merge");
    partition(0,array_size-1);   
}

function partition(i,j){
    if(i<j){
        var mid=Math.floor((i+j)/2);
        div_update(divs[mid],div_sizes[mid]*2, "#BCB57B");//Color update-Sandy brown

        partition(i,mid);
        partition(mid+1,j);
        divide(i,j,mid);
    }
}

function divide(low,high,mid){
    var p= low, q=mid+1, k=low;
    var arr=[]; 
    while (p<=mid && q<=high){
        if(div_sizes[p]<=div_sizes[q]){
            // div_update(divs[p],div_sizes[p]*2, "#BCB57B");//Color update-Sandy brown
            // div_update(divs[q],div_sizes[q]*2, "#BCB57B");//Color update
            arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1]*2, "#EE964B");//Height update
        }
        else{
            // div_update(divs[p],div_sizes[p]*2, "#BCB57B");//Color update-Sandy brown
            // div_update(divs[q],div_sizes[q]*2, "#BCB57B");//Color update
            arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1]*2, "#EE964B");//Height update
        }
    }
    while (p<=mid || q<=high){
        if(p<=mid){
            // div_update(divs[p],div_sizes[p]*2, "#BCB57B");//Color update-Sandy brown
            // div_update(divs[q],div_sizes[q]*2, "#BCB57B");//Color update
            arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1]*2, "#EE964B");//Height update
        }
        else{
            // div_update(divs[q],div_sizes[q]*2, "#BCB57B");//Color update
            arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1]*2, "#EE964B");//Height update
        }
    }
    for(var i=low;i<k;i++){
        div_sizes[i]=arr[i];
        div_update(divs[i],div_sizes[i]*2,"#F95738");
    }
}