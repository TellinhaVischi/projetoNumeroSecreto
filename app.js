alert("Boas vindas ao jogo número secreto!");

let numeroMaximo = prompt("Insira a quantidade máxima de números no seu desafio");
let numeroSecreto = parseInt(Math.random()*numeroMaximo + 1);
console.log(numeroSecreto);
let numeroEscolhido;
let tentativas = 1;

//enquanto chute for diferente do numero secreto
while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se numeroSecreto for igual ao numeroEscolhido 
    if (numeroSecreto == numeroEscolhido) {
        break;
    } else {
        if (numeroSecreto > numeroEscolhido) {
            alert(`O número secreto é maior que ${numeroEscolhido}`);
        } else {
            alert(`O número secreto é menor que ${numeroEscolhido}`);
        }
        //tentativas=tentativas+1;
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Muito bem, você acertou! O número secreto é ${numeroSecreto} e você acertou com ${tentativas} ${palavraTentativa}`);
//if (tentativas <=1) {
//    alert(`Muito bem, você acertou! O número secreto é ${numeroSecreto} e você acertou com ${tentativas} tentativa`);
//} else {
//    alert(`Muito bem, você acertou! O número secreto é ${numeroSecreto} e você acertou com ${tentativas} tentativas`);
//}
