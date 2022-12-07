document.querySelector("#btnsumar").addEventListener("click",sumarUno);
document.querySelector("#btnrestar").addEventListener("click",restarUno);
let contador=0

function sumarUno(){
    contador= contador+1;
    document.querySelector("#msgcontador").innerHTML=contador
}

function restarUno(){
    contador= contador-1;
    document.querySelector("#msgcontador").innerHTML=contador
}