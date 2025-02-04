import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPlanet = ({ planets }) => {
    const { store, actions } = useContext(Context);
    const [isClicked, setIsClicked] = useState(false);

    // Valores constantes
    const notFoundImage = "https://placehold.co/600x400.png?text=Image+Not+Found";
    const { name, climate, gravity, population } = planets.properties;
    const imagePlanet = `https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`;

    // Función para manejar el clic en el corazón (favorito)
    const favoriteClick = () => {
        setIsClicked(!isClicked);
        if (!isClicked) {
            actions.addFavorite(name, "planets", planets.uid);
        } else {
            actions.removeFavorite(name);
        }
    };

    // useEffect para sincronizar el estado con los favoritos
    useEffect(() => {
        const isFavorite = store.favorites.some(fav => fav.name === name);
        setIsClicked(isFavorite);
    }, [store.favorites, name]);

    // Manejador de error para la imagen
    const imageError = (e) => {
        e.target.src = notFoundImage;
        e.target.style.width = "100%";
        e.target.style.height = "230px";
    };

    return (
        <div className="card m-2" style={{ width: "16rem" }}>
            <img
                src={imagePlanet}
                className="card-img-top p-2" alt={name || "Planet"} onError={imageError} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Climate: {climate}</p>
                <p className="card-text">Gravity: {gravity}</p>
                <p className="card-text">Population: {population}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/planets/${planets.uid}`} className="btn btn-primary">Learn more!</Link>
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
};
