import VehiculoElectrico from "./vehiculoElectrico.js";
import VehiculoCombustion from "./vehiculoCombustion.js";

class VehiculoHibrido {
  constructor() {
    this.vehiculoElectrico = new VehiculoElectrico(10);
    this.vehiculoCombustion = new VehiculoCombustion(20);
  }
  cargarBateria(carga) {
    this.vehiculoElectrico.cargarBateria(carga);
  }
  usarBateria(uso) {
    this.vehiculoElectrico.usarBateria(uso);
  }
  llenarTanque(carga) {
    this.vehiculoCombustion.llenarTanque(carga);
  }
  usarCombustible(uso) {
    this.vehiculoCombustion.usarCombustible(uso);
  }
  /* mostrarEstado() {
    x
  } */
}
export default VehiculoHibrido;
