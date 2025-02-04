import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext";
import { CardPlanet } from "./CardPlanet";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPlanets();
    }, []);
    return (
        <div className="text-center mt-5">
            <h2 className="text-danger text-start p-3">Planets</h2>
            <div className="row flex-nowrap overflow-auto">
                {store.planets && store.planets.length > 0 && (
                    store.planets.map((singlePlanets, index) => (
                        <CardPlanet planets={singlePlanets} key={index} />
                    ))
                )}
            </div>
        </div>
    );
};