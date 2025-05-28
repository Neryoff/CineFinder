let favorites = JSON.parse(localStorage.getItem('favorites')) || {};

function toggleFavorite(movieId, event) {
    if (event) event.stopPropagation();
    
    if (favorites[movieId]) {
        delete favorites[movieId];
        if (event) {
            event.currentTarget.classList.remove('favorited');
            showToast('Removido dos favoritos');
        }
    } else {
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            favorites[movieId] = {
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                vote_average: movie.vote_average,
                release_date: movie.release_date,
                genres: movie.genres,
                overview: movie.overview
            };
            if (event) {
                event.currentTarget.classList.add('favorited');
                showToast('Adicionado aos favoritos!');
            }
        }
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    if (window.location.pathname.includes('favorites.html')) {
        loadFavorites();
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}
window.toggleFavorite = toggleFavorite;