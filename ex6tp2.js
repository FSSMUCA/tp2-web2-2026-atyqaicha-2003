let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let variables = { nom, age, ville, score, actif };

console.log("=== Partie A : ?? ===");
for (let key in variables) {
  console.log(key, "?? 'valeur par défaut' ->", variables[key] ?? "valeur par défaut");
}

console.log("\n=== Partie B : || ===");
for (let key in variables) {
  console.log(key, "|| 'valeur par défaut' ->", variables[key] || "valeur par défaut");
}

console.log("\n=== Partie C : comparaison ?? vs || ===");
for (let key in variables) {
  let resultatNullish = variables[key] ?? "valeur par défaut";
  let resultatOr = variables[key] || "valeur par défaut";
  let comparaison = (resultatNullish === resultatOr) ? "même résultat" : "résultat différent";
  console.log(key, ": ?? et || ->", comparaison);
}