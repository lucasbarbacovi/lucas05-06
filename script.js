const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os impactos da poluição do ar no meio ambiente?",
        alternativas: [
            {
                texto: "diminuição do efeito estufa.",
                afirmacao: "errada"
            },
            {
                texto: "Prejuízos à saúde humana.",
                afirmacao: "correta"
            }
        ]
    },
    {
        enunciado: "Como a construção de represas pode afetar a biodiversidade local?",
        alternativas: [
            {
                texto: "Ira aumentar reprodução das aves.",
                afirmacao: "errada"
            },
            {
                texto: "Alterações no habitat de espécies aquáticas.",
                afirmacao: "correta"
            }
        ]
    },
    {
        enunciado: "Quais são os benefícios da reciclagem para o meio ambiente?",
        alternativas: [
            {
                texto: "Diminuição da quantidade de resíduos em aterros sanitários.",
                afirmacao: "correta"
            },
            {
                texto: "aumento da extraçãodo residuos naturais.",
                afirmacao: "errada"
            }
        ]
    },
    {
        enunciado: "De que forma o desmatamento contribui para as mudanças climáticas?",
        alternativas: [
            {
                texto: "De nenhuma forma.",
                afirmacao: "errada"
            },
            {
                texto: "Redução da capacidade das florestas em capturar carbono.",
                afirmacao: "correta"
            }
        ]
    },
    {
        enunciado: "Como os agrotóxicos podem impactar negativamente o meio ambiente? ",
        alternativas: [
            {
                texto: "Contaminação do solo e da água.",
                afirmacao: "correta"
            },
            {
                texto: "aumento da biodiversidade.",
                afirmacao: "errada"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "5";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();