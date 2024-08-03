function SSortd(){
    c_delay = 0;

    bestt.innerText=" O(n^2)";
    avgt.innerHTML=" O(n^2)";
    worstt.innerHTML=" O(n^2)";

    bests.innerHTML=" O(1)";
    avgs.innerHTML=" O(1)";
    worsts.innerHTML=" O(1)";

    selectionSortd(a_size);
}

function selectionSortd(n) {
    for (var i = 0; i < n; i++) {
        var max = i;
        for (var j = i + 1; j < n; j++) {
            if (div_sizes[max] < div_sizes[j]) { 
                max = j; 
            }
        }
        var temp = div_sizes[max];
        div_sizes[max] = div_sizes[i];
        div_sizes[i] = temp;

        // if (max != i) {
        //     div_update(divs[max], div_sizes[max] * 2, "#EFC11A"); // original yellow
        // }

    }

}