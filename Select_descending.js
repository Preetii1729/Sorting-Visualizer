function SSort() {
    c_delay = 0;

    selectionSort(array_size);
}

function selectionSort(n) {
    for (var i = 0; i < n; i++) {
        var max = i; // Changed variable name to max
        div_update(divs[max], div_sizes[max] * 2, "#BCB57B"); // sage- brown yellow

        for (var j = i + 1; j < n; j++) {
            div_update(divs[j], div_sizes[j] * 2, "#EE964B"); // Sandy brown
            if (div_sizes[max] < div_sizes[j]) { // Changed comparison operator
                max = j; // Updated to max
            }
            div_update(divs[j], div_sizes[j] * 2, "#EFC11A"); // original yellow
        }

        div_update(divs[i], div_sizes[i] * 2, "#49697F");
        div_update(divs[max], div_sizes[max] * 2, "#49697F"); // Color update - gray blue

        var temp = div_sizes[max];
        div_sizes[max] = div_sizes[i];
        div_sizes[i] = temp;

        div_update(divs[i], div_sizes[i] * 2, "#49697F");
        div_update(divs[max], div_sizes[max] * 2, "#49697F"); // Color update - gray blue

        if (max != i) {
            div_update(divs[max], div_sizes[max] * 2, "#EFC11A"); // original yellow
        }

        div_update(divs[i], div_sizes[i] * 2, "#F95738"); // Color update - tomato
    }
    div_update(divs[0], div_sizes[0] * 2, "#F95738"); // Color update - tomato
}
