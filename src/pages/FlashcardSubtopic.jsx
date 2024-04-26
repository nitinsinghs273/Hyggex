import { useParams } from "react-router-dom";
import RelationAndFunction from "../Topics/MathsTopicPages/RelationAndFunction";
import { Button } from "../Components/Button/Button";
import { Heading } from "../Components/Heading";
import { Img } from "../Components/Img/index";
import Algebra from "../Topics/MathsTopicPages/Algebra";
import Integration from "../Topics/MathsTopicPages/Integration";

function FlashcardSubtopic() {
  const { subtopic } = useParams();

  return (
    <>
      <div className="font-bold min-h-64">
        {subtopic === "relation and function" && <RelationAndFunction />}
        {subtopic === "algebra" && <Algebra />}
        {subtopic === "integration" && <Integration />}
      </div>
      {/* author info section */}
      <div className="mt-20 flex justify-between ">
        <div className=" flex justify-start items-center ">
          <div className=" rounded-[40px] bg-white-A700 ">
            <Img
              src="/images/SignLogo.png"
              alt="image"
              className="my-[80px] h-[80px] object-cover"
            />
          </div>
          <div className="flex  flex-col ">
            <Heading size="xs" as="h2">
              Published by
            </Heading>
            <Img
              src="/images/img_component_40.svg"
              alt="image"
              className="h-[35px] w-[115px] md:h-auto"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" shape="square" className="w-[60px]">
            <Img src="/images/img_frame_60x60.png" />
          </Button>
          <Heading size="xl" as="h3" className="bg-gradient bg-clip-text ">
            Create Flashcard
          </Heading>
        </div>
      </div>
    </>
  );
}

export default FlashcardSubtopic;
