import { useState, useEffect } from "react";
import Game from "../game/Game";

import * as gameService from '../../services/gameService';


export default function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result))     
    }, []);

    return (
        <>
            <section id="catalog-page">
                <h1>All Games</h1>

                {games.map(x => <Game key={x._id} {...x}/>)}
                
                {/* Display paragraph: If there is no games  */}
                {games.length == 0 && <h3 className="no-articles">No articles yet</h3>}
            </section>
        </>
    );
}