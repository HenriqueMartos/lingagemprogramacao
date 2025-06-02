function entrada(sla){
    for(let i=0;i<3;i++){
        // cria o objeto
        let obj = {
            nome: prompt(`Informe nome do ${i+1}o vendedor`),
            vendas: Number(prompt(`Informe total vendido pelo ${i+1}o vendedor`)),
            percentual: Number(prompt(`Informe percentual de vendas do ${i+1}o vendedor`))
        }
    }
}
function calculo(sla){
     // calcula a comissão -> vamos utilizar o . para acessar o campo/atributo do objeto
     obj.comissao = (obj.vendas * obj.percentual) / 100
     // adiciona o objeto no vetor
     vetor.push(obj)
  // fecha o for

 // relação dos vendedores e os valores a receber
 let relatorio = ''
 for(let i=0;i<3;i++){
     relatorio += `\nVendedor: ${sla[i].nome} vai receber ${sla[i].comissao}`
 }
 alert(relatorio)
 // total das vendas de todos os vendedores
 let somaVendas = 0
 for(let i=0;i<3;i++){
     somaVendas = somaVendas + sla[i].vendas
 }
}

function saida(sla){
    alert(`Total de vendas ${somaVendas.toFixed(2)}`)
    // calcula o maior e menor valor de comissão
    let objMaior = sla[0] // primeiro funcionário é o maior
    let objMenor = sla[0] // primeiro funcionário é o menor
    for(let i=1;i<3;i++){
        if (vetor[i].comissao > objMaior.comissao){
            objMaior = sla[i]
        }
        if (vetor[i].comissao < objMenor.comissao){
            objMenor = sla[i]
        }
    }
    alert(`${objMaior.nome} vai receber maior comissão de ${objMaior.comissao}`)
    alert(`${objMenor.nome} vai receber menor comissão de ${objMenor.comissao}`)
}
function exe6(){
    let vetor = []
    // entrada de dados
    entrada(vetor)
    calculo(vetor)
    saida(vetor)
}
