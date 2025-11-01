const form = document.querySelector('#searchForm');
const resultsDiv = document.querySelector('#results');
const modal = document.querySelector('#detailModal');
const modalBody = document.querySelector('#modalBody');
const closeBtn = document.querySelector('.close');

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

// Modal close event
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

const displayTVMazeResults = (shows) => {
    const tvMazeSection = document.createElement('div');
    const header = document.createElement('h2');
    header.textContent = 'TV Shows';
    tvMazeSection.appendChild(header);

    const gridDiv = document.createElement('div');
    gridDiv.classList.add('tv-shows-grid');
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            img.alt = result.show.name;
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => showTVShowDetails(result.show));
            gridDiv.append(img);
        }
    }
    tvMazeSection.appendChild(gridDiv);
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
            img.addEventListener('click', () => showMovieDetails(movie));
            movieDiv.append(img);
        }
        omdbSection.append(movieDiv);
    } else {
        omdbSection.innerHTML += '<p>No movie found with that title.</p>';
    }
    resultsDiv.append(omdbSection);
};

const showTVShowDetails = (show) => {
    modalBody.innerHTML = `
        <h2>${show.name}</h2>
        ${show.image ? `<img src="${show.image.original}" alt="${show.name}" style="width: 100%; max-width: 300px; border-radius: 10px; margin-bottom: 20px;">` : ''}
        <p><strong>Genres:</strong> ${show.genres.join(', ') || 'N/A'}</p>
        <p><strong>Status:</strong> ${show.status}</p>
        <p><strong>Premiered:</strong> ${show.premiered || 'N/A'}</p>
        <p><strong>Summary:</strong> ${show.summary ? show.summary.replace(/<[^>]*>/g, '') : 'N/A'}</p>
        <p><strong>Rating:</strong> ${show.rating.average || 'N/A'}</p>
    `;
    modal.style.display = 'block';
};

const showMovieDetails = (movie) => {
    modalBody.innerHTML = `
        <h2>${movie.Title} (${movie.Year})</h2>
        ${movie.Poster && movie.Poster !== 'N/A' ? `<img src="${movie.Poster}" alt="${movie.Title}" style="width: 100%; max-width: 300px; border-radius: 10px; margin-bottom: 20px;">` : ''}
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
        <p><strong>Runtime:</strong> ${movie.Runtime}</p>
        <p><strong>Released:</strong> ${movie.Released}</p>
    `;
    modal.style.display = 'block';
};
