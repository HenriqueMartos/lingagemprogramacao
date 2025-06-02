function entrada(mat){
    //será 3x3
    // for(let i=0;i<3;i++){
    //     mat[i] = []
    //     for(let j=0;j<3;j++){
    //         mat[i][j] = Number(prompt(`Informe o elemento [${i}][${j}] da matriz`))
    //     }
    // }
    //será 3x3
    for(let i=0;i<3;i++){
        mat[i] = []
        for(let j=0;j<3;j++){
            mat[i][j] = parseInt(Math.random() * 30) + 1
        }
    }
}
function calculaCont(mat){
    let cont = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            alert(`${mat[i][j]}`)
            if(mat[i][j] >=15 && mat[i][j] <=20 )
            cont += 1
        }
    }
    return cont
}
function exibematriz(mat){
    for(let i=0;i<mat.lenght;i++){
        for(let j=0;j<mat.lenght;j++){
            alert(`${mat[i][j]}`)
        }
    }
}

function exemplo(){
    let mat = []
    entrada(mat)
    exibematriz(mat)
    // let somadiag = calculaSomaDiagonalPrincipal(mat)
    // alert(`A soma da diagonal principal é ${somadiag}`) tambem da certo
    alert(`A quantidade de itens entre 15 e 20 é: ${calculaCont(mat)}`)
}
exemplo()

