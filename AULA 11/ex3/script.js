const tabela = document.querySelector("#tabela");

// 1. cria uma linha nova (ela ainda não aparece na página)
const linha = document.createElement("tr");

// 2. cria as três células
const celulaNome = document.createElement("td");
const celulaMedia = document.createElement("td");
const celulaSituacao = document.createElement("td");

// 3. escreve o texto de cada célula
celulaNome.textContent = "Ana Souza";
celulaMedia.textContent = 8.5;
celulaSituacao.textContent = "aprovado";

// 4. coloca as células dentro da linha
linha.append(celulaNome, celulaMedia, celulaSituacao);

// 5. coloca a linha dentro da tabela: agora ela aparece!
tabela.append(linha);