import { Heading } from "../Components/Heading";
import FAQItem from "./FAQItem";

const FAQuestions = [
  {
    title: "Can education flashcards be used for all age groups?",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
  },
  {
    title: "How do education flashcards work?",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
  },
  {
    title: "Can education flashcards be used for test preparation?",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
  },
];

export default function FAQ() {
  return (
    <div className="mt-5 mx-10 flex w-[69%] flex-col items-start gap-[34px] md:w-full ">
      <Heading
        size="5xl"
        as="h2"
        className="bg-gradient bg-clip-text tracking-[0.24px] gradient-text"
      >
        FAQ
      </Heading>
      {FAQuestions.map((item, index) => (
        <FAQItem item={item} key={index} />
      ))}
    </div>
  );
}
