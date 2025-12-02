import '../css/Favorites.css';
import { useAnimeContext } from '../context/AnimeContext';
import AnimeCard from '../component/AnimeCard';

function Favorites(){
    const {favorites} = useAnimeContext();

    if (favorites && favorites.length > 0){
        return (
        <div className="favorites"> 
            <h2>Your Favorite </h2>
            <div className="anime-grid">
            {favorites.map((anime) => ((
                    <AnimeCard anime={anime} key={anime.mal_id}/>
            )))}
            </div>
        </div>
        )
    }else{
        return <div className="favorites-empty">
            <h2>No Favorite Anime Yet</h2>
            <p>Start Adding Anime to Your Favorite</p>
        </div>
    }
}

export default Favorites;