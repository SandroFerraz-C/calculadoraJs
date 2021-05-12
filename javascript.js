function insert(num) {

    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;

}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function back() {
    var deleteOne = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = deleteOne.substring(0, deleteOne.length - 1);
}

function calcular() {
    var resultado = document.getElementById('result').innerHTML;

    if (resultado) {
        document.getElementById('result').innerHTML = eval(resultado);
    } else {
        document.getElementById('result').innerHTML = "Inserir numero";
    }
}