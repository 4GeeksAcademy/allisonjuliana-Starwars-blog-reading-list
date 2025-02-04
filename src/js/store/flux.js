const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then((res) => res.json())
					.then((data) => {
						if (!Array.isArray(data.results)) throw new Error("Invalid response format");

						return Promise.all(
							data.results.map((character) =>
								fetch(`https://www.swapi.tech/api/people/${character.uid}`)
									.then((res) => res.json())
									.then((characterData) => characterData.result)
									.catch((err) => {
										console.error(`Error fetching character ${character.uid}`, err);
										return null;
									})
							)
						);
					})
					.then((completeCharacters) => {
						const filteredCharacters = completeCharacters.filter((char) => char !== null);
						setStore({ people: filteredCharacters });
					})
					.catch((err) => console.error("Could not load characters", err));
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then((res) => res.json())
					.then((data) => {
						if (!Array.isArray(data.results)) throw new Error("Invalid response format");

						return Promise.all(
							data.results.map((planets) =>
								fetch(`https://www.swapi.tech/api/planets/${planets.uid}`)
									.then((res) => res.json())
									.then((planetsData) => planetsData.result)
									.catch((err) => {
										console.error(`Error fetching planets ${planets.uid}`, err);
										return null;
									})
							)
						);
					})
					.then((completePlanets) => {
						const filteredPlanets = completePlanets.filter((char) => char !== null);
						setStore({ planets: filteredPlanets });
					})
					.catch((err) => console.error("Could not load planets", err));
			},

			addFavorite: (item, category, uid) => {
				const store = getStore();
				if (!store.favorites.some((fav) => fav.name === item)) {
					setStore({
						favorites: [...store.favorites, { name: item, category, uid }]
					});
				}
			},
			removeFavorite: (itemName) => {
				const store = getStore();
				setStore({
					favorites: store.favorites.filter(fav => fav.name !== itemName),
				});
			},
		},
	};
}

export default getState; 
