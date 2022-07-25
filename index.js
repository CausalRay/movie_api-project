// Titles = https://www.omdbapi.com/?s=thor&apikey=a603cf19
// details = https://www.omdbapi.com/?i=tt0114709&apikey=a603cf19

const spinnerIcon = document.querySelector(".spinner--wrapper")
const searchIcon = document.querySelector(".magnifying_glass--wrapper")
const filterHeader = document.querySelector(".filter_header")
const faultMessage = document.querySelector(".fault_para")
const welcomePage = document.querySelector(".welcome_page--image-container")
const moviesAndFilter = document.querySelector(".search_results")
const moviesList = document.querySelector(".movie_wrapper")

const faultPage = document.getElementById("fault")
const enterInput = document.getElementById("input")

// Listening for user input

enterInput.addEventListener("keydown", function (e) {
    if(e.key === "Enter"){
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
        dataListEl = (dataList.Search).slice(0, 9)
        movieResults(userInput)
        moviePage(userInput)
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

// Filter 

function filter_category(event) {
        movieResults(event.target.value)
}

function moviePage(userInput) {
    
    enterInput.value = ""
    filterHeader.innerHTML = `Search results: ${userInput}`
    spinnerIcon.classList.remove("display_block")
    searchIcon.classList.remove("display_none")
    welcomePage.style.display = "none"
    faultPage.style.display = "none"
    moviesAndFilter.style.display = "block"

    console.log(userInput)
}



// Movie Page

async function movieResults(filter) {
   
    if (filter === "OLD_TO_NEW") {
        dataListEl.sort((a, b) => a.Year - b.Year);
      } else if (filter === "NEW_TO_OLD") {
        dataListEl.sort((a, b) => b.Year - a.Year);
      }



    moviesList.innerHTML = dataListEl.map((info) => {
    
   return  `  <div class="movie">
    <figure class="movie_poster--wrapper">
                     <img src="${info.Poster}" class="movie_poster" alt="">
                     <div class="description_background"></div>
                     <div class="plot_description">
                         <h3 class="plot_description--plot">
                            Plot: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus mollitia modi sunt voluptatum hic aspernatur distinctio. Nesciunt at error cupiditate.
                         </h3>
                         <h4 class="plot_description--genre">
                         Genre: Ullam, rem, voluptates
                         </h4>
                         <h5 class="plot_description--awards">
                             Awards: Lorem, ipsum dolor sit amet consectetur adipisicing
                         </h5>
                         <h6 class="plot_description--rating">
                         IMDB Rating: 8/10
                         </h6>
                         </div>
                         </figure>
                         <div class="movie_description">
                         <h2 class="movie_title">
                         ${info.Title}
                         </h2>
                     <h3 class="movie_year">
                     ${info.Year}
                     </h3>
                 </div>
             </div>
             `
            }).join("")
        }

             

             

             