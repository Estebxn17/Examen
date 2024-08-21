class Sede {
    constructor(ubicacion) {
        this.ubicacion = ubicacion;
    }
}

class Compañia {
    constructor(nombre, sede) {
        this.nombre = nombre;
        this.sede = sede;
    }

    getDetalles() {
        return `Nombre de la Compañía: ${this.nombre}, Ubicación de la Sede: ${this.sede.ubicacion}`;
    }
}

let compañias = [];

document.querySelector('#agregarBoton').addEventListener('click', () => {
    const nombreCompañia = document.querySelector('#nombreCompañia').value;
    const ubicacion = document.querySelector('#ubicacion').value;
    const sede = new Sede(ubicacion);
    const compañia = new Compañia(nombreCompañia, sede);
    compañias.push(compañia);

    
    
});

document.querySelector('#mostrarDetalles').addEventListener('click', () => {
    const detalles = document.querySelector('#detalles');
    detalles.innerHTML = ''; 

    for (let i = 0; i < compañias.length; i++) {
        const compañiaDiv = document.createElement('div');
        compañiaDiv.textContent = compañias[i].getDetalles();
        detalles.appendChild(compañiaDiv);
    }
});
