import '../css/AnimeCard.css';
import { useAnimeContext } from '../context/AnimeContext';

function AnimeCard({anime}){
    const {isFavorite, addFavorite, removeFavorite} = useAnimeContext();
    const favorite = isFavorite(anime.mal_id); 

    function favoriteClick(e){
        e.preventDefault();
        if (favorite){
            removeFavorite(anime.mal_id);
        } else {
            addFavorite(anime);
        }
    }

    return <div className="anime-card">
        <div className="anime-poster">
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <div className="anime-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={favoriteClick}>
                    ♥ 
                </button>
            </div>
        </div>
        <div className="anime-info">
            <h3>{anime.title}</h3>
            <p>{anime.year}</p>
        </div>
    </div>
}

export default AnimeCard;