class VehiculoElectrico {
    constructor(nivelBateria) {
        this.nivelBateria = nivelBateria;
    }
    cargarBateria(carga) {
        this.nivelBateria + carga;
        console.log("Nivel de batería después de cargar: " + this.nivelBateria + "%");
    }
    usarBateria(uso) {
        this.nivelBateria - uso;
        console.log("Nivel de batería después de usar: " + this.nivelBateria + "%");
    }
}
export default VehiculoElectrico;