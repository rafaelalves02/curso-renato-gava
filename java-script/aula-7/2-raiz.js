window.onload = function(e) {

    var btn1 = document.getElementById("btn1");

    btn1.onclick = function(e) {
        var numero = parseInt(document.getElementById("txt1").value);

        var calculo = raizQuadrada(numero);

        alert(calculo);
    }

    function raizQuadrada(numero) {
        var raiz = numero * numero;
        return raiz;
    }

}