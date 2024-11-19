let phrase = "JavaScript is fun!";

let counter = 0;
for (let i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
    if (phrase[i].toLowerCase() === 'a') {
        counter++;
    }
}

console.log(`A letra 'a' aparece ${counter} vezes na frase.`);

let numero = 4;
while (numero <= 10) {
    console.log(numero);
    numero++;
}
