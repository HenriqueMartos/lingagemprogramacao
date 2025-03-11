function exe3(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if (numero2 != 0){
        let div = numero1 / numero2
        document.getElementById("div").textContent = "O Resultado é: " + div;
    }
    else{
        document.getElementById("div").textContent = "VALORES INCORRETOS!"
    }
}