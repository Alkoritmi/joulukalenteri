const kuluvaPaiva = new Date();

function avaaLuukku(luukkuNro) {
    if (kuluvaPaiva.getMonth() + 1 < 10 || kuluvaPaiva.getDate() >= luukkuNro) {
        //näytetään luukkunumeron mukainen viesti
        alert(luukkuNro + ". päivä: " + messages[luukkuNro - 1]);
    }
}