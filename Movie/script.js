const container = document.querySelector('#movie-container');

const getData = async() =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=2475f1ac83e01913e15755759095f9e5");
  const films = await data.json();
  
  films.results.forEach(film => {
      const img = `https://image.tmdb.org/t/p/w500/${film.backdrop_path}`;
      container.innerHTML += `
          <h2>${film.title}</h2>
          <img src="${img}" >
          <p>${film.overview}</p>`;
          
     
  });
}

getData();