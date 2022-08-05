const btn = document.getElementById('btncheck')

btn.addEventListener('change' , () => {
  document.body.classList.toggle('dark')
})





const showTitle = document.querySelector(".movie-name")      
const showYear = document.getElementById("premieredate")                         
const showImage = document.getElementById("first-image-carousel")                                                                                                                                                  
async function mostrarFilme(search) {
  
  const responseUrl = (`https://omdbapi.com/?s=orphan+black&page=1&apikey=f3d97dd1`)
  const res = await fetch (responseUrl)
  const data = await res.json()
  console.log(data)
  console.log(res)

  showImage.src = data.Search[0]['Poster']
  showTitle.innerHTML = data.Search[0].Title
  showYear.innerHTML = data.Search[0].Year
}                                                                                                    
mostrarFilme()                                        