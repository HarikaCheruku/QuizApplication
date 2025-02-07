import "../styles.css"; // Use this instead of "./styles.css"


const Question = ({ question, setSelectedAnswer, selectedAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedAnswer === option ? "selected" : ""}`}
            onClick={() => setSelectedAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
