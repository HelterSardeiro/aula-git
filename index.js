let imc = (peso, altura) => {
    return peso/(altura*altura);
}

console.table({'IMC': Math.round(imc(120, 1.75))});