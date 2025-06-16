 const apiKey = "72a12e1";

    async function searchMovie() {
      const input = document.getElementById("search-bar").value.trim();
      if (!input) return alert("Please enter a movie name!");

      const title = encodeURIComponent(input);

      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`);
        const data = await response.json();

        if (data.Response === "True") {
          document.getElementById("image").src = data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/150x225?text=No+Image";
          document.getElementById("h2-movie-name").textContent = data.Title;
          document.getElementById("genre-p").textContent = data.Genre;
          document.getElementById("movie-time").textContent = data.Runtime;
          document.getElementById("rating-p").textContent = `IMDb - ${data.imdbRating}/10`;
          document.getElementById("movie-description").textContent = data.Plot;
        } else {
          alert(`❌ Movie not found: ${data.Error}`);
        }
      } catch (error) {
        alert(`⚠️ Error fetching data: ${error.message}`);
      }
    }

    // Trigger search on clicking the search icon
    document.getElementById("icon").addEventListener("click", searchMovie);

  document.getElementById("search-bar").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    searchMovie();
  }

    });