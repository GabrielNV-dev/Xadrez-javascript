function validarPeao(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna){
    const cor = peca.cor;

    if (cor === "branco"){
        let passo = inicioLinha != 6 || tabuleiro[inicioLinha-1][inicioColuna] ? 1 : 2;

        if (tabuleiro[fimLinha][fimColuna]){if((fimColuna == inicioColuna+1 || fimColuna == inicioColuna-1) && inicioLinha-fimLinha == 1 && tabuleiro[fimLinha][fimColuna].cor != "branco"){return true}else{return false}}
        else if ( inicioColuna != fimColuna || inicioLinha-fimLinha > passo){return false}
        return true 
    } else { 
        let passo = inicioLinha != 1 || tabuleiro[inicioLinha+1][inicioColuna] ? 1 : 2;
        
        if (tabuleiro[fimLinha][fimColuna]){if((fimColuna == inicioColuna+1 || fimColuna == inicioColuna-1) && fimLinha-inicioLinha == 1){return true}else{return false}}
        else if ( inicioColuna != fimColuna || fimLinha-inicioLinha > passo){return false}
        return true
    }}

function validarTorre(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna){
    const cor = peca.cor;
    if (cor == "branco"){
        return true
    }
    else{

    }
}

export function gerenciador(tabuleiro, inicioLinha,inicioColuna,fimLinha,fimColuna){
    const peca = tabuleiro[inicioLinha][inicioColuna]

    if (peca.tipo === "peao"){
        return validarPeao(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) 
    }
    else if (peca.tipo === "torre"){
        return validarTorre(tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
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