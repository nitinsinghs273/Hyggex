import { useState } from "react";
import { Img } from "../Img";
import { Heading } from "../Heading";
const Data = [
  "9 + 6 + 7x - 2x - 3",
  "2a × 3a × 2a + 12a",
  "9+6(10-7x)",
  "(1-7x)(1-9x)",
  "6(10−x)+9",
  "1 + x + x ",
];

export default function StudyCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle changing data on arrow click
  const handleArrowClick = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === Data.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Data.length - 1 : prevIndex - 1
      );
    }
  };

  // Function to handle refreshing data
  const handleRefresh = () => {
    setCurrentIndex(0);
  };

  // Function to handle expanding the card
  const handleExpand = () => {
    // Implement logic to expand the card here
    console.log("Expand button clicked");
  };
  return (
    <>
      <div className="mt-[30px] flex w-[58%] items-center justify-between gap-5 self-center md:w-full md:flex-col">
        <div className=" rounded-[2.66rem] h-[25rem] w-[44.5rem] bg-gray-400 md:self-stretch gradient-bg">
          <div className="flex w-full justify-between rounded-[42px] bg-gradient p-[34px] sm:px-4 sm:py-5 ">
            <Img
              src="/images/img_frame_gray_100.svg"
              alt="circleimage"
              className="h-[34px] w-[34px] rounded-[50%]"
            />
            <Img
              src="/images/img_frame_gray_100_34x34.svg"
              alt="circleimage"
              className="h-[34px] w-[34px] rounded-[50%]"
            />
          </div>
          <div className=" w-full h-auto min-h-60 flex justify-center items-center">
            <Heading as="h1" className=" text-white text-3xl font-semibold">
              {Data[currentIndex]}
            </Heading>
          </div>
        </div>
      </div>
      <div className="mt-8 flex w-[50%] items-center justify-between gap-5 self-center md:w-full">
        <Img
          src="/images/img_vector.png"
          alt="vector"
          className="h-[30px] w-[30px] object-cover"
          onClick={() => handleRefresh()}
        />
        <div className="flex w-[44%] items-center justify-between gap-5">
          <Img
            src="/images/img_vector_60x60.png"
            alt="vector"
            className="h-[60px] w-[60px] object-cover"
            onClick={() => handleArrowClick("back")}
          />
          <Heading size="xl" as="h2" className="!text-blue_gray-900">
            {currentIndex + 1}/{Data.length}
          </Heading>
          <Img
            src="/images/img_vector_1.png"
            alt="vector"
            className="h-[60px] w-[60px] object-cover"
            onClick={() => handleArrowClick("next")}
          />
        </div>
        <Img
          src="/images/img_vector_30x30.png"
          alt="vector"
          className="h-[30px] w-[30px] object-cover"
          onClick={() => handleExpand()}
        />
      </div>
    </>
  );
}
