function exe9(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);

    let area = ((numero1 + numero2) * numero3) / 2

    document.getElementById("area").textContent = "Área do trapézio: " + area;
}