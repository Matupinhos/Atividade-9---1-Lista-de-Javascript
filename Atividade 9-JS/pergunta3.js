function ganhoGastos() {
    let ganho = 0;
    let gastos = 0;
    let somatorioGanhos = 0;
    let somatorioGastos = 0;
    let texto = "";
    for (var i = 0; i <12; i++) {
        ganho = parseFloat(prompt("Digite o ganho da sua impresa do mês " + (i+ 1) + ": "));
        somatorioGanhos = somatorioGanhos + ganho;
        console.log(somatorioGanhos)
        gastos = parseFloat(prompt("Digite seus gastos das usa impresa do mês " + (i+ 1) + ": "));
        somatorioGastos = somatorioGastos + gastos;  
        console.log(somatorioGastos)
    };
    if (somatorioGanhos > somatorioGastos) {
        texto = "Sua empresa saiu no lucro!"
    } else if (somatorioGanhos = somatorioGastos){
        texto = "Sua empresa não saiu no lucro nem no prejuizo.";
    } else {
        texto = "Sua empresa saiu no prejuízo!";
    };
    console.log("Os ganhos da sua empresa foram: " + somatorioGanhos);
    console.log("Os gastos da sua empresa foram: " + somatorioGastos);
    console.log(texto);

};
ganhoGastos()