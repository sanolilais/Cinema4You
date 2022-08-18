function createCards (data) {
 const containerMovies = document.getElementById("containerCard")
 containerMovies.innerHTML = ''
  data.Search.forEach(movie => {
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
    <button type="button" class="btn-showmore" id="btnshowMore">Ver Mais</button>
    </div>      
    </div>
` )
 }); 
}
async function getMovies(movies) {
 const responseMovies = (`http://omdbapi.com/?s=${movies}&apikey=f3d97dd1`)
 const response = await fetch (responseMovies).then(response => response.json()
  .then(res => res))
   createCards(response)  
} 
async function listMovies(searchResults) { 
 const findMovie = ('https://omdbapi.com/?s='+searchResults)
 const res = await fetch (findMovie)
 const datamovies = await res.json()
} 
const $btnsearch = document.getElementById("btnsearch")
 $btnsearch.addEventListener('click' , () => { 
 const $searchResults = document.getElementById("searchBox").value  
 getMovies($searchResults)
})