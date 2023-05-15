let tentativas = 10; // Limite de tentativas
let contador = 0; // Contador de tentativas

function verificaChuteValido() {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido</div>";
    return;
  }
  if (numeroMaiorOuMenorPermitido(numero)) {
    elementoChute.innerHTML += `Valor inválido: fale um número entre <div>${menorValor} e ${maiorValor}</div>`;
    return;
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `;
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long</div>
    `;
  }

  contador++; // Incrementa o contador de tentativas

  if (contador >= tentativas) {
    document.body.innerHTML = `
    <h2>Fim do jogo</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `;
  } else {
    const elementoTentativasRestantes = document.getElementById('elementoTentativasRestantes');
    elementoTentativasRestantes.textContent = `Tentativas restantes: ${tentativas - contador}`;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorOuMenorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});

// Exibir a quantidade inicial de tentativas restantes
const elementoTentativasRestantes = document.createElement('div');
elementoTentativasRestantes.id = 'elementoTentativasRestantes';
elementoTentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
document.body.appendChild(elementoTentativasRestantes);
