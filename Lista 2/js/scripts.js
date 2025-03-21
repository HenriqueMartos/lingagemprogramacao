function seguir(){
    alert("Você está seguindo Henrique Martos")
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

function exe3(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    if (num1 > num2){
        document.getElementById("menor").textContent = "O Menor número é " + num2;
    }
    else if(num1 < num2){
        document.getElementById("menor").textContent = "O Menor número é " + num1;
    }
    else{
        document.getElementById("menor").textContent = "Os números são iguais! " ;
    }
}
function exe4(){
        let num1 = Number(document.getElementById("num1").value)
        let num2 = Number(document.getElementById("num2").value)
        let num3 = Number(document.getElementById("num3").value)
    
        if (num1 >= num2 && num1 >= num3) {
            document.getElementById("maior").textContent = "O Maior número é " + num1;
        }
        else if (num2 >= num1 && num2 >= num3) {
            document.getElementById("maior").textContent = "O Maior número é " + num2;
        }
        else if(num3 >= num1 && num3 >= num2) {
            document.getElementById("maior").textContent = "O Maior número é " + num3;
        }
    }
function exe5(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let op = Number(document.getElementById("op").value)

    // if (op == 1){
    //     resp = (num1 + num2) / 2
    //     document.getElementById("resp").textContent = "A média dos valores é " + resp;
    // }
    // else if (op == 2){
    //     if (num1 >= num2){
    //         resp = num1 - num2
    //         document.getElementById("resp").textContent = "A diferença dos valores é " + resp;
    //     }
    //     else {
    //         resp = num2 - num1
    //         document.getElementById("resp").textContent = "A diferença dos valores é " + resp;
    //     }
    // }
    // else if(op == 3){
    //     resp = num1 * num2
    //     document.getElementById("resp").textContent = "O produto dos valores é " + resp;
    // }
    // else if(op == 4){
    //     resp = num1 / num2
    //     document.getElementById("resp").textContent = "A divisão dos valores é " + resp;
    // }

    switch (op){
        case 1:
            resp = (num1 + num2) / 2
            document.getElementById("resp").textContent = "A média dos valores é " + resp;
        break
        case 2:
            if (num1 >= num2){
                 resp = num1 - num2
                 document.getElementById("resp").textContent = "A diferença dos valores é " + resp;
            }
            else {
                resp = num2 - num1
                document.getElementById("resp").textContent = "A diferença dos valores é " + resp;
            }
        break
        case 3:
            resp = num1 * num2
            document.getElementById("resp").textContent = "O produto dos valores é " + resp;
        break
        case 4:
            resp = num1 / num2
            document.getElementById("resp").textContent = "A divisão dos valores é " + resp;
    }
}