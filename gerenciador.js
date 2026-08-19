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
    let distanciaC = Math.abs(fimColuna - inicioColuna);
    let distanciaL = Math.abs(fimLinha - inicioLinha);
    let distancia = distanciaC > distanciaL ? distanciaC: distanciaL
    let passeLinha = 0;
    let passeColuna = 0;

    if (inicioColuna != fimColuna && inicioLinha != fimLinha || (tabuleiro[fimLinha][fimColuna] && tabuleiro[fimLinha][fimColuna].cor === cor)){return false}
    for (let i = 1; i < distancia; i++){
        fimLinha === inicioLinha ? passeLinha = 0 : fimLinha > inicioLinha ? passeLinha = 1 : passeLinha = -1;
        fimColuna === inicioColuna ? passeColuna = 0 : fimColuna > inicioColuna ? passeColuna = 1 : passeColuna = -1;
        const linhaAtual = inicioLinha + passeLinha * i;
        const colunaAtual = inicioColuna + passeColuna * i;
        if (tabuleiro[linhaAtual][colunaAtual] !== null) {console.log(20); return false; }}

    return true

}
function validarCavalo(peca,tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna){
    if (tabuleiro[fimLinha][fimColuna]){if (tabuleiro[fimLinha][fimColuna].cor == peca.cor){return false}}
    if ((Math.abs(inicioLinha-fimLinha) == 2 && Math.abs(inicioColuna-fimColuna) == 1) || (Math.abs(inicioLinha-fimLinha) == 1 && Math.abs(inicioColuna-fimColuna) == 2)){return true}
    
    return false
}
function validarBispo(peca,tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna){
    if (Math.abs(inicioLinha-fimLinha) !== Math.abs(inicioColuna-fimColuna)){return false}
    if (tabuleiro[fimLinha][fimColuna] && tabuleiro[fimLinha][fimColuna].cor == peca.cor){return false}
    const distancia = Math.abs(inicioLinha-fimLinha)-1

    const diracaoL = inicioLinha > fimLinha ? -1:1
    const diracaoC = inicioColuna > fimColuna ? -1:1

    let linha = inicioLinha+diracaoL
    let coluna = inicioColuna+diracaoC
    console.log(inicioColuna +"|"+fimColuna)
    for (let i=0; i<distancia; i++){
        if(tabuleiro[linha][coluna] !== null){console.log(linha +"|"+coluna);return false}
        linha += diracaoL
        coluna += diracaoC
    }
    return true
}
function validarDama(peca,tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna){
    if (validarTorre(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) || validarBispo(peca,tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)){return true}
}
function validarRei(peca,tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna){
    if (Math.abs(inicioColuna-fimColuna) === 2 && peca.moveu === false && inicioLinha === fimLinha){
        
        const passo = inicioColuna > fimColuna ? -1:1
        const torre = inicioColuna > fimColuna ? 3:2
        let colunaAtual = inicioColuna + passo

        for (let i = 0; i < torre;i++){
            if (tabuleiro[inicioLinha][colunaAtual] !== null){console.log(tabuleiro[inicioLinha][colunaAtual] !== null);return false}
            colunaAtual = colunaAtual+passo
        }
        if (passo === 1 && tabuleiro[inicioLinha][7] &&  tabuleiro[inicioLinha][7].moveu === false){
            tabuleiro[inicioLinha][5] = tabuleiro[inicioLinha][7]
            tabuleiro[inicioLinha][7] = null;
            return true
        }
        else if (passo === -1 && tabuleiro[inicioLinha][0] &&  tabuleiro[inicioLinha][0].moveu === false){
            tabuleiro[inicioLinha][3] = tabuleiro[inicioLinha][0]
            tabuleiro[inicioLinha][0] = null;
            return true
            }
    }


    if (Math.abs(inicioLinha-fimLinha) <= 1 && Math.abs(inicioColuna-fimColuna) <= 1){if((tabuleiro[fimLinha][fimColuna] && tabuleiro[fimLinha][fimColuna].cor == peca.cor)){return false}; return true}
}

export function gerenciador(tabuleiro, inicioLinha,inicioColuna,fimLinha,fimColuna){
    const peca = tabuleiro[inicioLinha][inicioColuna]

    if (peca.tipo === "peao"){
        return validarPeao(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna) 
    }
    else if (peca.tipo === "torre"){
        return validarTorre(peca, tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if(peca.tipo === "cavalo"){
        return validarCavalo(peca,tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "bispo"){
        return validarBispo(peca,tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "dama"){
        return validarDama(peca,tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    }
    else if (peca.tipo === "rei"){
        return validarRei(peca,tabuleiro, inicioLinha, inicioColuna, fimLinha, fimColuna)
    } else {
        return false
    }
}