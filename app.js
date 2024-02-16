

    function funEncriptar(x1){
        const vacio = [];
        const regex = /([^a-zA-Z0-9])/g;
        const regex2 = /([A-Z])/g;
        const found = x1.match(regex);
        const found2 = x1.match(regex2);

        console.log(found);

        if (found != null){
            console.log("no permitido");
            document.getElementById("advertencia").style.color= "yellow";
            document.getElementById("advertencia").style.fontSize = "30px";
            document.getElementById("aEncriptar").value= "";
        
            
        }else{
            if (found2 != null){
                console.log("no permitido");
                document.getElementById("advertencia").style.color= "yellow";
                document.getElementById("advertencia").style.fontSize = "30px";
                document.getElementById("aEncriptar").value= "";
            }else{
                document.getElementById("advertencia").style.color= "black";
                document.getElementById("advertencia").style.fontSize = "20px";
            var cadena = x1.replace("i", "imes").replace("e", "enter").replace("a", "ai").replace("o", "ober").replace("u","ufat");
        
            document.getElementById("aDesencriptar").value= cadena;
            document.getElementById("aEncriptar").value= "";
            }
        }
        
        }


    function funDesencriptar(x2){
        var cadena = x2.replace("ai", "a").replace("enter", "e").replace("imes", "i").replace("ober", "o").replace("ufat","u");
    
        document.getElementById("aDesencriptar").value= cadena;
        document.getElementById("aEncriptar").value= "";
    }

    function funCopiar(x3){
    console.log(x3);
    var text = x3;

    navigator.clipboard.writeText(x3)
    .then(() => {
        console.log('Texto copiado al portapapeles')
        alert('Texto copiado al portapapeles')
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
    })



}

   
