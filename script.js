// Catálogo inicial: 12 películas con pósters, datos y descripciones.
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
    imagen: "https://image.tmdb.org/t/p/w500/jjO4J8Q2g5zT7wF1s9n8x5b3s5P.jpg",
    descripcion: "Un parque con dinosaurios clonados se convierte en una aventura peligrosa cuando falla la seguridad."
  },
  {
    titulo: "Volver al futuro",
    anio: 1985,
    genero: "Aventura",
    imagen: "https://image.tmdb.org/t/p/w500/fq3wyOs1RHyz2yfzsb4sck7a0T.jpg",
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

const catalogo = document.querySelector("#catalogo");
const buscar = document.querySelector("#buscar");
const limpiar = document.querySelector("#limpiar");
const cantidad = document.querySelector("#cantidad");
const estado = document.querySelector("#estado");
const ayuda = document.querySelector("#ayuda");
const sinResultados = document.querySelector("#sin-resultados");

// Evita que errores de una URL de póster dejen una imagen rota.
function imagenDeRespaldo(titulo) {
  const texto = titulo.replace(/[&<>"']/g, "").slice(0, 26);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">
    <rect width="400" height="600" fill="#e8ece7"/>
    <circle cx="200" cy="210" r="70" fill="#c8d7cc"/>
    <path d="M80 430 Q200 300 320 430 V520 H80Z" fill="#b3c9bb"/>
    <text x="200" y="565" text-anchor="middle" font-family="Arial" font-size="20" fill="#294c3b">${texto}</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

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

function mostrarPeliculas(lista) {
  catalogo.replaceChildren(...lista.map(crearTarjeta));
  cantidad.textContent = lista.length;
  sinResultados.hidden = lista.length !== 0;

  const texto = buscar.value.trim();
  if (texto.length >= 3) {
    estado.textContent = `${lista.length} resultado(s) para “${texto}”`;
  } else {
    estado.textContent = "Mostrando todas las películas";
  }
}

function buscarPeliculas() {
  const texto = buscar.value.trim().toLocaleLowerCase("es");

  if (texto.length > 0 && texto.length < 3) {
    ayuda.textContent = "Escribí una letra más para iniciar la búsqueda (mínimo 3).";
    mostrarPeliculas(peliculas);
    return;
  }

  ayuda.textContent = "Podés buscar por título, género o descripción.";
  if (texto.length === 0) {
    mostrarPeliculas(peliculas);
    return;
  }

  const resultados = peliculas.filter((pelicula) => {
    const contenido = `${pelicula.titulo} ${pelicula.genero} ${pelicula.descripcion}`.toLocaleLowerCase("es");
    return contenido.includes(texto);
  });

  mostrarPeliculas(resultados);
}

buscar.addEventListener("input", buscarPeliculas);
limpiar.addEventListener("click", () => {
  buscar.value = "";
  buscarPeliculas();
  buscar.focus();
});

mostrarPeliculas(peliculas);
