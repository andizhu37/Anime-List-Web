import AnimeCard from "../component/AnimeCard";
import { useState, useEffect } from "react";
import { searchAnime, getTopAnime } from "../services/api";
import '../css/Home.css';

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [animes, setAnimes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadTopAnime = async () =>{
            try{
                const popularAnimes = await getTopAnime()
                setAnimes(popularAnimes)
            }catch (err){
                console.log(err)
                setError("Failed Load Anime.....")
            }
            finally {
                setLoading(false)
            }
        }

        loadTopAnime()
    }, [])

    const handleSearch = async(e) =>{
        e.preventDefault();
        setLoading(true);
        try {
            const results = await searchAnime(searchQuery);
            setAnimes(results);
        } catch (err) {
            console.log(err);
            setError("Failed to search anime...");
        } finally {
            setLoading(false);
        }
    };

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for Animes..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="anime-grid">
            {animes.map((anime) => ((
                    <AnimeCard anime={anime} key={anime.mal_id}/>
            )))}
        </div>
    </div>
    )
}

export default Home;