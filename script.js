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
            res = num1-num2
            break;

        case '*':
            res = num1*num2
            break;

        case '/':
            res = num1/num2
            break;
    }

    document.getElementById("display").value = res;

    var newHistoey = "<div>" + num1 + " " + op + " " + num2 + " " +"=" +  " " + res + "</div>";
    var history = document.getElementById("history");

    history.innerHTML = newHistoey + history.innerHTML

    if(history.children.length > 10){
        history.removeChild(history.childNodes[10]);
    }






}