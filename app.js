let amigos = [];

// Função para exibir alerts customizados
function exibirAlerta(mensagem, tipo = "info") {
  const container = document.getElementById("custom-alert-container");

  const alerta = document.createElement("div");
  alerta.className = `custom-alert ${tipo}`;
  alerta.textContent = mensagem;

  container.appendChild(alerta);

  // Remove o alerta após 4 segundos
  setTimeout(() => {
    alerta.remove();
  }, 4000);
}

// Função para adicionar amigos na lista
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome !== "" && !amigos.includes(nome)) {
    amigos.push(nome);
    atualizarLista();
    input.value = "";
    exibirAlerta("Amigo adicionado com sucesso!", "success");
  } else if (amigos.includes(nome)) {
    exibirAlerta("Esse nome já foi adicionado!", "warning");
  } else {
    exibirAlerta("Digite um nome válido.", "error");
  }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

// Função para sortear apenas um nome da lista
function sortearAmigo() {
  if (amigos.length < 1) {
    exibirAlerta("Adicione pelo menos um amigo para o sorteio.", "warning");
    return;
  }

  const nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo secreto sorteado é: ${nomeSorteado}</li>`;
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
  amigos = []; // Zera a lista de amigos
  document.getElementById("listaAmigos").innerHTML = ""; // Limpa os nomes da tela
  document.getElementById("resultado").innerHTML = ""; // Limpa o resultado do sorteio
  exibirAlerta("O sorteio foi reiniciado. Adicione novos amigos para começar!", "info");
}
