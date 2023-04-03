console.log("Esto anda!");

const VARyear = new Date().getFullYear();
console.log(VARyear); // Output: the current year (e.g. "2023")

const tableData = [
    ["name", "director", "year"],
    ["Superman", "Richard Donner", "1978"],
    ["Superman 2 Richard Donner cut", "Richard Donner", "2006"],
    ["Superman returns", "Richard Donner", "2006"],
    ["Batman", "Tim Burton", "1989"],
    ["Batman Returns", "Tim Burton", "1992"],
    ["Batman begins", "Christopher Nolan", "2005"],
    ["The dark knight", "Christopher Nolan", "2007"],
    ["The dark knight rises", "Christopher Nolan", "2011"],
    ["Watchmen", "Zack Snyder", "2009"],
    ["Man of steel", "Zack Snyder", "2013"],
    ["Batman v Superman", "Zack Snyder", "2016"],
    ["Zack Snyders Justice league", "Zack Snyder", "2021"],
    ["Wonder woman", "Patty Jenkins", "2017"],
    ["Aquaman", "James Wan", "2018"],
    ["Peacemaker", "James Gunn", "2021"],
    ["The penguin", "Matt Reeves", "2024"],
    ["Wonder woman 1984", "Patty Jenkins", "2020"],
    ["Suicide squad", "David Ayer", "2016"],
    ["The suicide squad", "James Gunn", "2021"],
    ["Shazam!", "David S. Sandberg", "2019"],
    ["Shazam! fury of the gods", "David S. Sandberg", "2022"],
    ["Birds of prey", "Cathty Yan", "2020"],
    ["Black adam", "David S. Sandberg", "2022"],
    ["Joker", "Todd Phillips", "2019"],
    ["Joker folie e deux", "Todd Phillips", "2023"],
    ["The batman part 2", "Matt Reeves", "2025"],
    ["The batman", "Matt Reeves", "2022"],
    ["Superman legacy", "James Gunn", "2025"],
    ["Waller", "James Gunn", "2024"],
    ["The flash", "Andy Muschietti", "2023"],
    ["Aquaman the lost kingdom", "James Wan", "2023"],
    ["Blue beetle", "Angel Manuel Soto", "2023"],
    ["Batgirl", "Adil El Arbi and Bilall Fallah", "2023"],
  ];
  
//FUNCIONES
 function exitProgram(){
    console.log("Exiting program");
    return;
  }

  function buscarAñoLanzamiento(year) {
    const movies = tableData.filter((movie) => movie[2] === year);
    return movies;
  }
  
  function buscarNombreDirector(director) {
    const movies = tableData.filter((movie) => movie[1] === director);
    return movies;
  }
  
  function buscarNombrePelicula(name) {
    const movie = tableData.find((movie) => movie[0] === name);
    return movie;
  }

  function mostrarProximosLanzamientos(year){
    const movies = tableData.filter((movie) => movie[2] >= year);
    return movies;
  }
  
  function ordenAlfabetico(){

  }

  function masNuevas(){

  }

  function masViejas(){

  }

//fin funciones 


  let numeroDecision = prompt("Elegir función : \n 1- Ver todas las peliculas \n 2- Buscar \n 3- Ver proximos estrenos \n 4- Salir");
  
  if(numeroDecision == 1){
    let numeroDecision1 = prompt("Ver todas las peliculas; \n 1- En orden alfabetico \n 2- Más nuevas \n 3- Más Viejas");
    if(numeroDecision1 = 1){
        ordenAlfabetico(tableData);
    }
    else if(numeroDecision1 =2){
        masNuevas(tableData);
    }
    else if(numeroDecision1 =3){
        masViejas(tableData);
    }
}
  
  else if (numeroDecision == 2){
    let numeroDecision2 = prompt("Buscar: \n 1- Nombre de la pelicula \n 2- Director \n 3- Año de lanzamiento");
    if(numeroDecision2 == 1){
        let buscarNombrePeliculaVAR = prompt("Ingrese nombre de pelicula: ")
        console.log(buscarNombrePelicula(buscarNombrePeliculaVAR));
    }
    else if(numeroDecision2 == 2){
        let buscarNombreDirectorVAR = prompt("Ingrese nombre del director/directora:")
        console.log(buscarNombreDirector(buscarNombreDirectorVAR));
    }
    else if(numeroDecision2 == 3){
        let buscarAñoLanzamientoVAR = prompt("Ingrese año que quiere buscar:")
        console.log(buscarAñoLanzamiento(buscarAñoLanzamientoVAR));
    }
}
  
  else if (numeroDecision == 3){
    console.log(mostrarProximosLanzamientos(VARyear));
    }
  
  else if (numeroDecision = 4){
    exitProgram();
    }
  

  /* NOTAS FUNCIONES
  1- ver todas las peliculas
    a- orden alfabetico
    b- más nuevas
    c- más viejas
  2- Buscar
    a- nombre pelicula
    b- director
    c- año
  3- Ver proximos estrenos
  4- Salir


//FUNCIONES

function ordenAlfabetico(){

}

function masNuevas(){
    for (let i=1 ; i<30 ; i++){

    }    
}

function masViejas(){

}

function buscarNombrePelicula(){

}

function buscarNombreDirector(){

}

function buscarAñoLanzamiento(){

}

function mostrarProximosLanzamientos(){
    for (let i=1 ; i<30 ; i++){
        if(tableData[i] >= year){
            alert("Name: " + tableData[i][1] + "\n Director: " + tableData[i][2] + "\n Año de lanzamiento: " + tableData[i][3]);
        }
    }  
}
*/