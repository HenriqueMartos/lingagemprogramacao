function seguir(){
    alert('Você agora está seguindo Henrique Martos')
}

function exe1(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let sub = numero1 - numero2;

    document.getElementById("subtracao").textContent = "O resultado é: " + sub;
}
// function exc2(){
//     let nro1 = Number(document.getElementById("nro1").value);
//     let nro2 = Number(document.getElementById("nro2").value);

//     let sub = nro1 - nro2
//     alert(sub)
//     // document.getElementById("sub").textContent = `O Resultado é: ${sub}` ;
// }