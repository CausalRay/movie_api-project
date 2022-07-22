// API key a603cf19
// Titles = https://www.omdbapi.com/?s=thor&apikey=a603cf19
// details = https://www.omdbapi.com/?i=tt0114709&apikey=a603cf19


const spinnerIcon = document.querySelector(".spinner--wrapper")
const searchIcon = document.querySelector(".magnifying_glass--wrapper")
const enterInput = document.getElementById("input")


// Listening for user input
enterInput.addEventListener("keydown", function (event) {
    if(event.key === "Enter"){
        clickFunction()
    }

})

// Adding loading animation
function clickFunction() {
    searchIcon.style.display = "none"
    spinnerIcon.classList.add("load_spinner");
}

// Used to clear after faulty search/page refresh
