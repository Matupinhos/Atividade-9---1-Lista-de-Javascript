console.log("[1] Chocolate")
console.log("[2] Morango")
console.log("[3] Creme")
console.log("[4] Manga")
console.log("[5] Melancia")
console.log("[6] Vanilla Ice")
console.log("[7]. Céu Azul")
console.log("[8]] Brownie")
console.log("[9] Hawaiano ")
var escolha = parseInt(prompt("Digite o sabor do picolé que você quer: "))

switch (escolha) {
    case 1:
        console.log("Chocolate custa R$:1,50");
        break
    case 2:
        console.log("Morango custa R$:2,50");
        break
    case 3: 
        console.log("Creme custa R$:2,50");
        break
    case 4:
        console.log("Manga custa R$:3,20");
        break
    case 5:
        console.log("Melancia custa R$:3,40");
        break
    case 6:
        console.log("Vanilla Ice custa R$:3,00");
        break
    case 7:
        console.log("Céu Azul custa R$:3,60");
        break
    case 8:
        console.log("Brownie custa R$:4,00");
        break
    case 9:
        console.log("Hawaiano custa R$:5,00");
        break
}