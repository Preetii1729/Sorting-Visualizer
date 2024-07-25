var inp_gen=document.getElementById("arr_generate");
var inp_as=document.getElementById('arr_size');
var array_size=inp_as.value;

var butts_algos=document.querySelectorAll(".sorts button");
var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("visualizer");

generate_array();

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input",generate_array);

function generate_array()
{
    array_size=inp_as.value;
    cont.innerHTML="";
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() *0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:#EFC11A; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i])*2 + "%;";
        divs[i].innerHTML="<p>"+div_sizes[i]+"</p>";
    }
}

butts_algos[0].addEventListener('click', function() {
    c_delay=0;
    bubble();
});

butts_algos[1].addEventListener('click', function(){
    c_delay=0;
    merge();
});

butts_algos[3].addEventListener('click', function() {
    SSort();
});

butts_algos[4].addEventListener('click', function(){
    ISort();
});
