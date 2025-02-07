import { useLocation, useNavigate } from "react-router-dom";
import "../styles.css"; // Use this instead of "./styles.css"


const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="result-container">
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score} / {total}</p>
      <button onClick={() => navigate("/")}>Play Again</button>
    </div>
  );
};

export default Result;
