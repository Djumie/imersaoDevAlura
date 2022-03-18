function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertidoDolar = document.getElementById(
    "valorConvertidoDolar"
  );
  var valorConvertidoDolar = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertidoDolar.innerHTML = valorConvertidoDolar;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmEuro = valorEmDolarNumerico * 0.9;
  console.log(valorEmEuro);
  var elementoValorConvertidoEuro = document.getElementById(
    "valorConvertidoEuro"
  );
  var valorConvertidoEuro = "O resultado em euro é € " + valorEmEuro;
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
}

function ConverterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmBitcoin = valorEmDolarNumerico * 0.000024;
  console.log(valorEmBitcoin);
  var elementoValorConvertidoBitcoin = document.getElementById(
    "valorConvertidoBitcoin"
  );
  var valorConvertidoBitcoin = "O resultado em Bitcoin é BTC " + valorEmBitcoin;
  elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
}
