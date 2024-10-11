let numeros = []

function exec83(){
    let numero;
    // numero=Math.floor(Math.random()*6);
    // numeros.push(numero);
    // console.log(numeros);
    for (let i = 0; i < 25; i++) {
        numero=Math.floor(Math.random()*25);
        numeros.push(numero);
    }
    console.log(numeros);
}
function procurar(){
    let n1;
    let n2;
    if (n1 || n2 <=-1){
        alert("Esse número n pode ser usado");
    }
    if (n1 || n2 >=25){
        alert("Esse número n pode ser usado");
    }
}