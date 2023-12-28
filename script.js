function calc(){
    var num1 = parseFloat(document.getElementById("primeiroNumero").value)
    var num2 = parseFloat(document.getElementById("segundoNumero").value)

    var res = num1 + num2;

    document.getElementById("display").value = res;
}