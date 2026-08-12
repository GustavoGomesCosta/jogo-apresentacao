let nome = prompt("insira o seu nome: ");
let erros = 0; 

console.log("Olá, " + nome + "! Você vai responder 10 perguntas. Caso erre 4 perguntas, será eliminado!!!");


const bancoDePerguntas = [
 
  
];

function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}


const perguntasDoJogo = embaralhar(bancoDePerguntas).slice(0, 10);

for (let i = 0; i < perguntasDoJogo.length; i++) {
  
  let respostaUsuario = prompt(`Pergunta ${i + 1}: ${perguntasDoJogo[i].pergunta}`);
  
  if (respostaUsuario.trim().toLowerCase() === perguntasDoJogo[i].resposta.toLowerCase()) {
    console.log("Acertou! 🎉");
  } else {
    erros++;
    console.log(`Errou! Você já errou ${erros} vez(es). A resposta correta era: ${perguntasDoJogo[i].resposta}`);
  }

  if (erros === 4) {
    console.log("Game Over! Você cometeu 3 erros e foi eliminado.");
    break;
  }
}


if (erros < 3) {
  console.log(`Parabéns, ${nome}! Você concluiu o quiz com ${erros} erro(s).`);
}
alert("porfavor chame o responsavel da atividade para registrar sua pontuaçao!!")
