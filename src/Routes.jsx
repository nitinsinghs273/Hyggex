import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Applayout from "./Utils/Applayout";
import Contact from "./pages/Contact";
import FlashCard from "./pages/FlashCard";
import FAQ from "./pages/FAQ";
import FlashcardSubtopic from "./pages/FlashcardSubtopic";
import FlashcardNavigator from "./pages/FlashCardNavigator";
import {
  Study,
  Others,
  Quizes,
  Game,
  Test,
} from "./Components/MiddlePages/index";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      element: <Applayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/faq", element: <FAQ /> },
        { path: "/contact", element: <Contact /> },
        { path: "/flashcard", element: <FlashCard /> },
        { path: "/flashcard/:topic", element: <FlashcardNavigator /> },
        {
          path: "/flashcard/:topic/:subtopic",
          element: <FlashcardSubtopic />,
          children: [
            {
              index: true,
              element: <Study />,
            },
            {
              path: "/flashcard/:topic/:subtopic/quiz",
              element: <Quizes />,
            },
            {
              path: "/flashcard/:topic/:subtopic/game",
              element: <Game />,
            },
            {
              path: "/flashcard/:topic/:subtopic/others",
              element: <Others />,
            },
            {
              path: "/flashcard/:topic/:subtopic/test",
              element: <Test />,
            },
          ],
        },
        { path: "*", element: <NotFound /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
