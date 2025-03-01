
const readline = require('readline');

const { createEmployeeEntry, listEmployees, updateEmployee, deleteEmployee, searchEmployee } = require('./funcoes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('###################################\n');
  console.log('Sistema de Funcionarios');
  console.log('\n###################################\n');
  console.log('1. Adicionar funcionario');
  console.log('2. Listar funcionario');
  console.log('3. Atualizar funcionario');
  console.log('4. Deletar funcionario');
  console.log('5. Procurar funcionario');
  console.log('6. Sair');

  rl.question('Escolha uma ação: ', choice => {
    switch (choice) {
      case '1':
        createEmployeeEntry(rl, mainMenu);
        break;
      case '2':
        listEmployees();
        mainMenu();
        break;
      case '3':
        updateEmployee(rl, mainMenu);
        break;
      case '4':
        deleteEmployee(rl, mainMenu);
        break;
      case '5':
        searchEmployee(rl, mainMenu);
        break;
      case '6':
        console.log('Exiting...');
        rl.close();
        break;
      default:
        console.log('Escolha invalida. tente novamente! ');
        mainMenu();
    }
  });
}

mainMenu();