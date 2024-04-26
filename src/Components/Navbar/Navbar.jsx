import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import BreadCrumbs from "../../BreadCrumbs";
import { Button } from "../Button/Button";
import { Img } from "../Img";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1000);
      setIsMobile(window.innerWidth < 1000);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-5 py-6 md:px-8">
        <NavLink to="/" className="flex items-center">
          <Img
            src="/images/img_header_logo.png"
            alt="headerlogo"
            className="h-auto max-h-16 w-auto max-w-full object-cover md:w-full"
          />
        </NavLink>

        {isMobile && (
          <div className="lg:hidden" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        )}

        {isMobile ? (
          <div
            className={`lg:hidden fixed inset-y-0 right-0 bg-white z-10 w-1/3 ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            {/* Sidebar content */}
            <div className="flex justify-end">
              <button
                onClick={toggleSidebar}
                className="p-2 mt-10"
                style={{ position: "absolute", top: "0", left: "10px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col justify-start items-center h-full mt-48">
              {/* Sidebar links */}
              <li>
                <NavLink to="/" className="text-base md:text-lg">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/flashcard" className="text-base md:text-lg">
                  Flashcard
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-base md:text-lg">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-base md:text-lg">
                  FAQ
                </NavLink>
              </li>
              <li>
                <Button
                  shape="round"
                  color=""
                  className="min-w-[128px] font-medium sm:px-5 bg-blue-700 text-base md:text-lg"
                >
                  Login
                </Button>
              </li>
            </ul>
          </div>
        ) : (
          // Desktop Navbar links
          <ul className="hidden lg:flex list-none justify-center items-center text-black gap-6 text-lg">
            <li>
              <NavLink to="/" className="text-base md:text-lg">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/flashcard" className="text-base md:text-lg">
                Flashcard
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-base md:text-lg">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="text-base md:text-lg">
                FAQ
              </NavLink>
            </li>
            <li>
              <Button
                shape="round"
                color="undefined_undefined"
                className="min-w-[128px] font-medium sm:px-5 "
              >
                Login
              </Button>
            </li>
          </ul>
        )}
      </nav>
      <BreadCrumbs />
    </>
  );
}

export default Navbar;
