const { expect } = require('chai');
const Bascula = require('./Modelos/Bascula.js'); // Asegúrate de ajustar la ruta correcta

describe('Bascula', () => {
  let bascula;

  beforeEach(() => {
    bascula = new Bascula();
  });

  it('debería inicializar sin registros', () => {
    expect(bascula.obtenerNumeroAnotaciones()).to.equal(0);
  });

  it('debería anotar un peso correctamente', () => {
    bascula.anotarPeso(70, 1.75);
    expect(bascula.obtenerNumeroAnotaciones()).to.equal(1);
  });

  it('debería obtener el peso máximo correctamente', () => {
    bascula.anotarPeso(70);
    bascula.anotarPeso(80);
    expect(bascula.obtenerPesoMaximo()).to.equal(80);
  });

  it('debería obtener el peso mínimo correctamente', () => {
    bascula.anotarPeso(70);
    bascula.anotarPeso(80);
    expect(bascula.obtenerPesoMinimo()).to.equal(70);
  });

  it('debería calcular el IMC correctamente', () => {
    bascula.anotarPeso(70, 1.75);
    expect(bascula.calcularIMC()).to.equal(22.86); // Ajustado a dos decimales
  });

  it('debería describir el IMC correctamente', () => {
    expect(bascula.describirIMC(15)).to.equal('Infrapeso (delgadez severa)');
    expect(bascula.describirIMC(17)).to.equal('Infrapeso (delgadez moderada)');
    expect(bascula.describirIMC(18)).to.equal('Infrapeso (delgadez aceptable)');
    expect(bascula.describirIMC(22)).to.equal('Peso normal');
    expect(bascula.describirIMC(28)).to.equal('Sobrepeso');
    expect(bascula.describirIMC(32)).to.equal('Obeso (Tipo I)');
    expect(bascula.describirIMC(37)).to.equal('Obeso (Tipo II)');
    expect(bascula.describirIMC(40)).to.equal('Obeso (Tipo III)');
  });
});
