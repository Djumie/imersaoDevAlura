var nome = "João Queiroz";

var nota1 = -10; // Esta é a nota do primeiro bimestre
var nota2 = -5.5;
var nota3 = -7.3;
var nota4 = 9.2;
var resultado;

var media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 0 && media < 6) {
	resultado = "Reprovado";
} else if (media >= 6 && media <= 10){
	resultado = "Aprovado";
} else {
	resultado = "Enganado";
} 

var notaFixada = media.toFixed(1);

console.log("Bem-vindo " + nome + "!\nA sua média é: " + notaFixada + ".\nVocê foi " + resultado + ".");

//console.log("A sua média é: " + notaFixada + ".\n")
//console.log("Você foi " + resultado +  ".")