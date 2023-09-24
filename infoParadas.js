document.addEventListener("DOMContentLoaded", function () {
    const troncalSelect = document.getElementById('troncalSelect');
    const paradaSelect = document.getElementById('paradaSelect');
    const detallesContainer = document.getElementById('paradaDetails');

    // Array con datos de paradas (simulado)
    const paradasData = {
        Troncal1: [
            {
                nombre: "Terminal Guasmo",
                tambien: "Tango Golfo, TG",
                sentidoIntegracion: "Sur-Norte",
                puertas: "Sin puertas automáticas",
                torniquetes: " X Torniquetes Bajos de Ingreso, X Torniquetes Bajos de Salida",
                compuertas: "Operativa",
                mvrt: " 140, 200, 300",
                direccion: " Av. Raul Clemente Huerta y XXXXXXX",
                agentes: "3",
                cia: "XXXXXX",
                logo:"593.png",
                // ...otros detalles
            },
            {
                nombre: "Terminal Río Daule",
                tambien: "TRD, Tango Romeo Delta",
                sentidoIntegracion: "Norte-Sur y Sur-Norte",
                puertas: "Sin puertas automáticas",
                torniquetes: " X Torniquetes Bajos de Ingreso, X Torniquetes Bajos de Salida",
                compuertas: "Operativa",
                mvrt: " 140, 200, 300",
                direccion: " Av. Benjamin Rosales y Av. de las Américas",
                agentes: "3",
                cia: "593 Security",
                logo:"593.png",
                // ...otros detalles
            },
            {
                nombre: "Guasmo Sur",
                tambien: "GS, Golfo Sierra",
                sentidoIntegracion: "Norte-Sur y Sur-Norte",
                puertas: "X juegos de puertas en Sentido N/S y X juegos de puertas en Sentido S/N",
                torniquetes: " X Torniquetes Bajos de Ingreso, X Torniquetes Altos de Salida",
                compuertas: "Operativa",
                mvrt: " 140, 200",
                direccion: " Av. Raul Clemente Huerta y XXXXXXX",
                agentes: "3",
                cia: "XXXXXX",
                logo:"593.png",
                // ...otros detalles
            },
            {
                nombre: "Terminal Río Daule",
                tambien: "Tango Golfo, TG",
                sentidoIntegracion: "Sur-Norte",
                puertas: "Sin puertas automáticas",
                torniquetes: " X Torniquetes Bajos de Ingreso, X Torniquetes Bajos de Salida",
                compuertas: "Operativa",
                mvrt: " 140, 200, 300",
                direccion: " Av. Raul Clemente Huerta y XXXXXXX",
                agentes: "3",
                cia: "XXXXXX",
                logo:"593.png",
                // ...otros detalles
            },
            // ...otras paradas de Troncal 1
        ],
        Troncal2: [
            {
                nombre: "Terminal 25 de Julio",
                sentidoIntegracion: "Norte-Sur y Sur-Norte",
                // ...otros detalles
            },
            // ...otras paradas de Troncal 2
        ],
        // ...otras troncales
    };

    // Función para cargar las paradas
    function loadParadas(troncal) {
        paradaSelect.innerHTML = '<option value="">Escoger Parada</option>'; // Limpiar opciones anteriores

        const paradas = paradasData[troncal];
        if (paradas) {
            paradas.forEach((parada, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.text = parada.nombre;
                paradaSelect.appendChild(option);
            });
        }
    }

    // Event listener para el formulario de troncales
    troncalSelect.addEventListener('change', (event) => {
        const selectedTroncal = event.target.value;
        if (selectedTroncal) {
            loadParadas(selectedTroncal);
        } else {
            paradaSelect.innerHTML = '<option value="">Escoger Parada</option>';
            detallesContainer.innerHTML = ''; // Limpiar detalles
        }
    });

    // Event listener para el formulario de paradas
    paradaSelect.addEventListener('change', (event) => {
        const selectedTroncal = troncalSelect.value;
        const selectedParadaIndex = event.target.value;

        if (selectedTroncal && selectedParadaIndex !== '') {
            const selectedParada = paradasData[selectedTroncal][selectedParadaIndex];
            showDetalles(selectedParada);
        } else {
            detallesContainer.innerHTML = ''; // Limpiar detalles
        }
    });

    // Función para mostrar detalles de la parada
    function showDetalles(parada) {
        detallesContainer.innerHTML = `
            <h3>Detalles de la Parada: ${parada.nombre}</h3>
            <p><strong>Tambien se la conoce como: </strong>${parada.tambien}</p>
            <p><strong>Sentido de Integración: </strong> ${parada.sentidoIntegracion}</p>
            <p><strong>Puertas: </strong> ${parada.puertas}</p>
            <p><strong>Torniquetes: </strong> ${parada.torniquetes}</p>
            <p><strong>Compuerta: </strong> ${parada.compuertas}</p>
            <p><strong>MVRT: </strong> ${parada.mvrt}</p>
            <p><strong>Dirección: </strong> ${parada.direccion}</p>
            <p> ${parada.agentes} <strong> agentes de la compañia </strong> ${parada.cia}</p>
            <img src="${parada.logo}">
            
            <!-- Agrega más detalles aquí -->
        `;
        detallesContainer.style.display = "block"; // Mostrar la sección
    }
});
