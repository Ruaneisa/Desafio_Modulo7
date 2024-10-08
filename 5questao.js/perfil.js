function criarPerfil (id, name, cargo, departamento, salario) {
    return {
      id,
      name,
      cargo,
      departamento,
      salario
    };
  }
  
  module.exports = {
    criarPerfil
  };
  