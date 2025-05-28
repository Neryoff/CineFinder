document.addEventListener('DOMContentLoaded', () => {
    const favoritesContainer = document.getElementById('favoritesContainer');
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    
    if (Object.keys(favorites).length === 0) {
        favoritesContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-heart-broken"></i>
                <h3>Nenhum filme favoritado</h3>
                <p>Volte à página inicial e adicione seus filmes favoritos</p>
            </div>
        `;
        return;
    }
    
    const favoriteMovies = Object.values(favorites);
    
    favoritesContainer.innerHTML = favoriteMovies.map(movie => `
        <div class="movie-poster-container" data-id="${movie.id}" onclick="goToFavoriteMovieDetails(${movie.id})">
            <div class="movie-poster">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
                     alt="${movie.title}" class="main-poster">
                <div class="poster-overlay">
                    <div class="poster-top">
                        <button class="favorite-btn favorited" 
                                onclick="toggleFavorite(${movie.id}, event)">
                            <i class="fas fa-heart"></i>
                        </button>
                        <div class="rating-badge">
                            <i class="fas fa-star"></i> ${movie.vote_average.toFixed(1)}
                        </div>
                    </div>
                    <div class="poster-bottom">
                        <div class="movie-title">${movie.title}</div>
                        <div class="movie-info">
                            <span>${movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</span>
                            <span>${movie.genres.join(', ')}</span>
                        </div>
                        <p class="movie-overview">${movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
});

function goToFavoriteMovieDetails(movieId) {
    localStorage.setItem('selectedMovieId', movieId);
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    const movie = favorites[movieId];
    if (movie) {
        localStorage.setItem('selectedMovie', JSON.stringify(movie));
    }
    
    window.location.href = 'movie-details.html';
}

window.goToFavoriteMovieDetails = goToFavoriteMovieDetails;
window.toggleFavorite = toggleFavorite; // Garantir que está disponível