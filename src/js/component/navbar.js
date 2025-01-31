import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {

  const { store, actions } = useContext(Context);
  console.log(store.favorites);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://github.com/4GeeksAcademy/Starwars-Blog-List-Sharguidev/blob/master/src/img/star-wars-seeklogo.png?raw=true"
            style={{ width: "100px" }}
            className="ms-4"
          ></img>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown me-5">
              <a
                className="nav-link dropdown-toggle btn btn-primary text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites <span>{store.favorites.length}</span>
              </a>
              <ul className="dropdown-menu text-start dropdown-menu-end">
                {
                  store.favorites.length === 0 ? (
                    <li className="py-5" >Don't you have favorites?</li>
                  ) : (
                    store.favorites.map((item) => {
                      return (
                        <li className="d-flex justify-content-between py-2" key={item.uid} >
                          <a className="dropdown-item " href="#">{item}</a>
                          <button
                            onClick={() => actions.deleteFavorites(item.uid)}
                          ><i className="fa-solid fa-trash"></i></button>
                        </li>
                      );
                    })
                  )
                }
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
