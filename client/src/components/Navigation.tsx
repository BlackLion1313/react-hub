import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export function Navigation() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <header className="bg-black bg-opacity-1 text-white  ">
      <div className="container mx-auto flex items-center h-24">
        <a href="/">
          <img
            className="h-11"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
            alt=""
          />
          <span className="ml-3 uppercase font-black">
            react
            <br />
            hub
          </span>
        </a>
        <nav className="contents font-semibold text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            {isLoggedIn ? (
              <>
                <li className="p-5 xl:p-8">
                  <Link className="hover:underline" to="/">
                    Home
                  </Link>
                </li>

                <li className="p-7 xl:p-10 hover:underline">
                  <Link to="/profile">Profile</Link>
                </li>

                <li className="p-7 xl:p-10 hover:underline">
                  <Link to="/exercises">Exercises</Link>
                </li>

                <li className="p-7 xl:p-10 hover:underline">
                  <Link to="/favourites">Favourites</Link>
                </li>

                <li className="p-7 xl:p-10 hover:underline">
                  <Link to="/create-exercise">Create Exercise</Link>
                </li>

                <LogoutButton />
              </>
            ) : (
              <li className="p-7 xl:p-10 hover:underline">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
