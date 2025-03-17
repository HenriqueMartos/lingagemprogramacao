function exe2(){

    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let numero3 = document.getElementById("numero3").value;

    let multi = numero1 * numero2 * numero3

    document.getElementById("multi").textContent = "O Resultado é: " + multi;
}