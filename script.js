const frutas = ["laranja", "limão", "uva"]; 

let fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

let fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

let fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2] 

//usando laço
/* for(let i = 1; i <= frutas.length; i++){
    let item = document.getElementById(`fruta-${i}`)
    item.innerHTML = frutas[i-1]
} */

let valorFruta = document.getElementById("fruta")
function imprimeFruta(){
    console.log(valorFruta.value)
}

function apareceNaTela(){
    let fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = valorFruta.value
}
/* outro jeito de fazer
function imprimeInput(){
    let frutaDoInput = document.getElementById("fruta")
    console.log(frutaDoInput.innerHTML) 
    document.getElementById("fruta-4").innerHTML = frutaDoInput.value
} */