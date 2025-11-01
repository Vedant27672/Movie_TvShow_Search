const form = document.querySelector('#searchForm');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    resultsDiv.innerHTML = ''; // Clear previous results

    try {
        // TVMaze API call
        const tvmazeConfig = { params: { q: searchTerm } };
        const tvmazeRes = await axios.get(`https://api.tvmaze.com/search/shows`, tvmazeConfig);
        displayTVMazeResults(tvmazeRes.data);

        // OMDb API call
        const omdbConfig = { params: { t: searchTerm, apikey: 'aec0d3e2' } };
        const omdbRes = await axios.get(`https://www.omdbapi.com/`, omdbConfig);
        displayOMDbResults(omdbRes.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        resultsDiv.innerHTML = '<p>Error fetching data. Please try again.</p>';
    }

    form.elements.query.value = '';
});

const displayTVMazeResults = (shows) => {
    const tvMazeSection = document.createElement('div');
    tvMazeSection.innerHTML = '<h2>TV Shows</h2>';
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            img.alt = result.show.name;
            tvMazeSection.append(img);
        }
    }
    resultsDiv.append(tvMazeSection);
};

const displayOMDbResults = (movie) => {
    const omdbSection = document.createElement('div');
    omdbSection.innerHTML = '<h2>Movies</h2>';
    if (movie.Response === 'True') {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
            <h3>${movie.Title} (${movie.Year})</h3>
            <p><strong>Genre:</strong> ${movie.Genre}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
        `;
        if (movie.Poster && movie.Poster !== 'N/A') {
            const img = document.createElement('IMG');
            img.src = movie.Poster;
            img.alt = movie.Title;
            movieDiv.append(img);
        }
        omdbSection.append(movieDiv);
    } else {
        omdbSection.innerHTML += '<p>No movie found with that title.</p>';
    }
    resultsDiv.append(omdbSection);
};
