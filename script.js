

		var bouton = document.getElementById("bouton");
		var multiplication = document.getElementById("compteur");
		var Score = document.getElementById("score");
		score = 0;
		compteur = 1;
		tarif= 10;
function affichage(){
	Score.innerHTML = score ; 

}


function colMult(){
   multiplication.innerHTML = " multiplicateur x " + compteur + " prix : " + valeurMult() ;
}


function clic() {
	score = score + compteur ;
	affichage();
}


function valeurMult(){
	return 10 * compteur ;
}


function achat(){
	if ( score >= valeurMult() ) {
		score = score - tarif ;
		compteur = compteur + 1 ;
		affichage();
		colMult();
	} 
		     }

affichage();
colMult();

