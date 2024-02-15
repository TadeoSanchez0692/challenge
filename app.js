

function funEncriptar(x1){
    const vacio = [];
   const regex = /[^a-zA-Z0-9A-Z]/g;
    const found = x1.match(regex);

    console.log(found);

    if (found != null){
        console.log("no permitido");
        document.getElementById("advertencia").style.color= "yellow";
        document.getElementById("advertencia").style.fontSize = "30px";
        document.getElementById("aEncriptar").value= "";
       
        
    }else{
        document.getElementById("advertencia").style.color= "black";
        document.getElementById("advertencia").style.fontSize = "20px";
    var cadena = x1.replace("a", "ai").replace("e", "enter").replace("i", "imes").replace("o", "ober").replace("u","ufat");
   
    document.getElementById("aDesencriptar").value= cadena;
    document.getElementById("aEncriptar").value= "";
    
    }
    
    }


function funDesencriptar(x2){
    var cadena = x2.replace("bvc", "a").replace("test", "e").replace("rest", "i").replace("brda", "o").replace("gest","u");
   
    document.getElementById("aDesencriptar").value= cadena;
    document.getElementById("aEncriptar").value= "";

}

   
