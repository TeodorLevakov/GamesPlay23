import { useState, useEffect } from "react";
import Game from "../game/Game";

const baseUrl = 'http://localhost:3030/jsonstore/games';



export default function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => setGames(Object.values(data)))
    }, []);

    return (
        <>
            <section id="catalog-page">
                <h1>All Games</h1>

                {games.map(x => <Game key={x._id} {...x}/>)}
                
                {/* Display paragraph: If there is no games  */}
                <h3 className="no-articles">No articles yet</h3>
            </section>
        </>
    );
}