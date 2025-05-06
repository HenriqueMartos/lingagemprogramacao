function seguir() {
    alert('Você agora está seguindo Henrique Martos')
}

function exe2() {
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro // guarda o lucro do preço do teatro
    let saida = ""
    while (preco >= 1.0) {
        lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${despesa} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
    }
    document.getElementById("tabela").innerHTML = `<br> ${saida}`
}
function exe31() {
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0;
    let idade

    for (let i = 1; i <= 8; i++) {
        idade = Number(prompt(`Informe a idade ${i}`))
        if (idade >= 0 && idade <= 15) {
            faixa1++
        } else if (idade > 15 && idade <= 30) {
            faixa2++
        } else if (idade > 30 && idade <= 45) {
            faixa3++
        } else if (idade > 45 && idade <= 60) {
            faixa4++
        } else if (idade > 60) {
            faixa5++
        } else  {
            alert('Idade inválida')
        }
    }
    document.getElementById("resultado").innerHTML =
     ` F1: ${faixa1} </br> F2: ${faixa2} </br> F3: ${faixa3} </br> F4: ${faixa4} </br> F5: ${faixa5}
     </br> F1: ${faixa1/8*100} % </br> F5: ${faixa5/8*100} %`
}
function exe4(){
    let tabuada = ""
    let numero  = Number(document.getElementById("numero").value);
    for (let i = 1; i <= 10; i++) {
        tabuada += (`${numero} x ${i} = ${numero * i}<br>`)
    }
    document.getElementById("tabuada").innerHTML = tabuada;

}
function exe5(){
    //todas as tabuadas
    for (let i = 1; i <= 10; i++) {
        let tabuada = `Tabuada do ${i} <br>`;
        for (let j = 1; j <= 10; j++) {
            tabuada += (`${i} x ${j} = ${i * j} <br>`);
        }
        document.getElementById("tabuada").innerHTML += tabuada + "<br>";
    }
}

function exe6(){
    let codigo, valor, totalvista = 0, totalprazo = 0;
    for(let i = 1; i<=5; i++){
        do{
            codigo = prompt(`Digite V (à vista) ou P (à prazo)`).toUpperCase()
        }
        while (codigo != 'V' && codigo != 'P')
        valor = Number(prompt(`Digite o valor da transação`))
        if(codigo == 'V'){
            totalvista += valor
        }
        else{
            totalprazo += valor
        }
    }
    document.getElementById("resultado").innerHTML = `Total a vista: ${totalvista} </br>Total a prazo: ${totalprazo}
    </br>Total geral: ${totalvista + totalprazo}</br> Valor da primeira parcela ${totalprazo/3}`
}
function exe7(){
    let id, al, pe
    for(let i=1; i<=5;i++){
        do{
            id = Number(prompt(`Informe a idade`));
        }
        while (id < 0)
        do{
            al = Number(prompt(`Informe a altura`));
        }
        while (al < 0)
        do{
            pe = Number(prompt(`Informe o peso`));
        }
        while (pe < 0)
        if (idade > 50){
            let idade50 = 0
            idade50++
        }
        if(id >= 10 && id <= 20){
            let id1020 = 0
            id1020++
            somaal += altura
        }
        if(pe < 40){
            let pe40 = 0
            pe40++
        }
    }
}
