import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png"
						alt="Star Wars Logo"
						style={{ width: '120px', height: 'auto' }}
					/>
				</span>
			</Link>
			<div className="btn-group me-5">
				<button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites ({store.favorites.length})
				</button>
				<ul className="dropdown-menu">
					{store.favorites.length > 0 ? (
						store.favorites.map((favorite) => (
							<li key={favorite.uid} className="dropdown-item d-flex justify-content-between align-items-center">
								{favorite.category && favorite.uid ? (
									<Link to={`/${favorite.category}/${favorite.uid}`} className="text-decoration-none text-dark">
										{favorite.name}
									</Link>
								) : (
									<span>{favorite.name}</span>
								)}
								<button
									className="btn btn-sm ms-2"
									onClick={() => actions.removeFavorite(favorite.name)}
								>
									<FontAwesomeIcon icon={faTrash} />
								</button>
							</li>
						))
					) : (
						<li className="dropdown-item">(Empty)</li>
					)}
				</ul>
			</div>
		</nav>
	);
};
