let valeurs =[0,1,"", "0" ,null,undefined,NaN,false,[],{}];

for(let i =0; i< valeurs.length; i++)
{
    let valeur = valeurs[i];
    let isTruthy ;
    if (valeur){
        isTruthy = "truthy";

    }
    else{
        isTruthy="falsy";
    }
    console.log(String(valeur), "->" , isTruthy);
}