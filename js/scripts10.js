function exe10() {
    let numero1 = Number(document.getElementById("numero1").value);

    let area = numero1 * numero1

    document.getElementById("area").textContent = "Área do quadrado: " + area;
}