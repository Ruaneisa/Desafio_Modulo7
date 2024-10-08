
const readline = require('readline');

const { cadastroFilmEntry, listafilms, updatefilm, deletefilm, searchfilm } = require('./funcoes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('###################################\n');
  console.log('Sistema Gerencimanto de Filmes');
  console.log('\n###################################\n');
  console.log('1. Adicionar filme');
  console.log('2. Listar filmes');
  console.log('3. Atualizar filme');
  console.log('4. Deletar filme');
  console.log('5. Procurar filme');
  console.log('6. Sair');

  rl.question('Escolha uma opção: ', choice => {
    switch (choice) {
      case '1':
        cadastroFilmEntry(rl, mainMenu);
        break;
      case '2':
        listafilms();
        mainMenu();
        break;
      case '3':
        updatefilm(rl, mainMenu);
        break;
      case '4':
        deletefilm(rl, mainMenu);
        break;
      case '5':
        searchfilm(rl, mainMenu);
        break;
      case '6':
        console.log('Saindo...');
        rl.close();
        break;
      default:
        console.log('Escolha inválida. tente novamente! ');
        mainMenu();
    }
  });
}

mainMenu();