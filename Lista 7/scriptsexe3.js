function entrada(mat){
    for(let i=0;i<6;i++){
        mat[i] = []
        for(let j=0;j<3;j++){
            mat[i][j] = parseInt(Math.random() * 20) + 1
        }
    }
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

function calculamaiormenor(mat){
    let maior = mat[0][0], menor = mat [0][0]
    let imaior = 0, imenor = 0, jmaior = 0, jmenor = 0
    
    for(let i=0;i<6;i++){
        for(let j=0;j<3;j++){
            if(mat[i][j] > maior){
                maior = mat[i][j]
                imaior = i
                jmaior = j
            }
            if(mat[i][j] < menor){
                menor = mat[i][j]
                imenor = i
                jmenor = j
            }
        } 
    }
    alert(`O ${maior} é o maior maior termo e o ${menor} é o menor termo `)
}

function saida(){
    let mat = []
    entrada(mat)
    calculamaiormenor(mat)
    exibematriz(mat)
}

saida()