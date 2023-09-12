import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function QuestionsSection() {
  const questions = [
    {
      id: 1,
      ques: "What is Bookmark?",
      res: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex, tempora sunt distinctio facilis eaque dicta quidem dolores molestiae repudiandae aperiam nam provident aliquam fugit ducimus possimus natus. Laboriosam, fugit?",
    },
    {
      id: 2,
      ques: "How can I request a new browser?",
      res: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex, tempora sunt distinctio facilis eaque dicta quidem dolores molestiae repudiandae aperiam nam provident aliquam fugit ducimus possimus natus. Laboriosam, fugit?",
    },
    {
      id: 3,
      ques: "Is there a mobile app?",
      res: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex, tempora sunt distinctio facilis eaque dicta quidem dolores molestiae repudiandae aperiam nam provident aliquam fugit ducimus possimus natus. Laboriosam, fugit?",
    },
    {
      id: 4,
      ques: "What about other Chromium browsers?",
      res: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex, tempora sunt distinctio facilis eaque dicta quidem dolores molestiae repudiandae aperiam nam provident aliquam fugit ducimus possimus natus. Laboriosam, fugit?",
    },
  ];

  const initialStates = Array(4).fill(false);

  const [activeStates, setActiveStates] = useState(initialStates);

  const toggleQuestion = (index) => {
    const newActiveStates = [...activeStates];
    newActiveStates[index] = !newActiveStates[index];
    setActiveStates(newActiveStates);
  };

  return (
    <div className="px-6 mb-32">
      <div className="text-center mb-12">
        <h2 className="text-VeryDarkBlue font-medium text-2xl mb-4 lg:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-GrayishBlue mb-8 lg:text-lg lg:w-1/2 lg:mx-auto">
          Here are some of our FAQs. If you have any other questions you´d like
          answered please feel free to email us.
        </p>
      </div>

      {questions.map((question, index) => (
        <div
          key={question.id}
          className="mb-6 cursor-pointer lg:w-1/2 lg:mx-auto"
          onClick={() => {
            toggleQuestion(index);
          }}
        >
          <div className="flex items-center justify-between">
            <p className="text-VeryDarkBlue lg:text-lg hover:text-SoftRed">
              {question.ques}
            </p>

            <FontAwesomeIcon
              icon={activeStates[index] ? faAngleUp : faAngleDown}
              className={`lg:text-lg ${
                activeStates[index] ? "text-SoftRed" : "text-softBlue"
              }`}
            />
          </div>
          {activeStates[index] && (
            <p className="mt-4 text-GrayishBlue text-sm lg:text-base">
              {question.res}
            </p>
          )}
          <hr className="mt-6" />
        </div>
      ))}

      <div className="flex justify-center mt-12">
        <button className="px-6 py-4 rounded-lg text-white bg-softBlue text-sm lg:text-base lg:py-3">
          More Info
        </button>
      </div>
    </div>
  );
}

export default QuestionsSection;
