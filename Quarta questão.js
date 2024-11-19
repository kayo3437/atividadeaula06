let x = 100;

function testScope() {
    let x = 50;
    console.log("Valor de x dentro da função (escopo local):", x);

    if (true) {
        let x = 30;
        console.log("Valor de x dentro do bloco if:", x);
    }

    console.log("Valor de x após o bloco if (ainda dentro da função):", x);
}

testScope();

console.log("Valor de x no escopo global:", x);
