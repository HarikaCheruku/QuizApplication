import { Link } from "react-router-dom";
import "../styles.css"; // Use this instead of "./styles.css"

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Quiz Game!</h1>
      <p>Test your knowledge and have fun!</p>
      <Link to="/quiz">
        <button className="start-btn">Start Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
