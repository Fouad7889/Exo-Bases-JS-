var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(tab.length);
// On va ajouter une centaine de valeur au tableau
for (var i = 0; i < 100; i++) {
    var mavalue = Math.random() + 20;
    tab.push(mavalue);
};
console.log(tab.length);


/* Une autre façon d'ajouter des éléments 
var a = 0;
while(a < 100){
    var mavalue = Math.random() + 20;
    tab.push(mavalue);
    a++;
}
*/

/* Encore une autre manière d'ajouter des valeurs
do{
    var mavalue = Math.random() + 20;
    tab.push(mavalue);
    a++;
}
while (a < 100)

*/



// On parcourt le tableau, on récupère chaque valeur, et on en fait la somme
var somme = 0;
for (var i = 0; i < tab.length; i++) {
    somme = somme + tab[i];
};
console.log("somme" + somme);

var moyenne = somme / tab.length;
console.log(moyenne);

var tab1 = [];

for (var i = 0; i < tab.length; i++) {
    if (i <= 10) {
        tab1.push(tab[i]);
        console.log(tab1);
    }
};

/*else (i > 10) {
 
    console.log(tab2);
};
};*/



console.table(tab);

