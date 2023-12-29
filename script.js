function calc(op){
    var ope = document.getElementById("operacao").value
    var num1 = parseFloat(document.getElementById("primeiroNumero").value)
    var num2 = parseFloat(document.getElementById("segundoNumero").value)

     
    console.log(ope);
    
    switch (op) {
        case '+':
            res = num1+num2
            break;

        case '-':
            res = num1-num2"
            break;

        case '*':
            res = num1*num2
            break;

        case '/':
            res = num1/num2
            break;
    }

    



    document.getElementById("display").value = res;




}