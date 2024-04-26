import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function FAQItem({ item }) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="p-3 border-2 border-blue-600 text-stone-800 w-[848px] rounded-md font-semibold">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleShow}
      >
        {item.title}
        <FontAwesomeIcon icon={show ? faAngleUp : faAngleDown} />
      </div>
      <div
        className={`transition-all ease-in-out duration-400  ${
          show ? "max-h-[500px]" : "max-h-0 overflow-hidden"
        }`}
      >
        {show && <div className="mt-2">{item.desc}</div>}
      </div>
    </div>
  );
}

export default FAQItem;
