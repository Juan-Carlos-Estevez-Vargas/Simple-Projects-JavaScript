/*
Programa una clase llamada Pelicula. La clase recibirá un objeto al
momento de instanciarse con los siguentes datos: 
* id de la película en IMDB, 
* titulo, 
* director, 
* año de estreno, 
* país o países de origen,
* géneros 
* calificación en IMBD. 

- Todos los datos del objeto son obligatorios. 
- Valida que el id IMDB tenga 9 caracteres, los primeros2 sean letras 
y los 7 restantes números. 
- Valida que el título no rebase los 100 caracteres. 
- Valida que el director no rebase los 50 caracteres. 
- Valida que el año de estreno sea un número entero de 4 dígitos. 
- Valida que el país o paises sea introducidos en forma de arreglo. 
- Valida que los géneros sean introducidos en forma de arreglo. 
- Valida que los géneros introducidos esten dentro de los géneros aceptados. 
- Crea un método estático que devuelva los géneros aceptados. 
- Valida que la calificación sea un número entre 0 y 10
pudiendo ser decimal de una posición. 
- Crea un método que devuelva toda la ficha técnica de la película. 
- Apartir de un arreglo con la información de 3 películas genera 3 
instancias de la clase de forma automatizada e imprime la ficha 
técnica de cada película. 

# Géneros Aceptados: 
* Action,
* Adult,
* Adventure,
* Animation,
* Biography,
* Comedy,
* Crime,
* Documentary,
* Drama,
* Family,
* Fantasy,
* Film Noir,
* Game-Show,
* History,
* Horror,
* Musical,
* Music,
* Mystery,
* News,
* Reality-TV,
* Romance,
* Sci-Fi,
* Short,
* Sport,
* Talk-Show,
* Thriller,
* War,
* Western.
*/
class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this._id = id;
    this._titulo = titulo;
    this._director = director;
    this._estreno = estreno;
    this._pais = pais;
    this._generos = generos;
    this._calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado NO es una cadena de texto`
      );
    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.lenght > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`
      );
    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.error(`${propiedad} "${valor}" está vacío`);
    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado NO es un número.`
      );
    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
    if (!valor instanceof Array)
      return console.error(
        `${propiedad} "${valor}" ingresado NO es un arreglo`
      );
    if (valor.lenght === 0)
      return console.error(`${propiedad} "${valor}" NO tiene datos`);
    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor "${cadena}" ingresado NO es una cadena de texto`
        );
    }
    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB ID", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB ID "${id}" no es válido, debe tener 9 caracteres, los primeros 2 deben ser letras minúsculas y los 7 restantes números enteros.`
        );
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo))
      this.validarLongitudCadena("Título", titulo, 100);
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno))
      if (!/^([0-9]{4})$/.test(estreno))
        return console.error(
          `Año de estreno "${estreno}" no es válido, debe tener 4 números enteros.`
        );
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        console.log(genero, Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Género(s) incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error("La calificación debe ser de 0 a 10.")
        : (this._calificacion = calificacion.toFixed(1));
  }

  fichaTecnica() {
    document.write(
      `"<br>""<br>"Título: ${this._titulo} "<br>" Director: ${
        this._director
      } "<br>" Año: ${this._estreno} "<br>" Pais: ${this._pais.join(
        " - "
      )} "<br>" Géneros: ${this._generos.join(", ")} "<br>" Calificación: ${
        this._calificacion
      } "<br>" IMDB ID: ${this._id}.`
    );
  }
}

const peliculas = [
  {
    id: "tt6785643",
    titulo: "Anaconda 2",
    director: "James Cameron",
    estreno: 2012,
    pais: ["Colombia"],
    generos: ["Adventure"],
    calificacion: 7,
  },
  {
    id: "fr5671234",
    titulo: "El retrato de Dorian Gray",
    director: "Arnulfo Buitrago",
    estreno: 2000,
    pais: ["USA", "Canadá"],
    generos: ["Drama", "Horror"],
    calificacion: 7.5,
  },
  {
    id: "hj7623189",
    titulo: "Casese quien pueda",
    director: "Maria Jimenez",
    estreno: 2014,
    pais: ["México"],
    generos: ["Comedy", "Romance"],
    calificacion: 7.5,
  },
];

peliculas.forEach((el) => new Pelicula(el).fichaTecnica());
