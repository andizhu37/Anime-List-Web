import '../css/AnimeCard.css';

function AnimeCard({anime}){

    function favoriteClick(){
        alert("Clicked");
    }

    return <div className="anime-card">
        <div className="anime-poster">
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <div className="anime-overlay">
                <button className="favorite-btn" onClick={favoriteClick}>
                    Love
                </button>
            </div>
        </div>
        <div className="anime-info">
            <h3>{anime.title}</h3>
            <p>{anime.aired?.from ? anime.aired.from.substring(0, 10) : "Unknown"}</p>
        </div>
    </div>
}

export default AnimeCard;