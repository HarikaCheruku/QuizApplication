import axios from "axios";

const API_URL = "http://localhost:5000/quiz";  // Fetch from the backend

export const fetchQuizData = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log("Quiz Data Received:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching quiz data:", error);
        return [];
    }
};
