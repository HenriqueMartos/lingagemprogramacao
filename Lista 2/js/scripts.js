function seguir(){
    alert("")
}
function exe1(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    let medar = (nota1 + nota2 + nota3 + nota4) / 4
    if (medar >= 7){
        document.getElementById("medar").textContent = "Aprovado com média " + medar;
    }
    else{
        document.getElementById("medar").textContent = "Reprovado com média " + medar;
    }
}
function exe2(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)


    let medar = (nota1 + nota2) / 2
    if ((medar >= 7) && (medar <=10 )){
        document.getElementById("medar").textContent = "Aprovado com média " + medar;
    }
    else if ((medar >=3) && (medar <7)) {
        document.getElementById("medar").textContent = "Exame com média " + medar;
    }
    else if ((medar >=0) && (medar <3)) {
        document.getElementById("medar").textContent = "Reprovado com média " + medar;
    }
    else{
        document.getElementById("medar").textContent = "Erro! Revise as notas inseridas. Média: " + medar;
    }
}