
const { cadastrarFilme } = require('./filmes');

const filmes = [];

function cadastroFilmEntry(rl, callback) {
  rl.question('Informe o ID do filme: ', id => {
    rl.question('Informe o titulo: ', titulo => {
      rl.question('Informe o diretor: ', diretor => {
        rl.question('Informe o genêro: ', genero => {
          rl.question('Informe o ano de lançamento: ', ano => {
            const film = cadastrarFilme(id, titulo, diretor, genero, ano);
            filmes.push(film);
            console.log(film)
            console.log('Filme Adicionado com Sucesso.! ');
            callback();
          });
        });
      });
    });
  });
}

function listaFilmes() {
  if (filmes.length === 0) {
    console.log('Nenhum Filme encontrado');
    return;
  }
  console.log('Lista dos Filmes : ');
  filmes.forEach(film => {
    console.log(`ID: ${film.id}, Titulo: ${film.titulo}, Direto: ${film.direto}, Genero: ${film.genero}, Ano: ${film.ano}`);
  });
}

function updatefilm(rl, callback) {
  rl.question('Acesse com o ID do Filme para Atualizar: ', id => {
    const film = filmes.find(films => films.id === id);
    if (!film) {
      console.log('Filme não encontrado. ');
      callback();
      return;
    }

    rl.question(`Entre com o Novo ID (ID Anterior, ${film.id}): `, id => {
      film.id = id || film.id;
      rl.question(`Entre com o novo Titulo (Titulo antigo, ${film.titulo}): `, titulo => {
        film.titulo = titulo || film.titulo;
        rl.question(`Entre com o novo Genero (Genero Antigo, ${film.genero}): `, genero => {
          film.genero = genero || film.genero;
          rl.question(`Entre com o novo Ano (Ano Antigo, ${film.ano}): `, ano => {
            film.ano = ano || film.ano;
            console.log('Filme atualizado com sucesso. ');
            callback();
          });
        });
      });
    });
  });
}

function deletefilm(rl, callback) {
  rl.question('Informe o ID do Filme para ser deletado: ', id => {
    const index = filmes.findIndex(films => films.id === id);
    if (index === -1) {
      console.log('Filme não encontrado');
      callback();
      return;
    }
    filmes.splice(index, 1);
    console.log('Filme deletado com Sucesso');
    callback();
  });
}

function searchfilm(rl, callback) {
  console.log('Procurar por :');
  console.log('1. Titulo');
  console.log('2. Diretor');
  console.log('3. Genero');
  console.log('4. Ano');

  rl.question('Escolha uma Opção por favor: ', option => {
    switch (option) {
      case '1':
        rl.question('Entre com o Titulo que procura:  ', titulo => {
          const result = filmes.filter(film => film.titulo.toLowerCase().includes(titulo.toLowerCase()));
          if (result.length > 0) {
            console.log('Filmes encontrados');
            console.log(result);
          } else {
            console.log('Nenhum Filme com esse nome');
          }
          callback();
        });
        break;

      case '2':
        rl.question('Qual Diretor procura : ', diretor => {
          const result = filmes.filter(film => film.diretor.includes(titulo));
          if (result.length > 0) {
            console.log('Filmes encontrados:');
            console.log(result);
          } else {
            console.log('Nenhum Filme com esse Diretor');
          }
          callback();
        });
        break;

      case '3':
        rl.question('Insira o genero: ', genero => {
          const result = filmes.filter(film => film.genero.toLowerCase().includes(genero.toLowerCase()));
          if (result.length > 0) {
            console.log('Filmes encontrados:');
            console.log(result);
          } else {
            console.log('Nenhum Filme nesse genero.');
          }
          callback();
        });
        break;
      
      case '4':
        rl.question('Insira o ano de lançamento: ', ano => {
          const result = filmes.filter(film => film.ano);
          if (result.length > 0) {
            console.log('Filmes encontrados:');
            console.log(result);
          } else {
            console.log('Nenhum Filme desse ano.');
          }
          callback();
        });
        break;
      default:
        console.log('Escolha uma opção valida!');
        callback();
    }
  });
}

module.exports = {
  cadastroFilmEntry,
  listafilms: listaFilmes,
  updatefilm,
  deletefilm,
  searchfilm
};