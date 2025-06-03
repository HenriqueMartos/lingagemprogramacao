function entrada(mat){
    for(let i=0;i<3;i++){
        mat[i] = []
        for(let j=0;j<5;j++){
            mat[i][j] = parseInt(Math.random() * 20) + 1
        }
    }
}
function calculaCont(mat){
    let cont = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(mat[i][j] >=15 && mat[i][j] <=20 )
            cont++
        }
    }
    return cont
}
function exibematriz(mat){
    let saida = ''
    for(let i=0;i<mat.length;i++){
        saida = saida + '\n';
        for(let j=0;j<mat[i].length;j++){
            saida = saida + ' ' + mat[i][j];
        }
    }
    alert(saida)
}

function exemplo(){
    let mat = []
    entrada(mat)
    alert(`A quantidade de itens entre 15 e 20 é: ${calculaCont(mat)}`)
    exibematriz(mat)
}
exemplo()

