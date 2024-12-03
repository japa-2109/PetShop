function adicionarProduto(nome, preco, imagem) {
    const produto = {
        nome: nome,
        preco: preco,
        imagem: imagem,
        quantidade: 1
    };

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const produtoExistente = carrinho.find(item => item.nome === nome);

    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push(produto);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarCarrinho();
}

function atualizarCarrinho() {

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);

    document.getElementById("cart-count").textContent = totalItens;

    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = totalItens;
    }

}

function exibirCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const listaCarrinho = document.getElementById("lista-carrinho");
    listaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<li>Seu carrinho está vazio.</li>";
    } else {
        carrinho.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
          <img src="${item.imagem}" alt="${item.nome}" width="50">
          <span>${item.nome} - R$ ${item.preco} x ${item.quantidade}</span>
          <button onclick="alterarQuantidade(${index}, 'aumentar')">+</button>
          <button onclick="alterarQuantidade(${index}, 'diminuir')">-</button>
          <button onclick="removerProduto(${index})">Excluir</button>
        `;
            listaCarrinho.appendChild(li);
        });
    }

    const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    document.getElementById("valor-total").textContent = total.toFixed(2);

    const btnCancelar = document.getElementById("cancelar-compra");
    btnCancelar.disabled = carrinho.length === 0;
}

function alterarQuantidade(index, acao) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const item = carrinho[index];

    if (acao === 'aumentar') {
        item.quantidade += 1;
    } else if (acao === 'diminuir' && item.quantidade > 1) {
        item.quantidade -= 1;
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    exibirCarrinho();
}


function removerProduto(index) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.splice(index, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    exibirCarrinho();

    alert("Produto excluído com sucesso!");
}


function finalizarCompra() {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
        alert("O carrinho está vazio!");
    } else {

        alert("Compra finalizada com sucesso!");


        localStorage.removeItem("carrinho");
        exibirCarrinho();
    }
}


function cancelarCompra() {
    alert("Compra cancelada!");


    localStorage.removeItem("carrinho");
    exibirCarrinho();
}


window.onload = function () {
    exibirCarrinho();
    atualizarCarrinho();
};