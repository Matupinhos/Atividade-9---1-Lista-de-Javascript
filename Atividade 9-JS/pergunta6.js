let letra = prompt("Insira uma letra")

let vogais = ["a", "e", "i", "o", "u"]

if (vogais.indexOf(letra.toLowerCase()) !== -1) {
  console.log("Vogal")
} else {
  console.log("Consoante")
}
