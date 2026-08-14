function criarPeca(tipo, cor) {
    return { tipo, cor, moveu: false};
}

function tabuleiroBack(){
    const tabuleiro = Array.from({ length: 8 }, () =>
        Array(8).fill(null)
    )

    const pretas = [
        "torre", "cavalo", "bispo", "dama",
        "rei", "bispo", "cavalo", "torre"
    ]

    const brancas = [
        "torre", "cavalo", "bispo", "dama",
        "rei", "bispo", "cavalo", "torre"
    ]

    for (let c = 0; c < 8; c++) {
        tabuleiro[0][c] = criarPeca(pretas[c], "preto")
    }

    
    for (let c = 0; c < 8; c++) {
        tabuleiro[1][c] = criarPeca("peao", "preto")
    }

  
    for (let c = 0; c < 8; c++) {
        tabuleiro[6][c] = criarPeca("peao", "branco")
    }

    
    for (let c = 0; c < 8; c++) {
        tabuleiro[7][c] = criarPeca(brancas[c], "branco")
    }

    return tabuleiro
}

const tabuleiro = tabuleiroBack()
const alvo = document.getElementById("tabuleiro")

function vizualizar(){
    for(let l = 0; l<8; l++){
        for(let c = 0; c < 8 ; c++ ){

            const peca = tabuleiro[l][c]
            const div = document.createElement("div");

            if (peca){
                    div.classList.add("peca")
                    div.classList.add(peca.tipo)
                    div.classList.add(peca.cor)
            }

            div.dataset.l = l;
            div.dataset.c = c;

            if ((l+c)%2 === 1){
                    div.classList.add("CasaBranca");
                }else{
                    div.classList.add("CasaPreta");
                }

                alvo.appendChild(div);
            }
        }
}
vizualizar();