let numeros = []
let ordernadas = []
let papaiGenes=[]
let mamaeGenes=[]
let filhoGenes=[]

function exec83(){
    let numero;
    // numero=Math.floor(Math.random()*6);
    // numeros.push(numero);
    // console.log(numeros);
    for (let i = 0; i < 25; i++) {
        numero=Math.floor(Math.random()*25);
        numeros.push(numero);
    }
    document.getElementById("criado").innerHTML=("Numeros Criados!")
    console.log(numeros);
}
function procurar(){
 do {
    index1=Number(prompt("Escolha o primeiro número entre 0 e 24"))
 } while (index1 < 0 || index1 > 24) 

do {
    index2=Number(prompt("Escolha o segundo número entre 0 e 24"))
 } while (index2 < 0 || index2 > 24) 

 soma = numeros[index1] + numeros[index2]
 document.getElementById("resultado").innerHTML=("O resultado é: "+soma)
}
function mostrarArray(){
    let init=0;
    for (let i = 0; i < numeros.length; i++) {
        document.getElementById("arrayLista").innerHTML+= "<br>" + "Numero "+init+": " +numeros[i];
        init++
        
    }
}
function exec84(){
    let pesquisa=Number(prompt("Diga um número pra pesquisarmos:"))
    for (let item of numeros) {
        if(item==pesquisa){
            alert("O numero está no array!")
            break;
        }
        
    }
}
function exec85(){
    let numero;
    let init=0;
    for (let i = 0; i < 50; i++) {
        numero=Math.floor(Math.random()*200-100);
        ordernadas.push(numero);
        numero++
        document.getElementById("mostrar85").innerHTML+= "<br>" + "Numero "+init+": " +ordernadas[i];
        init++
    }
    console.log(ordernadas);

}
function exec86(){
    let init=0
        for (let pos = 0; pos < ordernadas.length; pos++) {
            if (ordernadas[pos]<0) {
                ordernadas[pos]=0;
            }
            document.getElementById("mostrar86").innerHTML+= "<br>" + "Numero "+init+": " +ordernadas[pos];
            init++
    
        }console.log(ordernadas);
    
}
function exec87(){
 let gerarmae;
 let gerarpai;
 for (let i = 0; i < 50; i++) {
    gerarmae=Math.floor(Math.random()*50);
    mamaeGenes.push(gerarmae);
    gerarmae++
}
for (let i = 0; i < 50; i++) {
    gerarpai=Math.floor(Math.random()*50);
    papaiGenesGenes.push(gerarmae);
    gerarpai++
}

}