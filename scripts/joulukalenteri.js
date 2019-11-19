const kuluvaPaiva = new Date();

function avaaLuukku (luukkuNro) {
    
    //tarkistetaan onko luukku avattavissa
    //HUOM! Tämä korjattava vielä lopulliseen versioon --> kk=12
    if (kuluvaPaiva.getMonth()+1 < 11 || kuluvaPaiva.getDate() < luukkuNro) {
        
        //disabloidaan luukku
        poistakaytosta(luukkuNro);
        
    } else {
        //jos kuluva päivä, korostetaan luukku
        if (kuluvaPaiva.getMonth == 12 && kuluvaPaiva.getDate == luukkuNro) {
            //korostetaan luukku
        }
          
        
        //näytetään luukkunumeron mukainen viesti
        alert(luukkuNro + ". päivä: " + messages[luukkuNro - 1]);
        
    }
    
    
}

function poistakaytosta (luukkuNro) {
    
}

