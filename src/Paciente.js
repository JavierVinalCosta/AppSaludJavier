class Paciente {
    constructor(nombre, apellidos, fechaNacimiento) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.fechaNacimiento = fechaNacimiento;
      this.bascula = null;
    }
  
    saludar() {
      return `Hola, soy ${this.nombre} ${this.apellidos}.`;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    modificarNombre(nombre) {
      this.nombre = nombre;
    }
  
    obtenerApellidos() {
      return this.apellidos;
    }
  
    modificarApellidos(apellidos) {
      this.apellidos = apellidos;
    }
  
    obtenerFechaNacimiento() {
      return this.fechaNacimiento;
    }
  
    modificarFechaNacimiento(fecha) {
      this.fechaNacimiento = fecha;
    }
  
    obtenerEdad() {
      const fechaActual = new Date();
      const diferencia = fechaActual.getFullYear() - this.fechaNacimiento.getFullYear();
      return diferencia;
    }
  
    modificarBascula(bascula) {
      this.bascula = bascula;
    }
  
    obtenerBascula() {
      return this.bascula;
    }
  
    calcularIMC() {
      if (this.bascula) {
        return this.bascula.calcularIMC();
      } else {
        console.log("No se ha asociado una báscula al paciente.");
        return null;
      }
    }
  }
  
