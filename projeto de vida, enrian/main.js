const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

// Alternar abas
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    botoes.forEach(b => b.classList.remove("ativo"));
    abas.forEach(a => a.classList.remove("ativo"));

    botao.classList.add("ativo");
    abas[indice].classList.add("ativo");
  });
});

// Datas dos objetivos (Ajustadas para datas futuras)
const tempos = [
  new Date("2026-12-19T00:00:00"),
  new Date("2027-08-05T00:00:00"),
  new Date("2027-12-09T00:00:00"),
  new Date("2028-07-25T00:00:00")
];

function atualizarContador(indice, dataFinal) {
  const agora = new Date();
  const diferenca = dataFinal - agora;

  if (diferenca <= 0) {
    document.getElementById(`dias${indice}`).textContent = "0";
    document.getElementById(`horas${indice}`).textContent = "0";
    document.getElementById(`minutos${indice}`).textContent = "0";
    document.getElementById(`segundos${indice}`).textContent = "0";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById(`dias${indice}`).textContent = dias;
  document.getElementById(`horas${indice}`).textContent = horas;
  document.getElementById(`minutos${indice}`).textContent = minutos;
  document.getElementById(`segundos${indice}`).textContent = segundos;
}

function atualizarCronometros() {
  tempos.forEach((tempo, indice) => {
    atualizarContador(indice, tempo);
  });
}

// Inicializa e roda a cada 1 segundo
atualizarCronometros();
setInterval(atualizarCronometros, 1000);