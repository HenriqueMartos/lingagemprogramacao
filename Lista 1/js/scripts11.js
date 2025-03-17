function exe11(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let area = (numero1 * numero2) / 2

    document.getElementById("area").textContent = "Área do losango: " + area;
}