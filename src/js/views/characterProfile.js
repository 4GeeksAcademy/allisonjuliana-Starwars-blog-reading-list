import React, { useEffect, useContext } from "react";
// import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
// import { Link, useParams } from "react-router-dom";

const CharacterProfile = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(store.specificCharacter);


    useEffect(() => {
        actions.loadSpecificCharacter(params.theid);
    }, [params.theid]);




    return (
        <>
            <div className="row" >
                <div className="col-4 ms-auto mt-5">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
                        onError={(event) => event.target.src = "https://placehold.co/600x400.png?text=Image+Not+Found"}
                        className="card-img-top"
                        alt={store.specificCharacter?.name}
                    />
                </div>
                <div className="col-6 mt-5">
                    <h2>{store.specificCharacter?.name}</h2>
                    <p className="mt-4">Star Wars is an American epic space opera media franchise created by George Lucas,
                        which began with the eponymous 1977 film[a] and quickly became a worldwide pop culture phenomenon.
                        The franchise has been expanded into various films and other media, including television series, video games, novels,
                        comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. Star Wars is
                        considered one of the highest-grossing media franchises of all time.</p>
                </div>
            </div>
            <hr className="text-danger d-flex mx-auto" style={{ width: "90%", height: "3px" }}></hr>
            <div className="row d-flex mx-auto text-danger" style={{ width: "90%" }}>
                <div className="col-2  mt-5">
                    <p><strong>
                        Name
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.name}</p>
                </div>
                <div className="col-2 mt-5">
                    <p><strong>
                        Birth Year
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.birth_year}</p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Gender
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.gender}</p>
                    {/* //? optional chaining */}
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Height
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.height}</p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Skin Color
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.skin_color}</p>
                </div>
                <div className="col-2  mt-5">
                    <p><strong>
                        Eye Color
                    </strong>
                    </p>
                    <p>{store.specificCharacter?.eye_color}</p>
                </div>

            </div>
        </>
    );
};


export default CharacterProfile