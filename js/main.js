const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const genreTags = document.querySelectorAll('.genre-tag');
const moviesContainer = document.getElementById('moviesContainer');

let currentMovies = [];
let currentGenre = 'all';
let currentSearch = '';

const movies = [
    {
        id: 1,
        title: "Matrix",
        poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        vote_average: 8.7,
        release_date: "1999-03-30",
        genres: ["ficção", "ação"],
        overview: "Um hacker descobre a verdade sobre a realidade e sua luta contra poderosas máquinas que controlam a humanidade através de um sistema de realidade simulada chamado Matrix."
    },
    {
        id: 2,
        title: "O Poderoso Chefão",
        poster_path: "/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg",
        vote_average: 9.2,
        release_date: "1972-03-24",
        genres: ["drama"],
        overview: "A saga da família Corleone, uma das mais poderosas famílias da máfia italiana em Nova York. O patriarca Vito Corleone passa o controle de seu império criminoso para seu filho Michael."
    },
    {
        id: 3,
        title: "Vingadores: Ultimato",
        poster_path: "/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg",
        vote_average: 8.4,
        release_date: "2019-04-25",
        genres: ["ação", "ficção", "fantasia"],
        overview: "Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas. Com a ajuda de aliados remanescentes, os Vingadores se reúnem mais uma vez para desfazer as ações de Thanos e restaurar a ordem no universo."    },
    {
        id: 4,
        title: "Parasita",
        poster_path: "/bik2BZjmVjeE6LOZqtuTjb4jJPQ.jpg",
        vote_average: 8.6,
        release_date: "2019-05-30",
        genres: ["drama", "comédia", "terror"],
        overview: "Toda a família de Ki-taek está desempregada, vivendo em um porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, uma a uma, as outras pessoas da família de Ki-taek conseguem trabalho na mesma residência."    },
    {
        id: 5,
        title: "Interestelar",
        poster_path: "/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
        vote_average: 8.6,
        release_date: "2014-11-06",
        genres: ["ficção", "drama"],
        overview: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos."    },
    {
        id: 6,
        title: "Cidade de Deus",
        poster_path: "/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
        vote_average: 8.6,
        release_date: "2002-08-30",
        genres: ["drama", "ação"],
        overview: "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão."    },
    {
        id: 7,
        title: "O Rei Leão",
        poster_path: "/8aIvm8OaJISOpVTt7rMIh7X35G5.jpg",
        vote_average: 8.5,
        release_date: "1994-06-24",
        genres: ["animação", "família", "fantasia"],
        overview: "Este desenho animado da Disney mostra as aventuras de um leão jovem de nome Simba, o herdeiro de seu pai, Mufasa. O tio malvado de Simba, Scar, planeja roubar o trono de Mufasa atraindo pai e filho para uma emboscada. Simba consegue escapar e somente Mufasa morre. Com a ajuda de seus amigos,Timon e Pumba, ele reaparece como adulto para recuperar sua terra, que foi roubada por seu tio Scar."    },
    {
        id: 8,
        title: "Toy Story",
        poster_path: "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        vote_average: 8.3,
        release_date: "1995-11-22",
        genres: ["animação", "comédia", "família", "fantasia"],
        overview: "O aniversário do garoto Andy está chegando e seus brinquedos ficam nervosos, temendo que ele ganhe novos brinquedos que possam substituí-los. Liderados pelo caubói Woody, o brinquedo predileto de Andy, eles recebem Buzz Lightyear, o boneco de um patrulheiro espacial, que logo passa a receber mais atenção do garoto. Com ciúmes, Woody tenta ensiná-lo uma lição, mas Buzz cai pela janela. É o início da aventura do caubói, que precisa resgatar Buzz para limpar sua barra com os outros brinquedos."    },
    {
        id: 9,
        title: "Ainda Estou Aqui",
        poster_path: "/yY0HDAGfu79cpOLQBgR3kgGZ7HS.jpg",
        vote_average: 8.0,
        release_date: "2024-09-19",
        genres: ["drama"],
        overview: "Rio de Janeiro, início dos anos 1970, quando o país enfrenta o endurecimento da ditadura militar. Estamos no centro de uma família, os Paiva: um pai, Rubens, uma mãe, Eunice, e os cinco filhos. Vivem na frente da praia, numa casa de portas abertas para os amigos. O afeto e o humor que compartilham entre si são suas formas sutis de resistência à opressão que paira sobre o Brasil. Um dia, eles sofrem um ato violento e arbitrário que vai mudar para sempre sua história. Eunice é obrigada a se reinventar e a traçar um novo destino para si e os filhos. Baseada no livro biográfico de Marcelo Rubens Paiva, a história emocionante dessa família ajudou a redefinir a história do país."    },
    {
        id: 10,
        title: "It: A Coisa",
        poster_path: "/uYxz0lIiNgErrPhQbSjUdwYxtFc.jpg",
        vote_average: 7.2,
        release_date: "2017-09-07",
        genres: ["terror"],
        overview: "Após o desaparecimento misterioso de algumas crianças na cidade de Derry, no Maine, um grupo de pré-adolescentes é confrontado com os seus maiores medos quando inicia um confronto com o maquiavélico palhaço Pennywise, cujo historial de crimes e violência tem origem há séculos."   },
    {
        id: 11,
        title: "Pânico",
        poster_path: "/cJj2gYzkPFSqYGGOhfLgeANlXkB.jpg",
        vote_average: 7.4,
        release_date: "1997-01-31",
        genres: ["drama","terror"],
        overview: "Sidney Prescott começa a desconfiar que a morte de dois estudantes está relacionada com o falecimento da sua mãe, há cerca de um ano. Enquanto isso, os jovens da pacata cidadezinha de Woodsboro começam a receber chamadas telefónicas de um maníaco que faz perguntas sobre filmes de terror. Quem erra as respostas morre. As perguntas seguem uma lógica que será desvendada numa grande festa escolar."    },
    {
        id: 12,
        title: "Thunderbolts*",
        poster_path: "/eKD2p840nsRXLUR25ciVsNMJgOB.jpg",
        vote_average: 7.4,
        release_date: "2025-05-01",
        genres: ["ação", "ficção", "fantasia"],
        overview: "Depois de se verem enredados numa armadilha mortal, uma equipa pouco convencional de anti-heróis tem de embarcar numa missão perigosa que os obrigará a confrontar os cantos mais negros dos seus passados."    }


    ];

document.addEventListener('DOMContentLoaded', () => {
    currentMovies = [...movies];
    renderMovies(currentMovies);
    
    setupEventListeners();
});

function setupEventListeners() {
    if (searchBtn) {
        searchBtn.addEventListener('click', searchMovies);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchMovies();
        });
    }
    
    if (genreTags) {
        genreTags.forEach(tag => {
            tag.addEventListener('click', () => {
                genreTags.forEach(t => t.classList.remove('active'));
                tag.classList.add('active');
                currentGenre = tag.getAttribute('data-genre');
                filterMovies();
            });
        });
    }
}

