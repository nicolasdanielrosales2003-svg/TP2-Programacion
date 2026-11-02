const peliculas = [
  {
    titulo: "Interestelar",
    anio: 2014,
    genero: "Ciencia ficción",
    imagen: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    descripcion: "Un grupo de exploradores viaja más allá de esta galaxia para buscar un futuro para la humanidad."
  },
  {
    titulo: "Batman: El caballero de la noche",
    anio: 2008,
    genero: "Acción",
    imagen: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    descripcion: "Batman se enfrenta al Joker, un criminal que pone a prueba los límites de Ciudad Gótica."
  },
  {
    titulo: "Spider-Man: Un nuevo universo",
    anio: 2018,
    genero: "Animación",
    imagen: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    descripcion: "Miles Morales descubre sus poderes y conoce a otros Spider-Man de universos diferentes."
  },
  {
    titulo: "El origen",
    anio: 2010,
    genero: "Ciencia ficción",
    imagen: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    descripcion: "Un especialista en sueños recibe la misión de implantar una idea en la mente de otra persona."
  },
  {
    titulo: "Coco",
    anio: 2017,
    genero: "Animación",
    imagen: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    descripcion: "Miguel llega al mundo de los muertos y descubre secretos importantes de su familia."
  },
  {
    titulo: "Jurassic Park",
    anio: 1993,
    genero: "Aventura",
    imagen: "https://image.tmdb.org/t/p/w500/d9mtMGQDLANKieb9PbD3yK7xxzo.jpg",
    descripcion: "Un parque con dinosaurios clonados se convierte en una aventura peligrosa cuando falla la seguridad."
  },
  {
    titulo: "Volver al futuro",
    anio: 1985,
    genero: "Aventura",
    imagen: "https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg",
    descripcion: "Marty McFly viaja accidentalmente al pasado y debe asegurarse de que sus padres se conozcan."
  },
  {
    titulo: "El rey león",
    anio: 1994,
    genero: "Animación",
    imagen: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    descripcion: "Simba emprende un camino de crecimiento para aceptar su lugar en el ciclo de la vida."
  },
  {
    titulo: "Parásitos",
    anio: 2019,
    genero: "Suspenso",
    imagen: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    descripcion: "Una familia con pocos recursos se introduce poco a poco en la vida de una familia adinerada."
  },
  {
    titulo: "Toy Story",
    anio: 1995,
    genero: "Animación",
    imagen: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    descripcion: "Woody y Buzz deben aprender a convivir cuando un nuevo juguete llega al cuarto de Andy."
  },
  {
    titulo: "Gladiador",
    anio: 2000,
    genero: "Drama",
    imagen: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    descripcion: "Un general romano cae en desgracia y lucha como gladiador para buscar justicia."
  },
  {
    titulo: "Buscando a Nemo",
    anio: 2003,
    genero: "Animación",
    imagen: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    descripcion: "Un pez payaso cruza el océano para encontrar a su hijo, con ayuda de la olvidadiza Dory."
  }
];

// Elementos de la página
const filtroGenero = document.querySelector("#filtro-genero");
const catalogo = document.querySelector("#catalogo");
const buscar = document.querySelector("#buscar");
const limpiar = document.querySelector("#limpiar");
const cantidad = document.querySelector("#cantidad");
const estado = document.querySelector("#estado");
const ayuda = document.querySelector("#ayuda");
const sinResultados = document.querySelector("#sin-resultados");

// Imagen alternativa por si un póster no carga
function imagenDeRespaldo(titulo) {
  const texto = titulo.replace(/[&<>"']/g, "").slice(0, 26);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="400" height="600" viewBox="0 0 400 600">
      <rect width="400" height="600" fill="#191b1f"/>
      <circle cx="200" cy="210" r="70" fill="#26332c"/>
      <path d="M80 430 Q200 300 320 430 V520 H80Z" fill="#355b49"/>
      <text x="200" y="565" text-anchor="middle"
            font-family="Arial" font-size="20" fill="#7cc9a7">${texto}</text>
    </svg>`;

  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// Crear la tarjeta de una película
function crearTarjeta(pelicula) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "pelicula";

  const imagen = document.createElement("img");
  imagen.className = "poster";
  imagen.src = pelicula.imagen;
  imagen.alt = `Póster de ${pelicula.titulo}`;
  imagen.loading = "lazy";

  imagen.onerror = () => {
    imagen.onerror = null;
    imagen.src = imagenDeRespaldo(pelicula.titulo);
  };

  const info = document.createElement("div");
  info.className = "info";

  const meta = document.createElement("div");
  meta.className = "meta";

  const genero = document.createElement("span");
  genero.className = "genero";
  genero.textContent = pelicula.genero;

  const anio = document.createElement("span");
  anio.textContent = pelicula.anio;

  const titulo = document.createElement("h3");
  titulo.textContent = pelicula.titulo;

  const descripcion = document.createElement("p");
  descripcion.textContent = pelicula.descripcion;

  meta.append(genero, anio);
  info.append(meta, titulo, descripcion);
  tarjeta.append(imagen, info);

  return tarjeta;
}

// Mostrar las películas en pantalla
function mostrarPeliculas(lista) {
  catalogo.replaceChildren(...lista.map(crearTarjeta));

  cantidad.textContent = lista.length;
  sinResultados.hidden = lista.length !== 0;

  const texto = buscar.value.trim();

  if (texto.length >= 3) {
    estado.textContent = `${lista.length} resultado(s) para "${texto}"`;
  } else {
    estado.textContent = "Mostrando películas según el filtro";
  }
}

// Buscar por texto y filtrar por género
function buscarPeliculas() {
  const texto = buscar.value.trim().toLocaleLowerCase("es");
  const generoSeleccionado = filtroGenero.value;

  if (texto.length > 0 && texto.length < 3) {
    ayuda.textContent =
      "Escribí una letra más para iniciar la búsqueda (mínimo 3).";
  } else {
    ayuda.textContent =
      "Podés buscar por título, género o descripción.";
  }

  const resultados = peliculas.filter((pelicula) => {
    const coincideGenero =
      generoSeleccionado === "todos" ||
      pelicula.genero === generoSeleccionado;

    const contenido =
      `${pelicula.titulo} ${pelicula.genero} ${pelicula.descripcion}`
        .toLocaleLowerCase("es");

    const coincideTexto =
      texto.length < 3 || contenido.includes(texto);

    return coincideGenero && coincideTexto;
  });

  mostrarPeliculas(resultados);
}

// Eventos: cada uno se registra una sola vez
buscar.addEventListener("input", buscarPeliculas);
filtroGenero.addEventListener("change", buscarPeliculas);

limpiar.addEventListener("click", () => {
  buscar.value = "";
  buscarPeliculas();
  buscar.focus();
});

// Mostrar el catálogo al abrir la página
mostrarPeliculas(peliculas);
