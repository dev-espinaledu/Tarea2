class VehiculoCombustion {
    constructor(nivelCombustible) {
        this.nivelCombustible = nivelCombustible;
    }
    llenarTanque(carga) {
        this.nivelCombustible + carga;
        console.log("Nivel de combustible después de llenar: " + this.nivelCombustible + "%");
    }
    usarCombustible(uso) {
        this.nivelCombustible - uso;
        console.log("Nivel de combustible después de usar: " + this.nivelCombustible + "%");
    }
}
export default VehiculoCombustion;