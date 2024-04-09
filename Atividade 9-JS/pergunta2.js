let secs = parseInt(prompt("Escolha quando a contagem regressiva vai começar: "))

function contagemRegressiva() {
    if (secs > 0) {
        console.log(secs + " segundos restantes");
        secs--;
        setTimeout(contagemRegressiva, 1000);
    } else {
        console.log("Acabou o tempo")
    }  
}
contagemRegressiva()