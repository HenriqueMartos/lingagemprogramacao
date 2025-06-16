function entrada(mat, vet){
    for(let i=0;i<2;i++){
        vet.push(prompt(`Informe o ${i+1}º Nome`))
        mat[i] = []
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe a nota ${j+1} do aluno ${vet[i]}`))
        }
    }
}

function medias(mat, vet){
    let somatotal = 0
    for(let i=0;i<2;i++){
        let soma = 0
        for(let j=0;j<5;j++){
            soma += mat[i][j]
            somatotal += mat[i][j]
        }
        let med = soma / 5
        let situacao
        if(med < 3){
            situacao = "REPROVADO"
        }
        else if (med >=3 && med <6){
            situacao = "EXAME"
        }
        else{
            situacao = "APROVADO"
        }
        alert(`${vet[i]} teve média ${med}, portanto ${situacao}`)
    }
    somatotal = somatotal / 10
    alert (`Média da sala é ${somatotal}`)
}

// function exibematriz(mat){
//     let saida = ''
//     for(let i=0;i<mat.length;i++){
//         saida = saida + '\n';
//         for(let j=0;j<mat[i].length;j++){
//             saida = saida + ' [' + mat[i][j] + '] ';
//         }
//     }
//     alert(saida)
// }


function saida(){
    let mat = []
    let vet = []
    entrada(mat, vet)
    medias(mat, vet)
    
    
}

saida()