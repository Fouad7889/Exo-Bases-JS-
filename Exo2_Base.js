var tab = [];
for (i = 0; i < 16; i++) {
    var myTab = Math.floor(Math.random() * 10);
    tab.push(myTab);
};
console.log(tab);

/*var i = 0;
while (i < 5) {
    var myTab1 = Math.floor(Math.random() * 10);
    tab.push(myTab);
    i++;
};

do {
    var myTab2 = Math.floor(Math.random() * 10);
    tab.unshift(myTab);
    i++;
}

while (i < 10);*/



/*for (i = tab.length / 2; i < tab.length; i++) {

    tab[i] = tab[i] + 3;
};

console.log(tab);

for (i = 0; i < tab.length / 2; i++) {

    tab[i] = tab[i] + 3;
};

console.log(tab);

for (i = 0; i < tab.length; i++) {

    tab[i] = tab[i] + 3;
};
console.log(tab);*/

// Ne pas oublier de mettre -1 soit dans la boucle soit à i = tab.length -1
for (i = tab.length - 1; i >= 0; i--) {

    tab[i] = tab[i] + 3;
};

console.log(tab);