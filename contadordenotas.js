/*Faça um algoritmo que lê um valor inteiro de reais e calcula o menor valor possível de
notas de 100, 50, 10, 5 e 1 que o valor lido pode ser decomposto. Exiba o valor lido e a
decomposição. Ex.: 576 // 5 nota(s) de 100 1 nota(s) de 50 2 notas(s) de 10 1
nota(s) de 5 1 nota(s) de 1*/


var valor = parseInt(prompt("Digite um número"))

var cem = parseInt(valor / 100)
valor = valor - (cem * 100)
var cinquenta = parseInt(valor / 50)
valor = valor - (cinquenta * 50)
var dez = parseInt(valor / 10)
valor = valor - (dez * 10)
var cinco = parseInt(valor / 5)
valor = valor - (cinco * 5)
var um = parseInt(valor / 1)

console.log(cem + " Notas de 100")
console.log(cinquenta + " Notas de 50")
console.log(dez + " Notas de 10")
console.log(cinco + " Notas de 5")
console.log(um + " Notas de 1")

