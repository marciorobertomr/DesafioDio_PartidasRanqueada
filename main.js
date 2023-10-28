let jogador = 'Márcio';
let vitoriasJogador = 106;
let derrotasJogador = 15;
let nivelJogador = ''
let rank = 0;

function calculaRank (vitorias, derrotas, jogador) {
    let resultado = vitorias - derrotas;
    return resultado;
}

rank = calculaRank(vitoriasJogador, derrotasJogador, jogador);

if(rank <= 10) {
    nivelJogador = 'Ferro';
} else if (rank > 10 && rank <= 20) {
    nivelJogador = 'Bronze'
} else if (rank > 20 && rank <= 50) {
    nivelJogador = 'Prata'
} else if (rank > 50 && rank <= 80) {
    nivelJogador = 'Ouro'
} else if (rank > 80 && rank <= 90) {
    nivelJogador = 'Diamante'
} else if (rank > 90 && rank <= 100) {
    nivelJogador = 'Lendário'
} else if (rank > 100) {
    nivelJogador = 'Imortal'
} else {
    nivelJogador = 'Indefinido'
}

console.log(`O Herói ${jogador} tem saldo de vitórias: ${rank}, e está no nível ${nivelJogador}.`);