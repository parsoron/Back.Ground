let changeBackground =function(){

    let box1=document.getElementById("block1");
    let box2=document.getElementById("block2");
    let box3=document.getElementById("block3");

    box1.style.backgroundColor="green";
    box2.style.backgroundColor="blue";
    box3.style.backgroundColor="yellow";

    box1.innerText="bruh";
    box2.innerText="stink";
    box3.innerText="burm";
};
let setOriginal =function(){
    let box1=document.getElementById("block1");
    let box2=document.getElementById("block2");
    let box3=document.getElementById("block3");

    box1.style.backgroundColor="red";
    box2.style.backgroundColor="red";
    box3.style.backgroundColor="red";

    box1.innerText="OVER";
    box2.innerText="ENTER";
    box3.innerText="DOWN";
};
let showHidden= function () {
    document.getElementById("you found dat S**t hot dog").innerHTML

};
let mouseOver = function(id){

    id.style.backgroundColor="yellow";
    id.innerText="HELLO";

};
let mouseOut = function(id){
    id.style.backgroundColor="red";
    if(id === document.getElementById ("block1")){
        id.innerText = "OVER";
    }else if( id === document.getElementById("block2")){
        id.innerText = "ENTER";
    }else
        id.innerText= "DOWN";
};