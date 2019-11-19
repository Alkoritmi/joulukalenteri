const kuluvaPaiva = new Date();

function avaaLuukku(luukkuNro) {

    //tarkistetaan onko luukku avattavissa
    //HUOM! Tämä korjattava vielä lopulliseen versioon --> kk=11
    if (kuluvaPaiva.getMonth()+1 < 10 || kuluvaPaiva.getDate() < luukkuNro) {
        //näytetään luukkunumeron mukainen viesti
        alert(luukkuNro + ". päivä: " + messages[luukkuNro - 1]);
    }
          
}


