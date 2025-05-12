function exe1() {
    let i = 1;
    let vetor = [];

    //entrada dde dados
    while(i <= 6) {
        vetor.push(Number(prompt('Entre com um número: ')));
        i++;
    }

    //calculando pares e ímpares
    let pares = [];
    let impares = [];
    for(i = 0;i < vetor.length;i++) {
        if(vetor[i] % 2 == 0) { //par
            pares.push(vetor[i]);
        } else { //ímpar
            impares.push(vetor[i]);
        }
    }
    document.getElementById('resultado').innerHTML = `Números pares = ${pares} <br> Números Ímpares = ${impares}`;
}

function exe2() {
    let vetor = [];
    let multiplos2 = [];
    let multiplos3 = [];
    let multiplos2e3 = [];
    
    for(let i = 1;i <= 7;i++) {
        vetor.push(Number(prompt('Entre com um número: ')));
    }

    for(i = 0;i < vetor.length;i++) {
        if((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)) {
            multiplos2e3.push(vetor[i]);
        } else if(vetor[i] % 3 == 0) {
            multiplos3.push(vetor[i]);
        } else if(vetor[i] % 2 == 0) {
            multiplos2.push(vetor[i]);
        }
    }
    document.getElementById('resultado').innerHTML = `Números múltiplos de 2 e 3 = ${multiplos2e3} <br> Números múltiplos de 2 = ${multiplos2} <br> 
    Números múltiplos de 3 = ${multiplos3}`;
}

function exe3() {
   let codigos = [], estoque = [];
   
   for(let i = 0;i < 3;i++) {
        codigos.push(prompt('Informe o código do produto:'));
        estoque.push(Number(prompt('Informe a quantidade em estoque: ')));
    }

   //comprando
   let cliente = Number(prompt('Informe código do cliente: '));
   do {
        let codigoProduto;
        codigoProduto = prompt('Informe código do produto para compra: ');
        let quantidade;
        quantidade = Number(prompt('Informe a quantidade do produto para compra: '));
    
        // procurar para ver se o produto existe;
        let posicao = codigos.indexOf(codigoProduto);
        if(posicao == -1) {
            alert('Código Inexistente');
        } else {
            if(estoque[posicao] >= quantidade) {
                estoque[posicao] = estoque[posicao] - quantidade;
                alert('Pedido atendido, obrigado e volte sempre.');
            } else {
                alert('Não temos estoque suficiente dessa mercadoria.');
            }
        }
        cliente = Number(prompt('Informe o código do novo cliente. Digite 0 para encerrar.'));
    }
   while(cliente != 0) {
        alert(`${codigos} ${estoque}`);
    }
}

function exe4() {
    var vetor = [];

    for(var i = 0;i < 15;i++) {
        vetor.push(Number(prompt(`Informe o ${i + 1}o número: `)));
    }

    var posicoes = [];
    for(i = 0;i < 15;i++) {
        if(vetor[i] == 30) {
            posicoes.push(i);
        }
    }
    alert(`Número 30 encontrado nas posições ${posicoes}`);
}

function exe5() {
    var logica = [], linguagem = [];

    for(var i = 0;i < 15;i++) {
        logica.push(Number(prompt(`Informe o ${i + 1}o. aluno que faz a disciplina Lógica`)));
    }
    for(var i = 0;i < 15;i++) {
        linguagem.push(Number(prompt(`Informe o ${i + 1}o. aluno que faz a disciplina Linguagem`)));
    }

    var interseccao = [];

    for(i = 0;i < 15;i++) {
        var posicao = linguagem.indexOf(logica[i]);
        if(posicao != -1) {
            interseccao.push(logica[i]);
        }
    }
    alert(`Alunos que fazem Lógica e Linguagem: ${interseccao}`);
}

function exe6() {
    var vendas = [], percentual = [], nome = [], comiss = [];
    let totv = 0;

    for(var i = 0;i < 5;i++) {
        nome.push(prompt(`Informe o nome do ${i+1}o. vendedor.`));
        vendas.push(Number(prompt(`Informe o total vendido pelo ${i+1}o. vendedor.`)));
        percentual.push(Number(prompt(`Informe o percentual das vendas do ${i+1}o. vendedor.`)));
        //calcular comissão
        comiss.push((vendas [i] * percentual[i]) / 100)
    }
    let relat = "";
    for(i=0;i<5;i++){
        relat += `Vendedor: ${nome[i]} Recebe ${comiss[i]} `
        totv += vendas[i]      
    }
    //calcula maior e menor valor de comissao
    let maior = comiss[0]
    let menor = comiss[0]
    for(i=0;i<5;i++){
        if(comiss[i] > maior){
            maior = comiss[i]
        }
        if(comiss[i] < menor){
            menor = comiss[i]
        }
    }
    alert(relat)
    alert(`Total vendas ${totv}`)
    alert(`${nome[comiss.indexOf(maior)]} vai receber a maior comissão de ${maior}`)
    alert(`${nome[comiss.indexOf(menor)]} vai receber a menor comissão de ${menor}`)
}
function exe7(){
    let num = []
    for (let i=0;i<10;i++){
        num.push(Number(prompt(`Informe o ${i+1}° Número`)));
    }
    neg = 0
    tpos = 0
    for (let i=0; i<10;i++){
        if(num[i] < 0){
        neg++
        }
        if(num[i] >= 0){
            tpos += num[i]
        }
    }
    alert(`Quantidade de Números negaivos: ${neg}; Soma dos Números positivos: ${tpos}`)
}
function exe8(){
    let nomes = [], med = []
    for(let i=0; i<7;i++){
        nomes.push(prompt(`Nome do meliante ${i+1}`))
        med.push(Number(prompt(`Insira a média do ${nomes[i]}`)))
    }
    let maior = med[0]
    for(let i=0;i<7;i++){
        if(med[i]> maior){
            maior = med[i]
        }
    }
    let pos = med.indexOf(maior)
    alert(`Nome do aluno com maior média ${nomes[pos]}`)

    for(let i=0;i<7;i++){
        if(med[i] <5){
            alert(`${nomes[i]} Precisa tirar ${10-med[i]}`)
        }
    }
}
function exe9(){
    let nomes = [], codigos = [], precos = []
    for (let i =0; i<2;i++){
        nomes.push(prompt(`Nome do produto ${i+1}`))
        codigos.push(Number(prompt(`Código do ${nomes[i]}`)))
        precos.push(Number(prompt(`Informe o preço do ${nomes[i]}`)))
    }
    let novopr = []
    let tab = ""
    for (let i =0; i<2;i++){
        if((codigos[i] %2 == 0) && (precos[i] > 1000)){
            novopr[i] = (precos[i]*1.2) 
        }
        else if(codigos[i] %2 ==0 ){
            novopr[i] = (precos[i]*1.15)
        }
        else if(precos[i] > 1000 ){
            novopr[i] = (precos[i]*1.1)
        }
        // tab += (`${nomes[i]} - ${codigos[i]} - ${precos[i]} - ${novopr[i]} `)
             alert(`${nomes[i]} - ${codigos[i]} - ${precos[i]} - ${parseInt(novopr[i])}`)
    }

}