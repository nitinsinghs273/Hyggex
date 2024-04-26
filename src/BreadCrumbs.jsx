import { NavLink, useLocation } from "react-router-dom";
import { Img } from "./Components/Img/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function BreadCrumbs() {
  const location = useLocation();
  const path = location.pathname;
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const displayName =
        index === array.length - 1
          ? decodeURIComponent(crumb.replace(/-/g, " "))
          : decodeURIComponent(crumb);
      const isActive = currentLink === location.pathname; // Check if link is active

      return (
        <div className="capitalize" key={crumb}>
          <span>&nbsp;</span>
          <span className="text-blue-700">
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <span>&nbsp;</span>
          <NavLink
            to={currentLink}
            className={`${isActive ? "text-white gradient-text" : ""}`}
          >
            {displayName}
          </NavLink>
        </div>
      );
    });

  return (
    <div className="flex items-center justify-start font-semibold text-gray-500 ml-8">
      {path !== "/" && (
        <NavLink to="/">
          <Img
            src="/images/img_frame.svg"
            alt="image"
            className="h-[30px] w-[30px]"
          />
        </NavLink>
      )}
      {crumbs}
    </div>
  );
}

export default BreadCrumbs;
