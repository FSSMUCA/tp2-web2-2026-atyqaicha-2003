let paires = [[0, ""],[0, "0"],[0, false],["", false],[null, undefined],[null, false],[NaN, NaN],[1, "1"],[" \t\n ", 0]];

let compteur = 0;
function afficher(val) {
  let res = JSON.stringify(val);
  return res === undefined ? "undefined" : res;
}

for (let i = 0; i < paires.length; i++) {
  let a = paires[i][0];
  let b = paires[i][1];

  let eqDouble = (a == b);
  let eqTriple = (a === b);

  if (eqDouble === true && eqTriple === false) {
    compteur++;
  }

  console.log(
    afficher(a), "==", afficher(b), "->", eqDouble,
    "|",
    afficher(a), "===", afficher(b), "->", eqTriple
  );
}

console.log("---");
console.log(compteur, "paire(s) où == et === donnent des résultats différents");