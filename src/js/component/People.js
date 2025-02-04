import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext";
import { CardCharacter } from "./CardCharacter";

export const People = ({ }) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
    }, []);

    return (
        <div className="text-center mt-5">
            <h2 className="text-danger text-start p-3">Characters</h2>
            <div className="row flex-nowrap overflow-auto">
            {store.people && store.people.length > 0 && (
                    store.people.map((singleCharacter, index) => (
                        <CardCharacter character={singleCharacter} key={index} />
                    ))
                )}
            </div>
        </div>
    );
};