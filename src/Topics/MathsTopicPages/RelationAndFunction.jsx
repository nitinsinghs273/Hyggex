import { Heading } from "../../Components/Heading/index";
import { Outlet } from "react-router-dom";
import MiddleRoutes from "./MiddleRoutes";

function RelationAndFunction() {
  return (
    <div>
      <Heading
        size="2xl"
        as="h2"
        className="mt-10 bg-gradient bg-clip-text gradient-text"
      >
        Relations and Functions ( Mathematics )
      </Heading>
      <MiddleRoutes />
      <div className="flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default RelationAndFunction;