function searchMovies() {
    const query = searchInput.value.trim().toLowerCase();
    currentSearch = query;
    
    if (!query) {
        currentMovies = [...movies];
        renderMovies(currentMovies);
        return;
    }
    
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query)
    );
    
    currentMovies = filteredMovies;
    renderMovies(filteredMovies);
}

function filterMovies() {
    if (currentGenre === 'all') {
        currentMovies = [...movies];
        renderMovies(currentMovies);
        return;
    }
    
    const filteredMovies = movies.filter(movie => 
        movie.genres.includes(currentGenre)
    );
    
    currentMovies = filteredMovies;
    renderMovies(filteredMovies);
}

function renderMovies(movies) {
    if (!moviesContainer) return;
    
    if (!movies || movies.length === 0) {
        moviesContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-film"></i>
                <h3>Nenhum filme encontrado</h3>
                <p>Tente uma pesquisa diferente ou outro gênero</p>
            </div>
        `;
        return;
    }
    
    moviesContainer.innerHTML = movies.map(movie => `
        <div class="movie-poster-container" data-id="${movie.id}" onclick="goToMovieDetails(${movie.id})">
            <div class="movie-poster">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
                     alt="${movie.title}" class="main-poster">
                <div class="poster-overlay">
                    <div class="poster-top">
                        <button class="favorite-btn ${favorites[movie.id] ? 'favorited' : ''}" 
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
}

function goToMovieDetails(movieId) {
    localStorage.setItem('selectedMovieId', movieId);
    
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        localStorage.setItem('selectedMovie', JSON.stringify(movie));
    }
    
    window.location.href = 'movie-details.html';
}