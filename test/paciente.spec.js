const { expect } = require('chai');
const Báscula = require('./Modelos/Bascula.js'); 

describe('Báscula', () => {
  let bascula;

  beforeEach(() => {
    bascula = new Báscula();
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
    expect(bascula.calcularIMC()).to.equal(22.857142857142858);
  });

  it('debería describir el IMC correctamente', () => {
    expect(bascula.describirIMC(15)).to.equal('Infrapeso (delgadez severa)');
    expect(bascula.describirIMC(17)).to.equal('Infrapeso (delgadez moderada)');
  });
});
