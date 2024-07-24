var speed=1000;

var inp_speed=document.getElementById("arr_speed");
inp_speed.addEventListener("input",animation_speed);

function animation_speed()
{
    var array_speed=inp_speed.value; 
    console.log(array_speed);
    switch(parseInt(array_speed)) //Convert string to int, as the value is a string
    {
        case 1: speed=10;
                break;
        case 2: speed=100;
                break;
        case 3: speed=500;
                break;
        case 4: speed=2000;
                break;
        case 5: speed=5000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);
var c_delay=0;          //Updated on every div change so that we can see the visualization.

function div_update(cont,height,color)
{
        window.setTimeout(function(){
                cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        },c_delay+=delay_time);
}


