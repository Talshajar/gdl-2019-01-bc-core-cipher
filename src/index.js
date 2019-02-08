document.getElementById("screen2").style.display = "none";

document.getElementById("Offencode").addEventListener("click", botonEncode);

function botonEncode (){
    const offset = parseInt (document.getElementById("offset").value); 
    const text = document.getElementById("text").value;
  
    let mensaje= window.cipher.encode (offset,text);
    document.getElementById("result").innerHTML= mensaje;
    hidden();
}

document.getElementById("Offdecode").addEventListener("click", botonDecode);

function botonDecode (){
    const offset = parseInt (document.getElementById("offset").value); 
    const text = document.getElementById("text").value;
  
    let mensaje= window.cipher.decode (offset,text);
    document.getElementById("result").innerHTML= mensaje;
    hidden();
}
document.getElementById("Refresh").addEventListener("click",Refresh);
    
function Refresh() {
    location.reload();
}

function hidden (){
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
}