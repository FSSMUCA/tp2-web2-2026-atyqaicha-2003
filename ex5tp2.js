let nombres =[0,NaN, Infinity , -Infinity ,42 , 3.14 , Number.MAX_SAFE_INTEGER+1 ,-0]
for (let i = 0; i < nombres.length; i++) {
  let val = nombres[i];
  let affichage = "";

  if (Number.isNaN(val)) {
    affichage = "INVALIDE";
  } 

  else if (val === Infinity || val === -Infinity) {
    affichage = "INFINI";
  } 
  
  else if (val === 0 && 1 / val === -Infinity) {
    affichage = "ZERO NEGATIF";
  } 

  else if (Number.isInteger(val)) {
    if (Math.abs(val) <= Number.MAX_SAFE_INTEGER) {
      affichage = "ENTIER SUR";
    } else {
      affichage = "ENTIER HORS LIMITES";
    }
  } 
  else {
    affichage = "DECIMAL";
  }

  console.log(val, "->", affichage);
}