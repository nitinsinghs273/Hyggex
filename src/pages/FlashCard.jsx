import { Link } from "react-router-dom";

function FlashCard() {
  return (
    <div className="font-bold min-h-64 flex justify-center items-center">
      <ul>
        <li>
          <Link to="/flashcard/english">English</Link>
        </li>
        <li>
          <Link to="/flashcard/mathematics">Mathematics</Link>
        </li>
        <li>
          <Link to="/flashcard/hindi">Hindi</Link>
        </li>
        {/* Add other topics as needed */}
      </ul>
    </div>
  );
}

export default FlashCard;
