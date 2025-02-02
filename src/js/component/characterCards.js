import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const CharacterCards = () => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.loadCharacters();
    }, []);

    console.log(store.characters);
    const characterItems = store.characters.map((character, index) => (

        <div className="card-container mb-4" key={index}>
            <div className="card h-100" >
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                    onError={(event) => event.target.src = "https://placehold.co/600x400.png?text=Image+Not+Found"}
                    className="card-img-top"
                    alt={character.name}
                />

                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text mb-5">
                        Gender: {character.gender}<br />
                        Hair Color: {character.hair_color}<br />
                        Eye Color: {character.eye_color}<br />
                    </p>

                    <div className="btn-container ">
                        <Link type="button" to={"/characterProfile/" + character.uid} className="btn btn-outline-primary btn-more me-4">Learn More!</Link>
                        <button
                            className="btn btn-outline-warning btn-fav"
                            onClick={() => actions.addFavorites(character.name)}
                        >
                            <i className="fa-regular fa-heart"></i>
                        </button>

                    </div>

                </div>
            </div>
        </div>

    ));

    return (
        <div className="container">
            <h2 className="text-start mb-3">Characters</h2>
            <div className="row flex-nowrap overflow-auto ">
                {/* overflow x-auto solo este en el eje X */}
                {characterItems}
            </div>
        </div>
    );

};


export default CharacterCards;