import { useParams } from "react-router-dom";

import English from "../Topics/English/English";
import Hindi from "../Topics/Hindi/Hindi";
import Maths from "../Topics/Maths/Maths";

function FlashcardNavigator() {
  const { topic } = useParams();

  return (
    <>
      <div className="font-bold min-h-64">
        {topic === "english" && <English />}
        {topic === "hindi" && <Hindi />}
        {topic === "mathematics" && <Maths />}
      </div>
    </>
  );
}

export default FlashcardNavigator;
