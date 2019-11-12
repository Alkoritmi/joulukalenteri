var kuluvaPaiva = new Date();

fuction avaaLuukku (luukkuNro) {
    
    if (kuluvaPaiva.getMonth()+1 < 12 || kuluvaPaiva.getDate() < luukkuNro) {
        
        //disabloitu
        
    } else {
        //jos kuluva päivä, korostetaan luukku
        if (kuluvaPaiva.getMonth == 12 && kuluvaPaiva.getDate == luukkuNro) {
            
        }
          
        
        //näytetään luukkunumeron mukainen viesti
        alert(luukkuNro + ". päivä: " + messages[luukkuNro - 1]);
        
    }
    
    
}

