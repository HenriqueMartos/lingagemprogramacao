function exe8(){
    let numero1 = Number(document.getElementById("numero1").value);

    let gramas = numero1 * 1000

    document.getElementById("gramas").textContent = "Peso em gramas: " + gramas;
}