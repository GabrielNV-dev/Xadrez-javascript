
let tempoPreto = 600;
let tempoBranco = 600;

let intervaloAtivo = null;

// Função para formatar o tempo em MM:SS
function formatarTempo(segundosTotal) {
    let minutos = Math.floor(segundosTotal / 60);
    let segundos = segundosTotal % 60;
    
    // Adiciona um zero à esquerda se for menor que 10
    let minFormatado = minutos < 10 ? "0" + minutos : minutos;
    let segFormatado = segundos < 10 ? "0" + segundos : segundos;
    
    return `${minFormatado}:${segFormatado}`;
}

// Função para iniciar o timer de um jogador ("preto" ou "branco")
export function iniciarTimer(jogador) {
    // Para qualquer timer que esteja rodando
    clearInterval(intervaloAtivo);

    intervaloAtivo = setInterval(() => {
        if (jogador === 'preto') {
            tempoPreto--;
            document.getElementById('preto').innerText = formatarTempo(tempoPreto);
        } else {
            tempoBranco--;
            document.getElementById('branco').innerText = formatarTempo(tempoBranco);
        }
    }, 1000); // Roda a cada 1 segundo (1000ms)
}