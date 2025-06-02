function entrada(mat){
    //será 3x3
    for(let i=0;i<3;i++){
        mat[i] = []
        for(let j=0;j<3;j++){
            mat[i][j] = Number(prompt(`Informe o elemento [${i}][${j}] da matriz`))
        }
    }
}
function calculaSomaDiagonalPrincipal(mat){
    let somadiag = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(i == j)
            somadiag += mat[i][j]
        }
    }
    return somadiag
}
function exemplo(){
    let mat = []
    entrada(mat)
    let somadiag = calculaSomaDiagonalPrincipal(mat)
    alert(`A soma da diagonal principal é ${somadiag}`)
    alert(`A soma da diagonal principal é ${calculaSomaDiagonalPrincipal(mat)}`)
}
exemplo()

