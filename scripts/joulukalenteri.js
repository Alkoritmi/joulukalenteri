const kuluvaPaiva = new Date();
const luukkuNro = document.getElementById("luukku" + Paiva);

function avaaLuukku (luukkuNro) {
    
    if (kuluvaPaiva.getMonth()+1 < 12 || kuluvaPaiva.getDate() < luukkuNro) {
        
        //disabloitu
        //document.getElementById("luukku"+luukkuNro)
        
    } else {
        //jos kuluva päivä, korostetaan luukku
        if (kuluvaPaiva.getMonth == 12 && kuluvaPaiva.getDate == luukkuNro) {
            
        }
          
        
        //näytetään luukkunumeron mukainen viesti
        alert(luukkuNro + ". päivä: " + messages[luukkuNro - 1]);
        
    }
    
    
}

function poistakaytosta (luukkuNro)

