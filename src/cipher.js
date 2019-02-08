window.cipher = {
  
  encode: function (offset,text){ 
    let mensaje = ("");
    for (let i = 0; i < text.length; i++){
      text[i].charCodeAt();
      let posicion =((text[i].charCodeAt()-65+offset)%26+65);
      let nLetra = String.fromCharCode (posicion);
      mensaje= mensaje+nLetra;
    
    }
    return mensaje;
  },
  
   decode: function (offset,text){ 
    let mensaje = ("");
    for (let i = 0; i < text.length; i++){
    text[i].charCodeAt();
    let posicion =((text[i].charCodeAt()+65-offset)%26+65);
    let nLetra = String.fromCharCode (posicion);
    mensaje= mensaje+nLetra;
    
  }
  return mensaje;
  }
};
