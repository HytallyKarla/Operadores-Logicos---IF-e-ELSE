/*Conhecendo seu usuário
1. Você deve solicitar apenas o nome e idade do seu usuário e salvar em
variáveis
2. Com o valor da idade em mãos, crie uma variável AnoNascimento e grave o
ano de nascimento do usuário, considerando o ano atual como 2022.
3. Com esses dados você deve exibir o seguinte texto, substituindo com os
valores recebidos: Olá NOMEUSUARIO, você tem IDADE anos que é um
número (PAR OU IMPAR de acordo com a idade) e nasceu no ano:
AnoNascimento que é um número (PAR OU IMPAR de acordo com a idade)
4. Se o usuário já for maior de idade, em outra linha você deve exibir: “Está
liberado o consumo de bebidas alcoólicas"*/



var nome = prompt ("nome")
var idade = prompt ("idade")
var anoatual = 2022 
var AnoNascimento = anoatual - idade


console.log (nome)
console.log (idade)
console.log (AnoNascimento)

var AnoPar

if( AnoNascimento % 2 == 0){
    AnoPar = ("ano par")
} else {
    AnoPar = ("ano impar")
}


var ParImpar 

if(idade % 2 == 0 ){
    ParImpar = ("Par")
}
else {
    ParImpar = ("Impar")
}

console.log ("Ola "+ nome + " você tem " + idade + " anos que é um número " + ParImpar + " e nasceu no ano: " + AnoNascimento + " que é um " + AnoPar)

if(idade >= 18){
    console.log ("EStá liberado o consumo de bebida alcoolica")
} else {
    console.log ("Não pode beber")
}