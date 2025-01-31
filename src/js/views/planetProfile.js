import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const PlanetProfile = props => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(store.specificCharacter);


    useEffect(() => {
        actions.loadSpecificPlanet(params.theid);
    }, [params.theid]);




    return (
        <>
            <div className="row" >
                <div className="col-4 ms-auto mt-5">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
                        onError={(event) => event.target.src = "https://via.placeholder.com/600?text=Character+Image+Not+Found"}
                        className="card-img-top"
                        alt={store.specificPlanet?.name}
                    />
                </div>
                <div className="col-6 mt-5">
                    <h2>{store.specificPlanet?.name}</h2>
                    <p>lorem 30 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusamus</p>
                </div>
            </div>
            <hr className="text-danger d-flex mx-auto" style={{ width: "90%", height: "3px" }}></hr>
            <div className="row d-flex mx-auto text-danger" style={{ width: "90%" }}>
                <div className="col-2  mt-5">
                    <p><strong>
                        Name
                    </strong>
                    </p>
                    <p>{store.specificPlanet?.name}</p>
                </div>
                <div className="col-2 mt-5">
                    <p><strong>
                        Diameter
                    </strong>
                    </p>
                    <p>{store.specificPlanet?.diameter}</p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Gravity
                    </strong>
                    </p>
                    <p>{store.specificPlanet?.gravity}</p>
                    {/* //? optional chaining */}
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Population
                    </strong>
                    </p>
                    <p>{store.specificPlanet?.population}</p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Terrain
                    </strong>
                    </p>
                    <p>{store.specificPlanet?.terrain}</p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Surface Water
                    </strong>
                    </p>
                    <p>{store.specificPlanet?.surface_water}</p>
                </div>

            </div>
        </>
    );
};


export default PlanetProfile;