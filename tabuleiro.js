import {gerenciador} from "./gerenciador.js";

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


const branco = "branco";
const preto = "preto";
let turno = preto;

let clique1 = null;

function Mover(tabuleiro, linha_A, coluna_A, linha_D, coluna_D){

    const valido = gerenciador(tabuleiro, linha_A, coluna_A, linha_D, coluna_D)

    if (valido){ tabuleiro[linha_D][coluna_D] = tabuleiro[linha_A][coluna_A]; tabuleiro[linha_A][coluna_A] = null; turno === "preto" ? turno = "branco" : turno = "preto";}

    vizualizar();
}

function clique(linha, coluna, casa) {
    if (clique1 === null) {
        const peca = tabuleiro[linha][coluna];  
        if (peca) {
            if (peca.cor !== turno) {
                return
            }
            clique1 = { linha, coluna, elemento: casa };
            casa.classList.add("selecionada");

        }
    } else {
        if (clique1.linha === linha && clique1.coluna === coluna) {
            clique1.elemento.classList.remove("selecionada");
            clique1 = null;
            return;
        }

        Mover(tabuleiro, clique1.linha, clique1.coluna, linha, coluna);
        clique1.elemento.classList.remove("selecionada");
        clique1 = null;
    }

}
function vizualizar(){
    alvo.innerHTML = "";
    for(let l = 0; l<8; l++){
        for(let c = 0; c < 8 ; c++ ){

            const peca = tabuleiro[l][c]

            const div = document.createElement("div");
            div.addEventListener("click", () => {
                clique(l, c, div);
            });

            if (peca){
                    div.classList.add("peca")
                    div.classList.add(peca.tipo)
                    div.classList.add(peca.cor)
                    div.classList.add("default")
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