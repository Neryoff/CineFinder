document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
    const movieDetailContent = document.getElementById('movieDetailContent');
    
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

    const providerInfo = {
        netflix:    { name: "Netflix",       logo: "netflix.png",    url: "https://www.netflix.com" },
        prime:      { name: "Prime Video",   logo: "prime.png",      url: "https://www.primevideo.com" },
        hbo:        { name: "HBO Max",       logo: "hbo.png",        url: "https://www.hbomax.com" },
        apple:      { name: "Apple TV+",     logo: "apple.png",      url: "https://tv.apple.com" },
        disney:     { name: "Disney+",       logo: "disney.png",     url: "https://www.disneyplus.com" },
        paramount:  { name: "Paramount+",    logo: "paramount.png",  url: "https://www.paramountplus.com" },
        globoplay:  { name: "Globoplay",     logo: "globoplay.png",  url: "https://globoplay.globo.com" },
        cinema:     { name: "Nos Cinemas",   logo: "cinema.png",     url: "#" }
    };

    const availabilityData = {
        1: ["hbo", "prime", "apple"],
        2: ["netflix", "paramount"],
        3: ["disney"],
        4: ["netflix", "prime"],
        5: ["netflix", "hbo", "paramount"],
        6: ["netflix", "prime", "globoplay"],
        7: ["disney"],
        8: ["disney"],
        9: ["globoplay"],
        10: ["hbo"],
        11: ["prime", "apple"],
        12: ["cinema"]
    };

    const providerIds = availabilityData[movie.id] || [];
    const providers = providerIds.map(id => providerInfo[id]);

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
                            <a class="provider" href="${provider.url}" target="_blank" rel="noopener noreferrer">
                                <img src="assets/${provider.logo}" alt="${provider.name}">
                                <div>${provider.name}</div>
                            </a>
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