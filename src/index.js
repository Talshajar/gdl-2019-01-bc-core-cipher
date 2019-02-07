document.getElementById("Offencode").addEventListener("click", botonEncode);

function botonEncode (){
    const offset = parseInt (document.getElementById("offset").value); 
    const texto = document.getElementById("texto").value;
  
    let mensaje= window.cipher.encode (offset,texto);
    document.getElementById("Resultado").innerHTML= mensaje;
}

document.getElementById("Offdecode").addEventListener("click", botonDecode);

function botonDecode (){
    const offset = parseInt (document.getElementById("offset").value); 
    const texto = document.getElementById("texto").value;
  
    let mensaje= window.cipher.decode (offset,texto);
    document.getElementById("Resultado").innerHTML= mensaje;
}
