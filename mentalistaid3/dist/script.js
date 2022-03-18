window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
var numeroSecreto = parseInt(Math.random() * 11);

for (var tentativa = 3; tentativa <= 0; tentativa--);
{
  function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    var numeroTentativas = document.getElementById("tentativas");
    //console.log(chute);
    if (chute === numeroSecreto) {
      elementoResultado.innerHTML = "Você Acertou";
      return function Chutar() {};
    } else if (chute < 0 || chute > 10) {
      elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
      elementoResultado.innerHTML = "Errou";
      numeroTentativas.innerHTML =
        "Você tem mais " + (tentativa - 1) + " tentativas.";
      if (tentativa == 0) {
        numeroTentativas.innerHTML =
          "Infelizmente você não acertou em 3 tentativas.\nMelhor sorte da próxima vez!";
        return function Chutar() {};
      }
      tentativa = tentativa - 1;
    }
    console.log(tentativa);
    //tentativa = tentativa - 1;
  }
}