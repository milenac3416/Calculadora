let ValorPago = document.querySelector("#ValorPago");
let ValorProduto = document.querySelector ("#ValorProduto");
let Calcular = document.querySelector("#Calcular");
let h3resultado = document.querySelector("#h3resultado");

function calcularTroco(){
    //valor recebido 
    let VR = Number(ValorPago.value);
    // Valor produto
    let VP = Number(ValorProduto.value);

    h3resultado.textContent = (VR - VP);

}
Calcular.onclick = function(){

    calcularTroco();
}