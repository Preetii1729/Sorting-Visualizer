function BSortd(){
    c_delay=0;

    bestt.innerText=" O(n)";
    avgt.innerHTML=" O(n^2)";
    worstt.innerHTML=" O(n^2)";

    bests.innerHTML=" O(1)";
    avgs.innerHTML=" O(1)";
    worsts.innerHTML=" O(1)";

    bubbleD();
}

function bubbleD(){
    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            if (div_sizes[j] < div_sizes[j + 1]) {      // Changed comparison operator
                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;
            }
        }
    }
}