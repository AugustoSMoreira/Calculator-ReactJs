function CalculatorService() {
  const sum = "+";
  const sub = "-";
  const split = "/";
  const mult = "*";
  function calculate(number1, number2, operation) {
    let result;

    switch (operation) {
      case sum:
        result = number1 + number2;
        break;
      case sub:
        result = number1 - number2;
        break;
      case split:
        result = number1 / number2;
        break;
      case mult:
        result = number1 * number2;
        break;
      default:
        result = 0;
    }

    return result;
  }

  function concatNumbers(numberActual, numberConcatenate) {
    // caso primeiro digito for '.', concatena '0' antes do ponto
    if (numberConcatenate === "." && numberActual === "0") {
      return "0.";
    }
    // caso contenha apenas 0 ou null, reinicia o valor
    if (numberActual === "0" || numberActual === null) {
      numberActual = " ";
    }
    // caso '.' digitado e já contenha um ponto, apenas retornar
    if (numberConcatenate === "." && numberActual.indexOf(".") > -1) {
      return numberActual;
    }
    
    return numberActual + numberConcatenate;
  }

  return [calculate, concatNumbers, sum, sub, split, mult];
}

export default CalculatorService;
