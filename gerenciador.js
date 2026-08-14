export function gerenciador(tabuleiro, inicioLinha,inicioColuna,fimLinha,fimColuna){
    const peca = tabuleiro[inicioLinha][inicioColuna]

    if (peca.tipo === "peao"){
        return validarPeao(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) 
    }
    else if (peca.tipo === "torre"){
        return validarTorre(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if(peca.tipo === "cavalo"){
        return validarCavalo(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "bispo"){
        return validarBispo(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "dama"){
        return validarDama(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "rei"){
        return validarRei(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
}