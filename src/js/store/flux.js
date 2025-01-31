const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			favorites: [],
			planets: [],
			specificCharacters: {},
			specificPlanet: {},

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadCharacters: () => {
				fetch("https://swapi.tech/api/people/")
					.then(response => response.json())
					.then(data => {
						setStore({ characters: data.results });
					})
					.catch(error => console.log(error));

			},

			loadPlanets: () => {
				fetch("https://swapi.tech/api/planets/")
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(error => console.log(error));
			},

			loadSpecificCharacter: async (theid) => {
				const resp = await fetch(`https://swapi.dev/api/people/${theid}`)
					.then(response => response.json())
					.then(data => {
						setStore({ specificCharacter: data });
					})
					.catch(error => console.log(error));
			},

			loadSpecificPlanet: async (theid) => {
				const resp = await fetch(`https://swapi.dev/api/planets/${theid}`)
					.then(response => response.json())
					.then(data => {
						setStore({ specificPlanet: data });
					})
					.catch(error => console.log(error));
			},

			addFavorites: (item) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] });
			},


			deleteFavorites: (item) => {
				const store = getStore();
				const favorites = store.favorites;
				const index = favorites.indexOf(item);
				favorites.splice(index, 1);
				setStore({ favorites });
			},
		}
	};
};

export default getState;
