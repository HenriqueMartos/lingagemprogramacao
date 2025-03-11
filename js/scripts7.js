function exe7(){
    let numero1 = Number(document.getElementById("numero1").value);

    let peso15 = (numero1 * 1.15).toFixed(2)
    let peso20 = (numero1 * 0.80).toFixed(2)

    document.getElementById("peso15").textContent = "Novo peso aumentado: " + peso15;
    document.getElementById("peso20").textContent = "Novo peso reduzido " + peso20;
}