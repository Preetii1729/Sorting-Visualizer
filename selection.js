function SSort(){
    c_delay=0;

    selectionSort(array_size);
}

function selectionSort(n) {
    for(var i=0;i<n;i++){
        var min=i;
        for(var j=i;j<n;j++){
            if(div_sizes[min]>div_sizes[j])
                min=j;
        }
        var temp=div_sizes[min];
        div_sizes[min]=div_sizes[i];
        div_sizes[i]=temp;
    }
}