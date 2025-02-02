import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const PlanetsCards = () => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.loadPlanets();
    }, []);

    console.log(store.planets);
    const planetsItems = store.planets.map((planet, index) => (


        <div className="card-container mb-4" key={index}>
            <div className="card h-100">
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                    onError={(event) => event.target.src = "https://placehold.co/600x400.png?text=Image+Not+Found"}
                    className="card-img-top"
                    alt={planet.name} />

                <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                    <p className="card-text mb-5">
                        Name: {planet.name}<br />
                        Population: {planet.population}<br />
                        Terrain: {planet.terrain}<br />
                    </p>

                    <div className="btn-container ">
                        <Link type="button" to={"/planetProfile/" + planet.uid} className="btn btn-outline-primary btn-more me-4">Learn More!</Link>
                        <button
                            className="btn btn-outline-warning btn-fav"
                            onClick={() => actions.addFavorites(planet.name)}
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
            <h2 className="text-start mb-3">Planets</h2>
            <div className="row flex-nowrap overflow-auto">
                {planetsItems}
            </div>
        </div>
    );

};


export default PlanetsCards;