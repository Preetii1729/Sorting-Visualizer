function ISort(){
    c_delay=0;

    insertion();
}

function insertion() {
    var n=array_size;
    for(var i=1; i<n ;i++){
        j=i-1;
        var temp=div_sizes[i];
        while(j>=0 && div_sizes[j]>temp){
            div_sizes[j+1]=div_sizes[j];
            j--;
        }
        div_sizes[j+1]=temp;
    }
}