//===========================================================
//    FICHIER : tp2.js
//    PROJET  : LeDOM
//    DATE    : 10/04/2026
//    AUTEUR  : Stephane Brisse
//===========================================================
function testDomTp2() {
     const new_ref = document.createElement("p");
     new_ref.textContent = "nouveau paragraphe";
     // const papa = document.querySelector("main");
     // papa.append(new_ref);
     // setTimeout(() => {
     //     new_ref.remove();
     // }, 5000);



// const new_ref1 = document.createElement("p");
// new_ref1.textContent = "paragraphe beforebegin";
// document.querySelector("main").insertAdjacentHTML("beforebegin", new_ref1);

// const new_ref2 = document.createElement("p");
// new_ref2.textContent = "paragraphe afterbegin";
// document.querySelector("main").insertAdjacentHTML("afterbegin", new_ref2);

// const new_ref3 = document.createElement("p");
// new_ref3.textContent = "paragraphe beforeend";
// document.querySelector("main").insertAdjacentHTML("beforeend", new_ref3);

// const new_ref4 = document.createElement("p");
// new_ref4.textContent = "paragraphe afterend";
// document.querySelector("main").insertAdjacentHTML("afterend", new_ref4);

let annonces = [
   {
   categorie : "accessoire",
   image : "../img/supporttv.webp",
   titre : "support_tv",
   description : "un support pour tv",
   prix : 65,
   datePublication : "24-04-2026",
   nomVendeur: "brisse"
   },
   {
   categorie : "electricite",
   image : "../img/pompe.webp",
   titre : "pompe à eau",
   description : "pompe 12v",
   prix : 45,
   datePublication : "21-04-2026",
   nomVendeur: "toto"},
   {
   categorie : "electricite",
   image : "../img/victron.webp",
   titre : "convertisseur",
   description : "convertisseur victron 250w",
   prix : 45,
   datePublication : "24-04-2026",
   nomVendeur: "toto"}
]
function ajouts() {
const pGrid = document.querySelector(".annonces-grid");
   pGrid.innerHTML = "";
annonces.forEach((annonce) => {
        const fiche = `
                <li>
                    <article>
                        <figure>
                            <img src="${annonce.image}" alt="${annonce.titre}" loading="lazy">
                        </figure>
                        <div class="annonce_content">
                            <h3>${annonce.titre}</h3>

                            <p class="annonce_description">
                               ${annonce.description}
                            </p>
                            <p class="annonce_price">
                               ${annonce.prix}
                            </p>

                            <p class="annonce_date">
                                Publié le : ${annonce.datePublication}
                            </p>

                            <footer class="annonce_footer">
                                <p class="vendeur">Vendeur : ${annonce.nomVendeur}</p>
                                <button type="button" class="btn-contact">Contacter le vendeur</button>
                            </footer>
                        </div>
                    </article>
                </li>
            `;
            pGrid.insertAdjacentHTML("beforeend", fiche);
            pGrid.insertAdjacentHTML("afterbegin", fiche);
          });
     }
//  ajouts();
// const new_ref5 = document.createElement("p");
// new_ref5.textContent = "paragraphe before";
// const insert = document.querySelector("p");
// insert.before(new_ref5);
// const clone = new_ref5.cloneNode(true);
// clone.textContent = "paragraphe after";
// insert.after(clone);
}
