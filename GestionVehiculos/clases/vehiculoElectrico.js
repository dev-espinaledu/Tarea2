class VehiculoElectrico{
    constructor(nivelBateria) {
        this.nivelBateria = nivelBateria;
    }
    cargarBateria(carga) {
        this.nivelBateria + carga
        console.log(this.nivelBateria+carga+"%");
    }
    usarBateria(uso) {
        this.bateria - uso
        console.log(this.nivelBateria-uso+"%");
    }
}
export default VehiculoElectrico;