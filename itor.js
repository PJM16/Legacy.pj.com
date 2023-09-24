const codesData = {
  maquina: [
    { codigo: '10', parada: 'Mapasingue', troncal: 'Troncal 3' },
    { codigo: '133', parada: 'Roberto Serrano', troncal: 'Troncal 2' },
    // ...otros datos de códigos de máquina
  ],
  validador: [
    { codigo: 'V100', torniquete: 'Torniquete 1', parada: 'Barrio Centenario', troncal: 'Troncal 1' },
    { codigo: 'V200', torniquete: 'Torniquete 2', parada: 'Roberto Serrano', troncal: 'Troncal 2' },
    // ...otros datos de códigos de validador
  ],
};

document.addEventListener('DOMContentLoaded', function () {
  const optionButtons = document.querySelectorAll('.option-button');
  const searchInputI = document.getElementById('searchInputI');
  const searchResults = document.getElementById('searchResults');

  let currentTarget = ''; // Variable para almacenar la opción actual

  optionButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentTarget = button.getAttribute('data-target');
      searchResults.innerHTML = ''; // Limpiar resultados al cambiar de opción
      searchInputI.style.display = 'block'; // Mostrar la caja de texto
      if (currentTarget === 'maquina') {
        searchInputI.placeholder = 'Ingrese el Código de MVRT a buscar...';
      } else if (currentTarget === 'validador') {
        searchInputI.placeholder = 'Ingrese el Código de Validador a buscar...';
      }
      searchInputI.value = ''; // Limpiar campo de búsqueda al cambiar de opción
    });
  });

  searchInputI.addEventListener('input', () => {
    const searchTerm = searchInputI.value.trim(); // Obtener el término de búsqueda
    if (currentTarget && searchTerm) {
      search(currentTarget, searchTerm); // Pasar la opción actual y el término de búsqueda
    } else {
      searchResults.innerHTML = ''; // Limpiar resultados si no hay término de búsqueda
    }
  });

  function search(target, searchTerm) {
    // Obtener los datos correspondientes al target seleccionado
    const codes = codesData[target];
    if (!codes) {
      searchResults.innerHTML = '<p>Opción no válida.</p>';
      return;
    }

    // Buscar el código específico y mostrar la información
    const matchingCode = codes.find(code => code.codigo === searchTerm);

    // Mostrar los resultados
    if (matchingCode) {
      searchResults.innerHTML = formatResult(matchingCode, target);
    } else {
      searchResults.innerHTML = '<p>El código no existe.</p>';
    }
  }

  function formatResult(data, target) {
    if (target === 'maquina') {
      return `
        <div>
          <p><strong>Código:</strong> ${data.codigo}</p>
          <p><strong>Parada:</strong> ${data.parada}</p>
          <p><strong>Troncal:</strong> ${data.troncal}</p>
        </div>
      `;
    } else if (target === 'validador') {
      return `
        <div>
          <p><strong>Código:</strong> ${data.codigo}</p>
          <p><strong>Torniquete:</strong> ${data.torniquete}</p>
          <p><strong>Parada:</strong> ${data.parada}</p>
          <p><strong>Troncal:</strong> ${data.troncal}</p>
        </div>
      `;
    }
  }
});
