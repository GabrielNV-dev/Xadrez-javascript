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
let turno = branco;

let clique1 = null;

function Mover(tabuleiro, linha_A, coluna_A, linha_D, coluna_D){

    const valido = gerenciador(tabuleiro, linha_A, coluna_A, linha_D, coluna_D)
   
    if (valido){tabuleiro[linha_A][coluna_A].moveu = true; tabuleiro[linha_D][coluna_D] = tabuleiro[linha_A][coluna_A]; tabuleiro[linha_A][coluna_A] = null; turno === "preto" ? turno = "branco" : turno = "preto";}
     
    visualizar();
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
        if (tabuleiro[linha][coluna] && tabuleiro[clique1.linha][clique1.coluna] && tabuleiro[linha][coluna].cor == tabuleiro[clique1.linha][clique1.coluna].cor){
            clique1.elemento.classList.remove("selecionada");
            clique1 = { linha, coluna, elemento: casa };
            casa.classList.add("selecionada");
            return;
        }
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

const tabuleiros = [
        // 0 - Clássico
        ["#F0D9B5", "#B58863"],

        // 1 - Pixel Art / Retrô
        ["#E8D7B0", "#7A5230"],

        // 2 - Madeira
        ["#E6C79C", "#8B5A2B"],

        // 3 - Carvalho
        ["#E8CFA8", "#9A6B3F"],

        // 4 - Mogno
        ["#E2B49A", "#7B3F2A"],

        // 5 - Verde Floresta
        ["#DDE8D2", "#668F5A"],

        // 6 - Verde Clássico
        ["#EEEED2", "#769656"],

        // 7 - Verde Escuro
        ["#D8E4D0", "#4F7043"],

        // 8 - Azul
        ["#DCEAF2", "#5B7C99"],

        // 9 - Azul Marinho
        ["#D8E3F0", "#3F5F7A"],

        // 10 - Gelo
        ["#EAF4F4", "#7BA7B8"],

        // 11 - Roxo
        ["#E6D9F2", "#76549A"],

        // 12 - Roxo Escuro
        ["#DCD2E8", "#59406F"],

        // 13 - Rosa
        ["#F4DCE8", "#A35D7A"],

        // 14 - Vermelho
        ["#F2D6D0", "#8C3F3F"],

        // 15 - Vermelho Escuro
        ["#E8C8C5", "#6E2525"],

        // 16 - Laranja
        ["#F5D6B3", "#B8642A"],

        // 17 - Amarelo
        ["#FFF1B8", "#C49A32"],

        // 18 - Preto e Branco
        ["#F5F5F5", "#3A3A3A"],

        // 19 - Cinza
        ["#D9D9D9", "#707070"],

        // 20 - Cinza Escuro
        ["#BFC3C7", "#4A4F54"],

        // 21 - Cyberpunk
        ["#D8F3F0", "#6A3FA0"],

        // 22 - Neon Azul
        ["#D6F5FF", "#24527A"],

        // 23 - Neon Verde
        ["#E0FFD4", "#357A38"],

        // 24 - Neon Rosa
        ["#FFE0F0", "#A83279"],

        // 25 - Deserto
        ["#F5E6C8", "#C28E4A"],

        // 26 - Areia
        ["#F2E2C4", "#A87545"],

        // 27 - Oceano
        ["#D5EEF2", "#287B8E"],

        // 28 - Mar
        ["#D7F0EA", "#3C7A72"],

        // 29 - Floresta
        ["#D7E6C5", "#3E6338"],

        // 30 - Pântano
        ["#D5DEC4", "#52613B"],

        // 31 - Outono
        ["#F0D0A0", "#A65332"],

        // 32 - Inverno
        ["#EAF2F8", "#6B879C"],

        // 33 - Primavera
        ["#F3E8C8", "#7FA65A"],

        // 34 - Crepúsculo
        ["#E8D5E8", "#634B78"],

        // 35 - Noite
        ["#BFC9D9", "#30394A"],

        // 36 - Lua
        ["#E4E7EC", "#626A78"],

        // 37 - Vulcão
        ["#EBC4A8", "#7C3028"],

        // 38 - Lava
        ["#FFD0A8", "#9E2B25"],

        // 39 - Ouro
        ["#F5E6A8", "#9C792D"],

        // 40 - Prata
        ["#E5E7EA", "#747B84"],

        // 41 - Bronze
        ["#E6C9A5", "#79552D"],

        // 42 - Café
        ["#E8D3B7", "#6F4E37"],

        // 43 - Chocolate
        ["#E4C2A5", "#542F20"],

        // 44 - Cereja
        ["#F0D0D0", "#7D2638"],

        // 45 - Lavanda
        ["#E8E0F4", "#8064A2"],

        // 46 - Turquesa
        ["#D7F1EC", "#318C87"],

        // 47 - Esmeralda
        ["#D5E8D4", "#26734D"],

        // 48 - Safira
        ["#D6E3F5", "#315A91"],

        // 49 - Rubi
        ["#F0D0D0", "#8E2636"]
];
var temaTabuleiro = 0;

const temas = ["default", "pixelart"];
var temaAtual = 0;

const peca_tema = document.getElementById("peca-interface");
peca_tema.addEventListener("click", () => {
    temaAtual = (temaAtual + 1) % temas.length;
    visualizar()
});

function visualizar(){
    alvo.innerHTML = "";
    for(let l = 0; l<8; l++){
        for(let c = 0; c < 8 ; c++ ){

            const peca = tabuleiro[l][c]

            const div = document.createElement("div");
            div.classList.add("default")
            div.addEventListener("click", () => {
                clique(l, c, div);
            });

            if (peca){
                    div.classList.add("peca")
                    div.classList.add(peca.tipo)
                    div.classList.add(peca.cor)
                    div.classList.add(temas[temaAtual])
            }

            div.dataset.l = l;
            div.dataset.c = c;

            const corIndex = temaTabuleiro % tabuleiros.length;

            if ((l+c)%2 === 1){
                    div.classList.add("CasaBranca");
                    div.style.backgroundColor = tabuleiros[corIndex][0];
            } else{
                    div.classList.add("CasaPreta");
                    div.style.backgroundColor = tabuleiros[corIndex][1];
                }

                alvo.appendChild(div);
            }
        }
}

const tabu_tema = document.getElementById("tabuleiro-interface");
if (tabu_tema) {
    tabu_tema.addEventListener("click", () => {
        temaTabuleiro = (temaTabuleiro + 1) % tabuleiros.length; // Volta pro 0 se passar do último
        visualizar();
    });
}
const fundo_tema = document.getElementById("fundo-interface");

const fundos = [
    // 1. Verde Clássico de Torneio (Lembra muito os panos de mesa de xadrez tradicionais)
    "radial-gradient(circle, rgba(1, 37, 7, 1) 0%, rgb(1, 102, 14) 5%, rgb(1, 37, 7) 50%)",
    
    // 2. Madeira Nobre / Mogno (Inspirado nas peças e tabuleiros de madeira clássicos)
    "radial-gradient(circle, rgba(61, 26, 5, 1) 0%, rgb(117, 56, 15) 5%, rgb(38, 15, 2) 50%)",
    
    // 3. Azul Moderno / Tecnológico (Estilo plataformas de xadrez online modernas tipo Chess.com/Lichess)
    "radial-gradient(circle, rgba(15, 23, 42, 1) 0%, rgb(30, 58, 138) 5%, rgb(10, 15, 30) 50%)",
    
    // 4. Minimalista Chumbo / Dark Mode (Foco total na concentração, inspirado em peças de mármore ou metal)
    "radial-gradient(circle, rgba(40, 40, 40, 1) 0%, rgb(70, 70, 70) 5%, rgb(20, 20, 20) 50%)",
    
    // 5. Estilo Neo-Gótico / Ouro & Vinho (Para dar um toque luxuoso de "Rei e Rainha")
    "radial-gradient(circle, rgba(74, 4, 4, 1) 0%, rgb(148, 103, 0) 5%, rgb(30, 2, 2) 50%)"
];

var temaFundo = 0;

if (fundo_tema) {
    fundo_tema.addEventListener("click", () => {
        temaFundo = (temaFundo + 1) % fundos.length;
        document.body.style.background = fundos[temaFundo];
        
    });
}
visualizar();