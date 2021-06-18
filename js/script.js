// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


// snack 1

const bici = [
    {
        nome: "biciA",
        peso: 10
    },

    {
        nome: "biciB",
        peso: 15
    },

    {
        nome: "biciC",
        peso: 12
    }
];

let biciLeggera = bici[0];
for (let i = 1; i < bici.length; i++){
    if (biciLeggera.peso > bici[i].peso) {
        biciLeggera = bici[i].peso;
    }
}

const {nome, peso} = biciLeggera;

document.getElementById("demo").innerHTML = `
    La bici più leggera è la ${nome}, con peso pari a ${peso}
`;




// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function).
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo 
// nomi e falli subiti. Stampiamo tutto in console.

// snack 2

const squadra = [
    {
        nome: "Milan",
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: "Inter",
        punti: 0,
        falliSubiti: 0
    },

    {
        nome: "Juventus",
        punti: 0,
        falliSubiti: 0
    }
];

var randomGen;


for (let i = 0; i < squadra.length; i++){
    squadra[i].punti = randomGen(30, 100);
    squadra[i].falliSubiti = randomGen(100, 1000);
    console.log(squadra[i]);
}

//function

function randomGen(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}