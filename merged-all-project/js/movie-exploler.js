const searchBar = document.getElementById("search-bar");
const searchIcon = document.querySelector(".fa-search");

// My api key will be add in there
const API_KEY = "YOUR_OMDB_API_KEY";

searchIcon.addEventListener("click", () => {
    const movieTitle = searchBar.value.trim();
    if (movieTitle) {
        fetchMovie(movieTitle);
    }
});

function fetchMovie(title) {
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                document.getElementById("image").src = data.Poster !== "" ? data.Poster : "";
                document.getElementById("genre").textContent = data.Genre;
                document.getElementById("movie-time").textContent = data.Runtime;
                document.getElementById("rating").textContent = `IMDb - ${data.imdbRating}/10`;
                document.getElementById("h2-movie-name").textContent = data.Title;
                document.getElementById("movie-description").textContent = data.Plot;
            } else {
                alert("Movie not found. Try again.");
            }
        })
        .catch(error => {
            console.error("Error fetching movie:", error);
        });
}
