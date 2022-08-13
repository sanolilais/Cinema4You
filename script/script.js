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
const responseMovies = ('https://omdbapi.com/?s='+{movies})
const response = await fetch (responseMovies)
const dataMovie = await response.json()



createCards(dataMovie)    
} 

function searchMovie() {
const $searchResults = document.getElementById("searchBox").value
const $btnsearch = document.getElementById("btnsearch")
$btnsearch.addEventListener('click' , searchMovie)

listMovies($searchResults)
}

async function listMovies(searchResults) {
const findMovie = ('https://omdbapi.com/?s='+searchResults)
const res = await fetch (findMovie)
const datamovies = await res.json()
  

}
searchMovie()
listMovies()
getMovies()

