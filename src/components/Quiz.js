import React, { useState, useEffect } from "react";
import { fetchQuizData } from "../api";
import "../styles.css"; // Updated import for styles.css

const Quiz = () => {
    const [quizTitle, setQuizTitle] = useState("");
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getQuizData = async () => {
            const data = await fetchQuizData();
            if (data.questions && data.questions.length > 0) {
                setQuizTitle(data.title);
                setQuestions(data.questions);
            } else {
                console.error("No questions found.");
            }
            setLoading(false);
        };

        getQuizData();
    }, []);

    if (loading) return <h2 className="loading">Loading...</h2>;

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionSelect = (option) => {
        setSelectedOption(option.id);
        setIsCorrect(option.is_correct);
        if (option.is_correct) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsCorrect(null);
        } else {
            setQuizCompleted(true);
        }
    };

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">{quizTitle}</h1>
            
            {quizCompleted ? (
                <div className="quiz-completed">
                    <h2>Quiz Completed! 🎉</h2>
                    <p>Your Score: {score} / {questions.length}</p>
                </div>
            ) : (
                <div className="question-container">
                    <h3 className="question-text">{currentQuestion.description}</h3>
                    <div className="options-container">
                        {currentQuestion.options.map((option) => (
                            <div key={option.id} className="option-wrapper">
                                <button
                                    className={`option-button ${selectedOption === option.id ? (isCorrect ? "correct" : "incorrect") : ""}`}
                                    onClick={() => handleOptionSelect(option)}
                                    disabled={selectedOption !== null}
                                >
                                    {option.description}
                                </button>
                            </div>
                        ))}
                    </div>
                    {selectedOption !== null && (
                        <p className={`result-message ${isCorrect ? "correct-message" : "incorrect-message"}`}>
                            {isCorrect ? "✅ Correct!" : "❌ Incorrect!"}
                        </p>
                    )}
                    <button 
                        className="next-button"
                        onClick={handleNextQuestion} 
                        disabled={selectedOption === null}
                    >
                        {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;