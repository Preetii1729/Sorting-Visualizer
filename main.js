var inp_gen=document.querySelector("#arr_generate");
var inp_as=document.querySelector('#arr_size');
var array_size=inp_as.value;

var butts_algos=document.querySelectorAll(".sorts button");
var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.querySelector("#visualizer");

var complexity=document.querySelectorAll(".complexity");

var bestt=document.querySelector("#bestt");
var worstt=document.querySelector("#worstt");
var avgt=document.querySelector("#avgt");

var spacecompx1= document.querySelector("#spacecompx");

var spacec=document.querySelector("#spacec");

generate_array();

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input",generate_array);

function generate_array()
{
    complexity[0].classList.add("unseen");
    complexity[1].classList.add("unseen");
    array_size=inp_as.value;
    cont.innerHTML="";
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() *0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        if(array_size>40){
            divs[i].style=" margin:0% " + margin_size + "%; background-color:#EFC11A; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i])*2 + "%; font-size: 0.65rem";
        }
        else{
            divs[i].style=" margin:0% " + margin_size + "%; background-color:#EFC11A; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i])*2 + "%;";
        }
        divs[i].innerHTML="<p>"+div_sizes[i]+"</p>";
    }
}

butts_algos[0].addEventListener('click', function() {
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    BSort();
});

butts_algos[1].addEventListener('click', function(){
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    MSort();
});

butts_algos[3].addEventListener('click', function() {
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    SSort();
});

butts_algos[4].addEventListener('click', function(){
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    ISort();
});

butts_algos[2].addEventListener('click',function(){
    complexity[0].classList.remove("unseen");
    complexity[1].classList.remove("unseen");
    QSort();
});
