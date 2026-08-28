function validarPeao(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) {
    const cor = peca.cor;
    const distancia = Math.abs(inicioLinha - fimLinha)
    const passe = inicioLinha == 1 || inicioLinha == 6 ? 2 : 1;

    if (distancia > passe) { return false }
    if (tabuleiro[fimLinha][fimColuna]) {
        if ((inicioLinha < fimLinha && cor === "branco") || (inicioLinha > fimLinha && cor === "preto") || (Math.abs(inicioColuna - fimColuna) != 1) || (distancia != 1)) { return false }
    }
    else {
        if (inicioColuna + 1 === fimColuna) {
            if (tabuleiro[inicioLinha][inicioColuna + 1] && tabuleiro[inicioLinha][inicioColuna + 1].tipo === "peao" && tabuleiro[inicioLinha][inicioColuna + 1].enpassant) {
                if ((inicioLinha < fimLinha && cor === "branco") || (inicioLinha > fimLinha && cor === "preto") || Math.abs(inicioColuna - fimColuna) != 1) { return false }
                tabuleiro[inicioLinha][inicioColuna + 1] = null
            }
            else { return false }
        }
        else if (inicioColuna - 1 === fimColuna) {
            if (tabuleiro[inicioLinha][inicioColuna - 1] && tabuleiro[inicioLinha][inicioColuna - 1].tipo === "peao" && tabuleiro[inicioLinha][inicioColuna - 1].enpassant) {
                if ((inicioLinha < fimLinha && cor === "branco") || (inicioLinha > fimLinha && cor === "preto") || Math.abs(inicioColuna - fimColuna) != 1) { return false }
                tabuleiro[inicioLinha][inicioColuna - 1] = null
            } else { return false }

        }
        else if ((inicioLinha < fimLinha && cor === "branco") || (inicioLinha > fimLinha && cor === "preto") || (inicioColuna != fimColuna)) { return false }
    }
    console.log(distancia)
    if (distancia == 2) { peca.enpassant = true }
    console.log(peca.enpassant)
    return true

}

function validarTorre(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) {
    const cor = peca.cor;
    let distanciaC = Math.abs(fimColuna - inicioColuna);
    let distanciaL = Math.abs(fimLinha - inicioLinha);
    let distancia = distanciaC > distanciaL ? distanciaC : distanciaL
    let passeLinha = 0;
    let passeColuna = 0;

    if (inicioColuna != fimColuna && inicioLinha != fimLinha || (tabuleiro[fimLinha][fimColuna] && tabuleiro[fimLinha][fimColuna].cor === cor)) { return false }
    for (let i = 1; i < distancia; i++) {
        fimLinha === inicioLinha ? passeLinha = 0 : fimLinha > inicioLinha ? passeLinha = 1 : passeLinha = -1;
        fimColuna === inicioColuna ? passeColuna = 0 : fimColuna > inicioColuna ? passeColuna = 1 : passeColuna = -1;
        const linhaAtual = inicioLinha + passeLinha * i;
        const colunaAtual = inicioColuna + passeColuna * i;
        if (tabuleiro[linhaAtual][colunaAtual] !== null) { return false; }
    }

    return true

}
function validarCavalo(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) {
    if (tabuleiro[fimLinha][fimColuna]) { if (tabuleiro[fimLinha][fimColuna].cor == peca.cor) { return false } }
    if ((Math.abs(inicioLinha - fimLinha) == 2 && Math.abs(inicioColuna - fimColuna) == 1) || (Math.abs(inicioLinha - fimLinha) == 1 && Math.abs(inicioColuna - fimColuna) == 2)) { return true }

    return false
}
function validarBispo(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) {
    if (Math.abs(inicioLinha - fimLinha) !== Math.abs(inicioColuna - fimColuna)) { return false }
    if (tabuleiro[fimLinha][fimColuna] && tabuleiro[fimLinha][fimColuna].cor == peca.cor) { return false }
    const distancia = Math.abs(inicioLinha - fimLinha) - 1

    const diracaoL = inicioLinha > fimLinha ? -1 : 1
    const diracaoC = inicioColuna > fimColuna ? -1 : 1

    let linha = inicioLinha + diracaoL
    let coluna = inicioColuna + diracaoC
    for (let i = 0; i < distancia; i++) {
        if (tabuleiro[linha][coluna] !== null) { return false }
        linha += diracaoL
        coluna += diracaoC
    }
    return true
}
function validarDama(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) {
    if (validarTorre(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) || validarBispo(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)) { return true }
}
function validarRei(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) {
    if (Math.abs(inicioColuna - fimColuna) === 2 && peca.moveu === false && inicioLinha === fimLinha) {
        const passo = inicioColuna > fimColuna ? -1 : 1
        const torre = inicioColuna > fimColuna ? 3 : 2
        let colunaAtual = inicioColuna + passo

        for (let i = 0; i < torre; i++) {
            if (tabuleiro[inicioLinha][colunaAtual] !== null) { return false }
            colunaAtual = colunaAtual + passo
        }
        if (passo === 1 && tabuleiro[inicioLinha][7] && tabuleiro[inicioLinha][7].moveu === false) {
            tabuleiro[inicioLinha][5] = tabuleiro[inicioLinha][7]
            tabuleiro[inicioLinha][7] = null;
            return true
        }
        else if (passo === -1 && tabuleiro[inicioLinha][0] && tabuleiro[inicioLinha][0].moveu === false) {
            tabuleiro[inicioLinha][3] = tabuleiro[inicioLinha][0]
            tabuleiro[inicioLinha][0] = null;
            return true
        }
    }

    else if (Math.abs(inicioLinha - fimLinha) <= 1 && Math.abs(inicioColuna - fimColuna) <= 1) { if ((tabuleiro[fimLinha][fimColuna] && tabuleiro[fimLinha][fimColuna].cor == peca.cor)) { return false }; return true }
}

export function gerenciador(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) {
    const peca = tabuleiro[inicioLinha][inicioColuna]

    if (peca.tipo === "peao") {
        return validarPeao(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "torre") {
        return validarTorre(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "cavalo") {
        return validarCavalo(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "bispo") {
        return validarBispo(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "dama") {
        return validarDama(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "rei") {
        return validarRei(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    } else {
        return false
    }
}