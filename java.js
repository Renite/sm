// Adicione ao seu arquivo script.js existente

const perguntas = [
    'May, você se sente confiante hoje?'
];

const motivacoes = [
    'Você é incrível, May! Continue sendo confiante.💚',
    'Acredite em si mesma, May. Seu potencial é ilimitado. Te amo linda! 💚'
];

const perguntaElemento = document.getElementById('pergunta');
const motivacaoElemento = document.getElementById('motivacao');

function responder(resposta) {
    if (resposta) {
        perguntaElemento.innerText = 'May, você se sente confiante hoje?';
        motivacaoElemento.innerHTML = motivacoes[0];
    } else {
        motivacaoElemento.innerText = 'Acredite em si mesma, May. Seu potencial é ilimitado. Te amo linda! 💚';
    }
}
