window.cipher = {
  
  encode: function (offset,texto){ 
    let mensaje = ("");
    for (let i = 0; i < texto.length; i++){
      texto[i].charCodeAt();
      let posicion =((texto[i].charCodeAt()-65+offset)%26+65);
      let nLetra = String.fromCharCode (posicion);
      mensaje= mensaje+nLetra;
    
    }
    return mensaje;
  },
  
   decode: function (offset,texto){ 
    let mensaje = ("");
    for (let i = 0; i < texto.length; i++){
    texto[i].charCodeAt();
    let posicion =((texto[i].charCodeAt()+65-offset)%26+65);
    let nLetra = String.fromCharCode (posicion);
    mensaje= mensaje+nLetra;
    
  }
  return mensaje;
  }
};
