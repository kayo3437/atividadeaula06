let numeros = [10, 20, 30, 40, 50];

numeros.push(30);
console.log("Array após .push(60):", numeros);

let removerelemento = numeros.pop();
console.log("Elemento removido com .pop():", removerelemento);
console.log("Array após .pop():", numeros);

let index = numeros.indexOf(30);
console.log("Posição do número 30 no array:", index);
