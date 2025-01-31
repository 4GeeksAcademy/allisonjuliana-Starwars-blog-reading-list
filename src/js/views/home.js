import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCards from "../component/characterCards";
import PlanetsCards from "../component/planetsCards";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>StarWars Blog!</h1>

			<CharacterCards />

			<PlanetsCards />


		</div>
	);
};
