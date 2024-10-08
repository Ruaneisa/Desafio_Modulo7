
function estudantePerfil (id, name, matricula, curso, ano) {
    return {
      id,
      name,
      matricula,
      curso,
      ano
    };
  }
  
  module.exports = {
    createStudent: estudantePerfil
  };
  