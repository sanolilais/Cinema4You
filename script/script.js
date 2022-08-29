

function createCards (data) {
  const $containerMovies = document.getElementById("containerCard")
  $containerMovies.innerHTML = ''
  const $movieSection = document.getElementById("movieSection")
  $movieSection.innerHTML = ''
  const $headerStyle = document.getElementById("painelHeader")
  const $imageBghome = document.getElementById("bgHome")
  $headerStyle.classList.remove('painel-header')
  $headerStyle.classList.add('painel-header-style')
  $imageBghome.style.display = 'none'
  data.Search.forEach(movie => {
    $containerMovies.insertAdjacentHTML ('beforeend' , 
    
    `
      <div class="card">
        <img src=${movie.Poster} id="posters" alt="Imagem de divulgacão do filme ${movie.Title}">
      <div class="info-movie description-movie">
        <div class="movie-title id="movie-title">
        ${movie.Title}
      </div>
        <span id="premiereDate">
          ${movie.Year}
        </span>
        <a href="/?${movie.imdbID}">
        Ler mais</a>
      </div>
    </div>
  `)
    })
  }

function createMovieSection(movie) {
  const $movieSection = document.getElementById("movieSection")
  let movieGenresContent = ''
  const $imageBghome = document.getElementById("bgHome")
  const $headerStyle = document.getElementById("painelHeader")
  $headerStyle.classList.remove('painel-header')
  $headerStyle.classList.add('painel-header-style')
  $imageBghome.style.display = 'none'
  movie.Genre.split(' , ').forEach(genre => {
    movieGenresContent += `<span class="movie-genre">${genre}</span>`
  })
  $movieSection.innerHTML = `
    <div class="movie-infos">
      <div class="movie-genres">
        ${movieGenresContent}
    </div>
    <h1 class="movie-title">${movie.Title}</h1>
    <h4 class="movie-actors">
      ${movie.Actors}
    </h4>
    <div class="movie-details">
      <span class="movie-detail movie-runtime">
        ${movie.Runtime}
      </span>
      <span class="separator"></span>
      <span class="movie-detail release">
        ${movie.Year}
      </span>
      <span class="separator"></span>
      <span class="movie-detail movie-lang">
        ${movie.Language.replaceAll(',' , '')}
      </span>
    </div>
    <p class="movie-plot">
      ${movie.Plot}
    </p>
  </div>
  `

  const $bgContainer = document.createElement('div')
  $bgContainer.id = 'bgContainer'
  $bgContainer.classList.add('bg-container')
  $bgContainer.style.backgroundImage = `url(${movie.Poster})`
  $movieSection.appendChild($bgContainer)

}



async function getMovies(movies) {
 const responseMovies = (`https://omdbapi.com/?s=${movies}&apikey=f3d97dd1`)
 const response = await fetch (responseMovies).then(response => response.json()
  .then(res => res))
   createCards(response)  
} 

const $btnsearch = document.getElementById("btnsearch")
 $btnsearch.addEventListener('click' , () => { 
 const $searchResults = document.getElementById("searchBox").value  
 getMovies($searchResults)
})

if (window.location.search) {
  const $containerMovies = document.getElementById("containerCard")
  $containerMovies.innerHTML = ''
  const movieId = window.location.search.replace('?' , '') 

  const responseMovies = (`https://omdbapi.com/?i=${movieId}&apikey=f3d97dd1`)
  let movie = []
  fetch (responseMovies).then(response => 
    response.json().then(res => {
      movie = res
      createMovieSection(movie)
    }))
}