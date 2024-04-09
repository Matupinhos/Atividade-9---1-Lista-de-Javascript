function ordemDescrescente() {
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    var lista = [];
    num1 = parseFloat(prompt("Digite o primeiro número: "));
    num2 = parseFloat(prompt("Digite o segundo número: "))
    num3 = parseFloat(prompt("Digite o terceiro número: "))
    num4 = parseFloat(prompt("Digite o quarto número: "))
    lista = [num1, num2, num3, num4];
    console.log(lista.sort((a, b) => b - a));
};
ordemDescrescente();
