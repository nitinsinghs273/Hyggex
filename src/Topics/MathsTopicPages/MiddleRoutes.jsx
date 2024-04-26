import { NavLink } from "react-router-dom";

function MiddleRoutes() {
  return (
    <div className="flex justify-center items-center gap-3 mt-10 capitalize font-bold text-stone-600">
      <ul className="flex justify-start gap-10 items-center">
        <li>
          <NavLink
            to="/flashcard/mathematics/relation%20and%20function"
            className={({ isActive, active }) =>
              isActive || active ? "nav-link gradient-text" : ""
            }
          >
            Study
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/flashcard/mathematics/relation%20and%20function/quiz"
            className={({ isActive }) =>
              isActive ? "nav-link gradient-text" : ""
            }
          >
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/flashcard/mathematics/relation%20and%20function/test"
            className={({ isActive }) =>
              isActive ? "nav-link gradient-text" : ""
            }
          >
            Test
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/flashcard/mathematics/relation%20and%20function/game"
            className={({ isActive }) =>
              isActive ? "nav-link gradient-text" : ""
            }
          >
            Game
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/flashcard/mathematics/relation%20and%20function/others"
            className={({ isActive }) =>
              isActive ? "nav-link gradient-text" : ""
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MiddleRoutes;
