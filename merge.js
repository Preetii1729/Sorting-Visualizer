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
            arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1]*2, "#EE964B");//Height update
        }
        else{
            arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1]*2, "#EE964B");//Height update
        }
    }
    while (p<=mid || q<=high){
        if(p<=mid){
            arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1]*2, "#EE964B");//Height update
        }
        else{
            arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1]*2, "#EE964B");//Height update  //orange-ish
        }
    }
    for(var i=low;i<k;i++){
        div_sizes[i]=arr[i];
        div_update(divs[i],div_sizes[i]*2,"#F95738"); //Tomato
    }
}

/*
First division is made and we can see the mid points in sandy/grey color.
Then the parts will be compared and each bar will turn orange in ascending order of its size.
Finally the two parts will be merged and shown in red color.
*/