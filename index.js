// Titles = https://www.omdbapi.com/?s=thor&apikey=a603cf19
// details = https://www.omdbapi.com/?i=tt0114709&apikey=a603cf19

const spinnerIcon = document.querySelector(".spinner--wrapper")
const searchIcon = document.querySelector(".magnifying_glass--wrapper")
const filterHeader = document.querySelector(".filter_header")
const faultPage = document.getElementById("fault")
const faultMessage = document.querySelector(".fault_para")
const welcomePage = document.querySelector(".welcome_page--image-container")

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


// Filtering truthy and falsey user input

async function searchResult(userInput) {
    const url = `https://www.omdbapi.com/?s=${userInput}&apikey=a603cf19`
    const fetchData = await fetch(url)
    const dataList = await fetchData.json()

    if (dataList.Response === "True") {
        movieResults(userInput)
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


// Movie Page

function movieResults(userInput) {
    
}


