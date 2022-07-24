// Titles = https://www.omdbapi.com/?s=thor&apikey=a603cf19
// details = https://www.omdbapi.com/?i=tt0114709&apikey=a603cf19



const spinnerIcon = document.querySelector(".spinner--wrapper")
const searchIcon = document.querySelector(".magnifying_glass--wrapper")
const filterHeader = document.querySelector(".filter_header")
const faultPage = document.getElementById("fault")
const faultMessage = document.querySelector(".fault_para")
const welcomePage = document.querySelector(".welcome_page--image-container")
const moviesAndFilter = document.querySelector(".search_results")
const moviesList = document.querySelector(".movie_wrapper")

const enterInput = document.getElementById("input")



// Listening for user input
enterInput.addEventListener("keydown", function (event) {
    if(event.key === "Enter"){
        clickFunction()
    }

})

// retrieving user input

function clickFunction(){
    let userInput = (enterInput.value).trim()
    if (userInput.length > 0 ) {
        spinnerIcon.classList.add("display_block")
        searchIcon.classList.add("display_none")
        searchResult(userInput)
    }

}


// Redirecting truthy and falsey user input

async function searchResult(userInput) {
    const url = `https://www.omdbapi.com/?s=${userInput}&apikey=a603cf19`
    const fetchData = await fetch(url)
    const dataList = await fetchData.json()

    if (dataList.Response === "True") {
        dataListEl = (dataList.Search).slice(0, 100)
        movieResults(userInput)
        movieId(dataListEl)
        
    }

    else {
        errorPage(userInput)
    }
}

// error Page 

function errorPage(userInput) {
    enterInput.value = ""
    spinnerIcon.classList.remove("display_block")
    searchIcon.classList.remove("display_none")
    welcomePage.style.display = "none"
    faultPage.style.display = "block"

    faultMessage.innerHTML = `Search results: ${userInput}`
    
}

// IMDB Rating 

// async function movieId(userInput) {


   
// }

function movieId(dataListEl) {
    moviesList.forEach(movie => {
        movie.addEventListener('mouseover', async () => {
            const idUrl = `https://www.omdbapi.com/?i=${movie.Search.id}&apikey=a603cf19`
            const fetchId = await fetch(idUrl)
            const idList = await fetchId.json()
            console.log(idList)
        })
    })
}




// Movie Page

// function movieResults(userInput) {
//     enterInput.value = ""
//     filterHeader.innerHTML = `Search results: ${userInput}`
//     spinnerIcon.classList.remove("display_block")
//     searchIcon.classList.remove("display_none")
//     welcomePage.style.display = "none"
//     faultPage.style.display = "none"
//     moviesAndFilter.style.display = "block"

    
//     moviesList.innerHTML = dataListEl.map((info) => movieHTML(info)).join("")

// }

// // NEW_TO_OLD">Release, descending</option>
// //"Old_TO_NEW">Release, ascending</option>
// //"HIGH_TO_LOW">Rating, descending</option>
// //"LOW_TO_HIGH"


// function movieHTML(info) {

//     return  `  <div class="movie">
//                 <figure class="movie_poster--wrapper">
//                     <img src="${info.Poster}" class="movie_poster" alt="">
//                     <div class="description_background"></div>
//                     <div class="plot_description">
//                         <h3 class="plot_description--plot">
//                             The Dark Knight of Gotham City begins his war on crime with his first major
//                             enemy
//                             being Jack Napier, a criminal who becomes the clownishly homicidal Joker.
//                         </h3>

//                         <h4 class="plot_description--genre">
//                             Action, Adventure
//                         </h4>


//                         <h5 class="plot_description--awards">
//                             Won 1 Oscar. 9 wins & 26 nominations total
//                         </h5>

//                         <h6 class="plot_description--rating">
//                             IMDB Rating: 8/10
//                         </h6>

//                     </div>
//                 </figure>



//                 <div class="movie_description">
//                     <h2 class="movie_title">
//                     ${info.Title}
//                     </h2>
//                     <h3 class="movie_year">
//                     ${info.Year}
//                     </h3>

//                 </div>
//             </div>
//     `


// }
