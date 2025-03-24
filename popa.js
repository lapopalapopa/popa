// Definir la lista de letras
const letras = ['.','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', ',',
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ä', 'Ö', '▒', 'ꍇ', '⁄̷', '︴', '◌', ' ͧͣͤͥͦ', ' ͦͧͣͤͥ'];

// Lista de frases
const frases = [
  ['Pintó', 'otra', 'París', 'en Argentina'],
  ['parece', 'otra', 'poesía', 'argentina'],
  ['poesía', 'argentina', 'para', 'androides'],
  ['poesía', 'argentina', 'para', 'antes'],
  ['plan', 'olvidado', 'para', 'antes'],
  ['poesía', 'obcecada', 'para', 'antes'],
  ['poesía', 'olvidada', 'para', 'ayer'],
  ['Palabras', 'Oscilantes', 'Profundas', 'Armonías'],
  ['palabras', 'orbitando', 'en', 'profunda armonía'],
  ['palabras', 'onda', 'poesía', 'armónica'],
  ['palabras', 'onda', 'poesía', 'artística'],
  ['Poesía', 'onda', 'para', 'algo'],
  ['Palabritas', 'oigan', 'poéticas', 'argentas'],
  ['Podemos', 'obsequiar', 'poesía', 'aleatoria'],
  ['Pensamiento', 'Oscuro', 'Por', 'Aquí'],
  ['pensemos', 'otros', 'poemas', 'ahora'],
  ['poemas', 'oremos,', 'poemas', 'aremos'],
  ['para', 'orar', 'precisamos', 'alma'],
  ['perdimos', 'otra', 'password', 'ahora'],
  ['Perdí', 'oído', 'por', 'apollinaire'],
  ['pero', 'oigan,', 'poetas', 'atareados'],
  ['poseí,', 'odié,', 'perdí,', 'amé'],
  ['Publicó', 'otro', 'poeta', 'aliade'],
  ['pues', 'ordenemos,', 'publiquemos,', 'amén'],
  ['pensé', 'otros', 'poemas', 'antes'],
  ['podemos', 'only', 'parlar', 'así?'],
  ['perdón,', 'Olga,', 'por', 'alejarnos'],
  ['posta,', 'o', 'sea,', 'posta: amé'],
  ['pisemos', 'osamentas', 'por', 'allá'],
  ['pisa', 'omnipresente', 'pizarnik', 'alejandra']
];
// Función para obtener una letra aleatoria
function letraAleatoria() {
  const indice = Math.floor(Math.random() * letras.length);
  return letras[indice];
}

// Función para generar el texto aleatorio con el formato especificado
function generarTextoAleatorio(callback) {
 const targets = ['P', '.', 'O', '.', 'P', '.', 'A', '.'];
 let textoArray = ['_', '_', '_', '_', '_', '_', '_', '_'];
 
 let fraseElegida; // Variable para almacenar la frase seleccionada

function fillPosition(index) {
  if (textoArray[index] !== '_') {
    return;
  }

  // Si aún no se ha elegido una frase, seleccionamos una aleatoria al principio
  if (!fraseElegida) {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    fraseElegida = frases[indiceAleatorio];
    console.log(`Frase elegida: ${fraseElegida.join(' ')}`);
  }

  const intervalId = setInterval(() => {
    const letra = letraAleatoria();
    textoArray[index] = letra;
    callback(textoArray.join(''));

    if (letra === targets[index]) {
      clearInterval(intervalId);
      console.log(`Letra fija en ${index}: ${letra}`);

      // Asignar la palabra correspondiente de la frase elegida según el índice
      let palabra;
      if (index === 0) {
        palabra = fraseElegida[0]; // palabra en la posición 0 de la frase
      } else if (index === 2) {
        palabra = fraseElegida[1]; // palabra en la posición 1 de la frase
      } else if (index === 4) {
        palabra = fraseElegida[2]; // palabra en la posición 2 de la frase
      } else if (index === 6) {
        palabra = fraseElegida[3]; // palabra en la posición 3 de la frase
      }

      // Mostrar en consola la palabra que se asignará
      console.log(`Palabra asignada a la posición ${index}: ${palabra}`);

      // Mostrar la palabra en la posición correspondiente
      if (palabra) {
        mostrarPalabra(index, palabra);
      }

      // Verificar si todas las posiciones están llenas
      if (!textoArray.includes('_')) {
        console.log('Todo el texto está completo:', textoArray.join(''));
        callback(textoArray.join(''));
      }
    }
  }, 200);
}

for (let i = 0; i < textoArray.length; i++) {
  if (textoArray[i] === '_') {
    fillPosition(i);
  }
}


}

// Función para mostrar el texto aleatorio en el div
function mostrarTextoAleatorio(texto) {
  const textoAleatorioContainer = document.getElementById('texto-aleatorio');
  textoAleatorioContainer.textContent = texto;
}


// Función para generar el texto aleatorio con el formato especificado
function generarTextoAleatorio(callback) {
 const targets = ['P', '.', 'O', '.', 'P', '.', 'A', '.'];
 let textoArray = ['_', '_', '_', '_', '_', '_', '_', '_'];

 let fraseElegida; // Variable para almacenar la frase seleccionada

function fillPosition(index) {
  if (textoArray[index] !== '_') {
    return;
  }

  // Si aún no se ha elegido una frase, seleccionamos una aleatoria al principio
  if (!fraseElegida) {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    fraseElegida = frases[indiceAleatorio];
    console.log(`Frase elegida: ${fraseElegida.join(' ')}`);
  }

  const intervalId = setInterval(() => {
    const letra = letraAleatoria();
    textoArray[index] = letra;
    callback(textoArray.join(''));

    if (letra === targets[index]) {
      clearInterval(intervalId);
      console.log(`Letra fija en ${index}: ${letra}`);

      // Asignar la palabra correspondiente de la frase elegida según el índice
      let palabra;
      if (index === 0) {
        palabra = fraseElegida[0]; // palabra en la posición 0 de la frase
      } else if (index === 2) {
        palabra = fraseElegida[1]; // palabra en la posición 1 de la frase
      } else if (index === 4) {
        palabra = fraseElegida[2]; // palabra en la posición 2 de la frase
      } else if (index === 6) {
        palabra = fraseElegida[3]; // palabra en la posición 3 de la frase
      }

      // Mostrar en consola la palabra que se asignará
      console.log(`Palabra asignada a la posición ${index}: ${palabra}`);

      // Mostrar la palabra en la posición correspondiente
      if (palabra) {
        mostrarPalabra(index, palabra);
      }

      // Verificar si todas las posiciones están llenas
      if (!textoArray.includes('_')) {
        console.log('Todo el texto está completo:', textoArray.join(''));
        callback(textoArray.join(''));
      }
    }
  }, 200);
}

for (let i = 0; i < textoArray.length; i++) {
  if (textoArray[i] === '_') {
    fillPosition(i);
  }
}


}

// Función para mostrar el texto aleatorio en el div
function mostrarTextoAleatorio(texto) {
  const textoAleatorioContainer = document.getElementById('texto-aleatorio');
  textoAleatorioContainer.textContent = texto;
}

// Asegurar que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
  generarTextoAleatorio(mostrarTextoAleatorio);
});
