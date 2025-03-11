function exe4(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let mediap = ((numero1 * 2) + (numero2 * 3)) / 5

    document.getElementById("mediap").textContent = "O Resultado é: " + mediap;
}