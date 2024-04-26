// FlashcardTopic.js

import { Link, useParams } from "react-router-dom";

function Maths() {
  const { topic } = useParams();

  return (
    <div className="font-bold min-h-64 flex justify-center items-center">
      <ul>
        <li>
          <Link to={`/flashcard/${topic}/relation%20and%20function`}>
            Relation and Function
          </Link>
        </li>
        <li>
          <Link to={`/flashcard/${topic}/algebra`}>Algebra</Link>
        </li>
        <li>
          <Link to={`/flashcard/${topic}/algebra`}>Integration</Link>
        </li>
        {/* Add other subtopics as needed */}
      </ul>
    </div>
  );
}

export default Maths;
