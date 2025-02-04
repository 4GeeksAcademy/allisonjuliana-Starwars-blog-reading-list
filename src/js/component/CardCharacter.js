import React, { useState, useContext, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardCharacter = ({ character }) => {
    const { store, actions } = useContext(Context);
    const [isClicked, setIsClicked] = useState(false);

    // Utilizamos el ID del personaje para construir la imagen
    const imageCharacter = `https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`;

    // Función para manejar el click en el corazón (favorito)
    const favoriteClick = () => {
        setIsClicked(!isClicked);
        if (!isClicked) {
            actions.addFavorite(character.properties.name, "people", character.uid);
        } else {
            actions.removeFavorite(character.properties.name);
        }
    }

    // Comprobamos si el personaje está marcado como favorito al cargar el componente
    useEffect(() => {
        const isFavorite = store.favorites.some((fav) => fav.name === character.properties.name);
        setIsClicked(isFavorite);
    }, [store.favorites, character.properties.name]);

    return (
        <div className="card m-2" style={{ width: "16rem" }}>
            <img
                src={imageCharacter}
                className="card-img-top p-2"
                alt={character.properties.name || "Character"}
            />
            <div className="card-body">
                <h5 className="card-title">{character.properties.name}</h5>
                <p className="card-text">Gender: {character.properties.gender}</p>
                <p className="card-text">Hair Color: {character.properties.hair_color}</p>
                <p className="card-text">Eye Color: {character.properties.eye_color}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/people/${character.uid}`} className="btn btn-primary">
                        Learn more!
                    </Link>
                    <button
                        type="button"
                        className={`btn ${isClicked ? "btn-warning clicked" : "btn-outline-warning"}`}
                        onClick={favoriteClick}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
            </div>
        </div>
    );
}
