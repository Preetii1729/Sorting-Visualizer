function ISortd(){
    c_delay=0;

    bestt.innerText=" O(n)";
    avgt.innerHTML=" O(n^2)";
    worstt.innerHTML=" O(n^2)";

    bests.innerHTML=" O(1)";
    avgs.innerHTML=" O(1)";
    worsts.innerHTML=" O(1)";

    insertion_d();
}

function insertion_d(){
    var n = a_size;
    for (var i = 1; i < n; i++) {
        var j = i - 1;
        var temp = div_sizes[i];      
        while (j >= 0 && div_sizes[j] < temp) { // Changed comparison operator
            div_sizes[j + 1] = div_sizes[j];
            j--;
        }
        div_sizes[j+1]=temp;
    }
}