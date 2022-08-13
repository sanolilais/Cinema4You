const btn = document.getElementById('btncheck')

btn.addEventListener('change' , () => {
  document.body.classList.toggle('dark')
})
                      

function createCards (data) {
data.Search.forEach(movie => {
const containerMovies = document.getElementById("containerCard")
 containerMovies.insertAdjacentHTML('beforeend', 
`
  <div class="card">
    <img src=${movie.Poster} id="posters" alt="">
    <div class="info-movie texts-about-movie">
    <div class="movie-name" id="moviename">
    ${movie.Title}
    </div>
    <span id="premieredate">
    ${movie.Year}
    </span>
    </div>      
    </div>
` )
}); 
}

async function getMovies(movies) {
  const responseMovies = (`http://omdbapi.com/?s=${movies}&apikey=f3d97dd1`)

  const response = await fetch (responseMovies).then(response => response.json().then(res => res))
  
  console.log(response)
createCards(response)    
} 

function searchMovie() {
 

listMovies($searchResults)
}

async function listMovies(searchResults) {
  const findMovie = ('https://omdbapi.com/?s='+searchResults)
  const res = await fetch (findMovie)
  const datamovies = await res.json()
}

const $searchResults = document.getElementById("searchBox").value
const $btnsearch = document.getElementById("btnsearch")
$btnsearch.addEventListener('click' , () => {
  const $searchResults = document.getElementById("searchBox").value
  getMovies($searchResults)
})