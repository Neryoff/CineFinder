document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
    const movieDetailContent = document.getElementById('movieDetailContent');
    
    const movieId = localStorage.getItem('selectedMovieId');
    
    const movie = JSON.parse(localStorage.getItem('selectedMovie'));
    
    if (!movie) {
        movieDetailContent.innerHTML = `
            <div class="no-results">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Filme não encontrado</h3>
                <p>Volte à página inicial e tente novamente</p>
            </div>
        `;
        return;
    }
    
    const availabilityData = {
        1: [ 
            { name: "", logo: "hbo.png" },
            { name: "", logo: "prime.png" },
            { name: "", logo: "apple.png" }
        ],
        2: [
            { name: "", logo: "netflix.png" },
            { name: "", logo: "paramount.png" }
        ],
        3: [ 
            { name: "", logo: "disney.png" },
        ],
        4: [
            { name: "", logo: "netflix.png" },
            { name: "", logo: "prime.png" }
        ],
        5: [
            { name: "", logo: "netflix.png" },
            { name: "", logo: "hbo.png" },
            { name: "", logo: "paramount.png" }
        ],
        6: [
            { name: "", logo: "netflix.png" },
            { name: "", logo: "prime.png" },
            { name: "", logo: "globoplay.png" }
        ],
        7: [
            { name: "", logo: "disney.png" },
        ],
        8: [
            { name: "", logo: "disney.png" },
        ],
        9: [
            { name: "", logo: "globoplay.png" },
        ],
        10: [
            { name: "", logo: "hbo.png" },
        ],
        11: [
            { name: "", logo: "prime.png" },
            { name: "", logo: "apple.png" }
        ],
        12: [
            { name: "", logo: "cinema.png" },
        ],

    };
    
    const providers = availabilityData[movie.id] || [
        { name: "Netflix", logo: "netflix.png" },
        { name: "Prime Video", logo: "amazon.png" },
        { name: "HBO Max", logo: "hbo.png" }
    ];
    
    movieDetailContent.innerHTML = `
        <div class="movie-detail">
            <div class="movie-poster-detail">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            </div>
            <div class="movie-info">
                <h1 class="movie-title">${movie.title}</h1>
                <div class="movie-meta">
                    <span>⭐ ${movie.vote_average?.toFixed(1) || 'N/A'}</span>
                    <span>${movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</span>
                    <span>${movie.genres?.join(', ') || 'N/A'}</span>
                </div>
                <p class="movie-overview">${movie.overview}</p>
                
                <div class="availability-section">
                    <h2 class="availability-title">Disponível em:</h2>
                    <div class="providers">
                        ${providers.map(provider => `
                            <div class="provider">
                                <img src="assets/${provider.logo}" alt="${provider.name}">
                                <div>${provider.name}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    backButton.addEventListener('click', () => {
        window.history.back();
    });
});