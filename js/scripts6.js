function exe6(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let sal = numero1 + (numero2 * 0.04)

    document.getElementById("sal").textContent = "O Novo Preço Será: R$" + sal;
}