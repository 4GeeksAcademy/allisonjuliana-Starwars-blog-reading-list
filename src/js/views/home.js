import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { People } from "../component/People";
import { Planets } from "../component/Planets";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<People />
			<Planets />
		</div>
	)
};
