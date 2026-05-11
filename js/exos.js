//===========================================================
//    FICHIER : exos.js
//    PROJET  : LeDOM
//    DATE    : 10/05/2026
//    AUTEUR  : Stephane Brisse
//===========================================================

function exo() {
     const cmpt = `
<h1>Exercice 1:</h1>
<div class="exo1">
  <button id="btn">
    Afficher la réponse
  </button>
</div>
<p id="reponse" class="cache">
  Le DOM est une représentation...
</p>

<h1>Exercice 2:</h1>
<h2 id="compteur">0</h2>
<div class="bt">
     <button id="btn_dec">
        Décrémenter
     </button>

     <button id="btn_inc">
        Incrémenter
     </button>
</div>
<div class="bt3">
<button id="btn_reset">
  Réinitialiser
</button>
</div>
<h1>Exercice 3:</h1>
<div class="demo-section">
    <div id="hover-box">Passe ta souris sur cette zone</div>
    <div class="status-row">
      <span>État : <span id="etat">en attente</span></span>
      <span id="compteur-wrap">
        <span>entrées :</span>
        <span id="compteur2">0</span>
      </span>
    </div>
</div>
`;
     const ppointeur = document.querySelector("main");
          ppointeur.innerHTML = "";
          ppointeur.insertAdjacentHTML("beforeend", cmpt);

// ==================================================
// EXO1
// ==================================================
     const btnresp = document.getElementById(`btn`);
     btnresp.addEventListener('click', () => {
     const ptrbt =  document.querySelector("#reponse");
     ptrbt.classList.toggle("cache");
          if (reponse.classList.contains("cache")) {
             btnresp.textContent = "Afficher la réponse";
          } else {
             btnresp.textContent = "Masquer la réponse";
          }
     });
// ==================================================
// EXO2
// ==================================================
     const compteur = document.getElementById('compteur');
     const btnInc   = document.getElementById('btn_inc');
     const btnDec   = document.getElementById('btn_dec');
     const btnReset = document.getElementById('btn_reset');
     let valeur = 0;

     btnInc.addEventListener('click', () => {
     valeur++;
     majAffichage();
     });

     btnDec.addEventListener('click', () => {
     valeur--;
     majAffichage();
     });

     btnReset.addEventListener('click', () => {
     valeur = 0;
     majAffichage();
     });
     function majAffichage() {
          compteur.textContent = valeur;
     }

// ==================================================
// EXO3
// ==================================================
const box = document.getElementById('hover-box');
  let compteur2 = 0;

  box.addEventListener('mouseenter', function() {
    box.classList.add('actif');
    box.textContent = 'Souris détectée !';

    compteur2++;
    document.getElementById('compteur2').textContent = compteur2;
    const etat = document.getElementById('etat');
    etat.textContent = 'dedans';
    etat.classList.add('dedans');
  });

  box.addEventListener('mouseleave', function() {
    box.classList.remove('actif');
    box.textContent = 'Passe ta souris sur cette zone';

    const etat = document.getElementById('etat');
    etat.textContent = 'en attente';
    etat.classList.remove('dedans');
  });
}
