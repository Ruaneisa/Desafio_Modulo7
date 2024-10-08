const readline = require('readline');

const { createProductEntry, listaProduct, updateProduct, deleteProduct, searchProduct } = require('./funcoes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('###################################\n');
  console.log('Sistema Gerencimanto de Produtos');
  console.log('\n###################################\n');
  console.log('1. Adicionar produto');
  console.log('2. Listar produto');
  console.log('3. Atualizar produto');
  console.log('4. Deletar produto');
  console.log('5. Procurar produto');
  console.log('6. Sair');

  rl.question('Escolha sua opção: ', escolha => {
    switch (escolha) {
      case '1':
        createProductEntry(rl, mainMenu);
        break;
      case '2':
        listaProduct();
        mainMenu();
        break;
      case '3':
        updateProduct(rl, mainMenu);
        break;
      case '4':
        deleteProduct(rl, mainMenu);
        break;
      case '5':
        searchProduct(rl, mainMenu);
        break;
      case '6':
        console.log('Exiting...');
        rl.close();
        break;
      default:
        console.log('Escolha inválida. tente novamente! ');
        mainMenu();
    }
  });
}

mainMenu();