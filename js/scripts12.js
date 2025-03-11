function exe12(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let sal = (numero2 / numero1).toFixed(2)

    document.getElementById("sal").textContent = "Quantidade de sal. mínimo em seu salário: " + sal;
}