function validarPeao(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna){
    const cor = peca.cor;

    if (cor === "preto"){
        let passo = inicioLinha === 1 ? 2 : 1; 
        if (tabuleiro[inicioLinha+1][inicioColuna] && tabuleiro[inicioLinha][inicioColuna].cor === cor){passo = passo-2}
        else if(tabuleiro[inicioLinha+2][inicioColuna] && tabuleiro[inicioLinha][inicioColuna].cor === cor){passo = 1}

        if (tabuleiro[fimLinha][fimColuna] && (inicioColuna+1 != fimColuna || inicioColuna-1 != fimColuna || inicioLinha > fimLinha || fimLinha-inicioLinha > passo)){return false}
        if (inicioColuna != fimColuna || inicioLinha > fimLinha || fimLinha-inicioLinha > passo){console.log(passo);return false}
        else {return true}

    } else{ 
        let passo = inicioLinha === 6 ? -2 : -1;
        if (tabuleiro[inicioLinha-1][inicioColuna] && tabuleiro[inicioLinha][inicioColuna].cor === cor){passo = passo+2}
        else if(tabuleiro[inicioLinha-2][inicioColuna] && tabuleiro[inicioLinha][inicioColuna].cor === cor){passo = passo+1}

        if (inicioColuna != fimColuna || inicioLinha < fimLinha || fimLinha-inicioLinha < passo){return false}
        else {return true}}
}


export function gerenciador(tabuleiro, inicioLinha,inicioColuna,fimLinha,fimColuna){
    const peca = tabuleiro[inicioLinha][inicioColuna]

    if (peca.tipo === "peao"){
        return validarPeao(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) 
    }
    else if (peca.tipo === "torre"){
        return //validarTorre(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if(peca.tipo === "cavalo"){
        return //validarCavalo(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "bispo"){
        return //validarBispo(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "dama"){
        return //validarDama(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "rei"){
        return //validarRei(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    } else {
        return false
    }
}