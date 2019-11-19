const kuluvaPaiva = new Date();

function avaaLuukku(luukkuNro) {
    
    //tarkistetaan onko luukku avattavissa
    //HUOM! Tämä korjattava vielä lopulliseen versioon --> kk=11
    if (kuluvaPaiva.getMonth()+1 < 10 || kuluvaPaiva.getDate() < luukkuNro) {
        
        //disabloidaan luukku
        poistakaytosta(luukkuNro);
        
    } else {
        //jos kuluva päivä, korostetaan luukku
        //HUOM! Tämä korjattava vielä lopulliseen versioon --> kk=11
        if (kuluvaPaiva.getMonth() == 10 && kuluvaPaiva.getDate() == luukkuNro) {
            //korostetaan luukku
            document.getElementById(luukkuNro).classList.remove("luukku");
            document.getElementById(luukkuNro).classList.add("luukku_korostus");
            
        }
          
        
        //näytetään luukkunumeron mukainen viesti
        alert(luukkuNro + ". päivä: " + messages[luukkuNro - 1]);
          
    }
    
    
}

//function poistakaytosta() {
    //for (n = 0; n <= 24; n++) {
        //document.getElementById("luukku" + n).classList.toggle("disabloitu");

        //var x = document.getElementById("luukku5");
        //if (x.classList.contains("luukku")) {
            //x.classList.remove("luukku");
            //x.classList.add("disabloitu")
        //} else {
            //alert("Could not find it.");
        //}
    //}
//}

