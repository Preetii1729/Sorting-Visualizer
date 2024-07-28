function QSort() {
    c_delay = 0;
    console.log("Hello");
    quick(0, array_size - 1);
}

function partition(lb, ub) {
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

function quick(lb, ub) {
    if (lb < ub) {
        var loc = partition(lb, ub);
        quick(lb, loc - 1);
        quick(loc + 1, ub);
    }
}
