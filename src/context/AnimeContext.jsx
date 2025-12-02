import { createContext, useState, useContext, useEffect } from "react";

const AnimeContext = createContext();

export const useAnimeContext = () => useContext(AnimeContext);
export const AnimeProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]); 

    const addFavorite = (anime) => {
        setFavorites(prev => {
            if (prev.some(fav => fav.mal_id === anime.mal_id)) return prev;
            return [...prev, anime];
        });
    };

    const removeFavorite = (animeId) => {
        setFavorites((prevFavorites) => prevFavorites.filter(anime => anime.mal_id !== animeId));
    }

    const isFavorite = (animeId) => {
        return favorites.some(anime => anime.mal_id === animeId);
    }   

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }

    return <AnimeContext.Provider value={value}>
        {children}
    </AnimeContext.Provider>
}