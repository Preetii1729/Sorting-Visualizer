function QSortd(){
    c_delay=0;

    bestt.innerText=" O(nlogn)";
    avgt.innerHTML=" O(nlogn)";
    worstt.innerHTML=" O(n^2)";
    
    bests.innerHTML=" O(logn)";
    avgs.innerHTML=" O(logn)";
    worsts.innerHTML=" O(n)";
    
    quickd(0, array_size-1);
}

function quickd(lb, ub) {
    if (lb < ub) {
        var loc = partition2(lb, ub);
        quickd(lb, loc - 1);
        quickd(loc + 1, ub);
    }
}

function partition2(lb, ub) {
    var pivot = lb;
    var i = lb, j = ub;
    while (i <= j) {
        while (div_sizes[pivot] <= div_sizes[i] && i <= ub) // Changed comparison operator
            i++;
        while (div_sizes[pivot] > div_sizes[j] && j >= lb) // Changed comparison operator
            j--;
        if (i < j) {
            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;
        }
    }
    var temp = div_sizes[j];
    div_sizes[j] = div_sizes[lb];
    div_sizes[lb] = temp;
    return j;
}