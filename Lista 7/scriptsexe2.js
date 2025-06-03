function entrada(mat){
    for(let i=0;i<2;i++){
        mat[i] = []
        for(let j=0;j<4;j++){
            mat[i][j] = parseInt(Math.random() * (25 - 10) + 10)
        }
    }
}

function calculocont(mat){
    let contelementos = 0
    for(let i=0;i<2;i++){
        for(let j=0;j<4;j++){
            if(mat[i][j] >=12 && mat[i][j] <=20){
            contelementos++
            }
        }
    }
    return contelementos
}
function calculamedpar(mat){
    let somapares = 0
    let contpar = 0
    for(let i=0;i<2;i++){
        for(let j=0;j<4;j++){
            if(mat[i][j] %2 == 0){
            somapares += mat[i][j]
            contpar++
            }
        }
    }
    let mediapar = 0
    mediapar = (somapares / contpar)

    return mediapar
}
function exibematriz(mat){
    let saida = ''
    for(let i=0;i<mat.length;i++){
        saida = saida + '\n';
        for(let j=0;j<mat[i].length;j++){
            saida = saida + ' [' + mat[i][j] + '] ';
        }
    }
    alert(saida)
}

function saida(){
    let mat = []
    entrada(mat)
    alert(`A quantidade de elementos entre 12 e 20 é: ${calculocont(mat)}`)
    alert(`A média dos pares são: ${calculamedpar(mat)}`)
    exibematriz(mat)
}

saida()