function criarProduto (id, name, categoria, preco, estoque) {
    return {
      id,
      name,
      categoria,
      preco,
      estoque
    };
  }
  
  module.exports = {
    createProduct: criarProduto
  };