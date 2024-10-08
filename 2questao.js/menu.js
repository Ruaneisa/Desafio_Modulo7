
const readline = require('readline');

const { createStudentEntry, listStudents, updateStudent, deleteStudent, searchStudent } = require('./funcoes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.log('###################################\n');
  console.log('Menu administrativo');
  console.log('\n###################################\n');
  console.log('1. Adicionar estudante');
  console.log('2. Listar estudante');
  console.log('3. Atualizar estudante');
  console.log('4. Deletar estudante');
  console.log('5. Procurar estudante');
  console.log('6. Sair');

  rl.question('Escolha uma ação ', choice => {
    switch (choice) {
      case '1':
        createStudentEntry(rl, mainMenu);
        break;
      case '2':
        listStudents();
        mainMenu();
        break;
      case '3':
        updateStudent(rl, mainMenu);
        break;
      case '4':
        deleteStudent(rl, mainMenu);
        break;
      case '5':
        searchStudent(rl, mainMenu);
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