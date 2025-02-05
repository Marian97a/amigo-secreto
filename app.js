let amigos = [];

// Função para adicionar amigos na lista
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome !== "" && !amigos.includes(nome)) {
    amigos.push(nome);
    atualizarLista();
    input.value = "";
  } else if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado!");
  } else {
    alert("Digite um nome válido.");
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
    alert("Adicione pelo menos um amigo para o sorteio.");
    return;
  }

  const nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>O amigo secreto sorteado é: ${nomeSorteado}</li>`;
}
