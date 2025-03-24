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
function exe6(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let op = Number(document.getElementById("op").value)

    switch(op){
        case 1:
            //resp = num1 ** num2 forma de fazer o calcúlo tmb
            document.getElementById("resp").textContent = Math.pow(num1, num2);
        break
        case 2:
            document.getElementById("resp").innerHTML = Math.sqrt(num1).toFixed(2) + " <br/> " + Math.sqrt(num2).toFixed(2);
        break
        case 3:
            document.getElementById("resp").innerHTML = Math.cbrt(num1).toFixed(2) + " <br/> " + Math.cbrt(num2).toFixed(2);
        break
    }
}
function exe7(){
    let sal = Number(document.getElementById("sal").value)
    if(sal < 500){
        resp = sal + (sal*0.3)
        document.getElementById("resp").textContent = "Novo salário será: R$" + resp;
    }
    else{
        document.getElementById("resp").textContent = "Novo salário será: R$" + sal;
    }

}
function exe8(){
    let sal = Number(document.getElementById("sal").value)
    if(sal <= 300){
        resp = sal + (sal*0.35)
        document.getElementById("resp").textContent = "Novo salário será: R$" + resp;
    }
    else{
        resp = sal + (sal*0.15)
        document.getElementById("resp").textContent = "Novo salário será: R$" + resp;
    }
}
function exe9(){
    let sal = Number(document.getElementById("sal").value)
    
    if (sal <= 200){
        resp = (sal*0.10)
        //document.getElementById("resp").innerHTML = "Saldo Médio: " + sal + "<br/>Crédito disponíel: R$" + resp;
    }
    else if(sal > 200 && sal <= 300){
        resp = (sal*0.20)
       // document.getElementById("resp").innerHTML = "Saldo Médio: " + sal + "<br/>Crédito disponíel: R$" + resp;
    }
    else if(sal > 300 && sal <= 400){
        resp = (sal*0.25)
       // document.getElementById("resp").innerHTML = "Saldo Médio: " + sal + "<br/>Crédito disponíel: R$" + resp;
    }
    else if(sal > 400){
        resp = (sal*0.30)
       // document.getElementById("resp").innerHTML = "Saldo Médio: " + sal + "<br/>Crédito disponíel: R$" + resp;
    }
    document.getElementById("resp").innerHTML = "Saldo Médio: " + sal + "<br/>Crédito disponível: R$" + resp; //código limpo e menor (peso de arquivo)
}
function exe10(){
    let custo = Number(document.getElementById("custo").value)

    if (custo <= 12000){
        valor = custo + (custo*0.05) 
    }
    else if (custo >12000 && custo <=25000){
        valor = custo + (custo*0.1) + (custo*0.15)
    }
    else if (custo > 25000){
        valor = custo + (custo*0.15) + (custo*0.20)
    }
    document.getElementById("resp").innerHTML = `Preço ao consumidor final: R$${valor}`;
}
