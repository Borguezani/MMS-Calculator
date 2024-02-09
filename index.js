let arrayAleatorio = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
let janelaAleatoria = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let valoresDeEntrada = [];
let resultado = [];

function arraysAleatorio() {
  for (let i = 0; i < arrayAleatorio; i++) {
    valoresDeEntrada.push(Math.floor(Math.random() * (20 - 1 + 1)) + 1);
  }
}
function calcularMMS(array, janela) {
  if (janela < array.length) {
    for (let i = 0; i <= array.length - janela; i++) {
      let soma = 0;
      for (let k = i; k < i + janela; k++) {
        soma += array[k];
      }
      resultado.push(soma / janela);
    }
  } else
    resultado =
      ["A janela é maior que a quantidade de números, não foi possível fazer o cálculo!"];
}
arraysAleatorio();
console.log(valoresDeEntrada);
console.log(janelaAleatoria);

calcularMMS(valoresDeEntrada, janelaAleatoria);
console.log(resultado);






//Código somente para mostrar em tela os resultados ----------->
const ulItemEntrada = document.querySelector(".arrayEntrada");
valoresDeEntrada.forEach(valor =>{
    const itemEntrada = document.createElement("li");
    itemEntrada.textContent = valor;
    ulItemEntrada.appendChild(itemEntrada);
})

const ulJanela = document.querySelector(".janela")
const liJanela = document.createElement("li")
liJanela.textContent = janelaAleatoria;
ulJanela.appendChild(liJanela)

const ulResultado = document.querySelector(".result")
resultado.forEach(valor => {
    const liResultado = document.createElement("li")
    liResultado.textContent = valor;
    ulResultado.appendChild(liResultado);
}) 

//<------------------------------------------------------------