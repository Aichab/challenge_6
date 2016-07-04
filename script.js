

		var bouton = document.getElementById("bouton");
		var multiplication = document.getElementById("compteur");
		var Score = document.getElementById("score");
		var test=document.getElementById("auto");
		score = 0;
		compteur = 1;
		tarif= 10;
		nombreAuto = 1;
	
   
function affichage(){
	Score.innerHTML = " score:  " + score ; 
}


function colMult(){
   multiplication.innerHTML = " multiplicateur x " + compteur + " prix : " + valeurMult() ;
}


function clic() {
	score = score + compteur ;
	affichage();

}
function valeurMult(){
	return 50 * compteur ;
}


function achat(){
	if ( score >= valeurMult() ) {
		score = score - tarif ;
		compteur = compteur + 1 ;
		affichage();
		colMult();
	} 
	else {
        alert("Votre score est insuffisant !");
    }
		     }

function autoclic(){
	
	var clicAuto = setInterval(clic, 1000 );
		     }

function achatAutoclic(){
    if ( score >= prixAchat()) {
		score = score - prixAchat() ;
        autoclic();
	} else {
		 alert("clic un peu plus");
	}
							}
function afficheAuto(){
    test.innerHTML = " je fais des clics automatiques x " + nombreAuto + " prix:  " + prixAchat() ;
}


function prixAchat(){
	return 200 * nombreAuto;
}

affichage();
colMult();
afficheAuto();


