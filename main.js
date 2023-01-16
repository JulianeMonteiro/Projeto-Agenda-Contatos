const form = document.getElementById("form-contatos");
const nomes = [];
const numeros = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
  atualizaTotalContatos();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById("nome");
  const inputNumeroContato = document.getElementById("telefone");

  if (nomes.includes(inputNomeContato.value)) {
    alert(`Contato: ${inputNomeContato.value}   já foi inserido`);
  } else {
    nomes.push(inputNomeContato.value);
    numeros.push(parseInt(inputNumeroContato.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  inputNomeContato.value = "";
  inputNumeroContato.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
function atualizaTotalContatos() {
  document.getElementById("total-contato").innerHTML = nomes.length;
}
