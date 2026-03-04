let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";
let nomCorrige = nom.trim();

if (nomCorrige === "") nomCorrige = "Inconnu";
let ageNumber = Number(age);
let ageValide = !Number.isNaN(ageNumber) && ageNumber > 0;
let indexAt = email.indexOf("@");
let emailValide = indexAt !== -1 && email.indexOf(".", indexAt) !== -1;
let score = parseInt(scoreJeu);
if (Number.isNaN(score)) score = 0;

let admin = estAdmin === "true" ? true : false;
let derniereConn = derniereConnexion ?? "Jamais connecté";
let nbConn = Number(nombreConnexions);
let nbConnAffichage = nbConn === 0 ? "Aucune connexion" : nbConn;

console.log("===== RAPPORT UTILISATEUR =====");
console.log("nom              :", `"${nomCorrige}" (corrigé : espaces supprimés)`);
console.log("age              :", ageNumber, ageValide ? "(valide)" : "(invalide)");
console.log("email            :", `"${email}"`, emailValide ? "(valide)" : "(invalide : pas de point après @)");
console.log("scoreJeu         :", score, `(extrait depuis "${scoreJeu}")`);
console.log("estAdmin         :", admin, "(attention : Boolean(\"false\") = true, conversion manuelle requise)");
console.log("derniereConnexion:", `"${derniereConn}" (valeur par défaut via ??)`);
console.log("nombreConnexions :", nbConnAffichage, `(0 après conversion)`); 
console.log("================================");