import VehiculoHibrido from "./GestionVehiculos/clases/vehiculoHibrido.js";

let objHibrido = new VehiculoHibrido();
objHibrido.cargarBateria(10);
objHibrido.usarBateria(20);
objHibrido.llenarTanque(50);
objHibrido.usarCombustible(30);
objHibrido.mostrarEstado();