var joulukalenteri = document.getElementById("tausta");
var kuluvaPaiva = new Date();

//saa parametriksi joulukalenteri-kuvan ja kuluvan päivän
function Luukku (joulukalenteri, paiva) {
    
    
    //luodaan luukut ja tarkistetaan onko luukku avattavissa
    this.content = function () {
        
        
    }
    
}


//sivun alustuksessa kutsutaan funktiota, joka edelleen luo luukut
(function() {
	var luukut = [];

	for(var i = 0; i < 24; i++) {

		luukut[i] = new Luukku(joulukalenteri, i + 1);
		luukut[i].content();

	}

	return luukut;
})();