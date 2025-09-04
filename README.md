# React Quiz App

### Objective
[cite_start]The goal of this project is to create a fully functional quiz application using React[cite: 3]. [cite_start]The app assesses front-end fundamentals, state management, and the ability to build a clean, user-friendly interface[cite: 3].

### Features

#### Core Functionality
* [cite_start]**UI/UX**: The application has a clean, responsive layout that works on both desktop and mobile devices[cite: 6]. [cite_start]It displays one question at a time with four answer options[cite: 6].
* [cite_start]**Quiz Page**: Loads 5-10 multiple-choice questions from a data source (either a local JSON file or the Open Trivia DB API)[cite: 11]. [cite_start]It renders one question at a time, requiring the user to select an answer before moving to the next question[cite: 12, 13].
* [cite_start]**Score Tracking**: The app tracks correct and incorrect selections throughout the quiz[cite: 15]. [cite_start]At the end, it displays a final score (e.g., "You scored 7/10")[cite: 16].
* [cite_start]**Results Page**: After completing the quiz, a results page shows a summary of answers, indicating which were correct/incorrect and displaying the user's selected option versus the correct option[cite: 18, 19].
* [cite_start]**Restart Quiz**: Provides a "Restart Quiz" action to allow the user to attempt the quiz again[cite: 20].

#### Technical Requirements
* [cite_start]Built using React functional components with hooks, primarily `useState` and `useEffect`[cite: 22].
* [cite_start]Data is passed between components using props[cite: 23].
* [cite_start]State transitions are managed for the entire quiz flow (Answer → Next Question → Results)[cite: 25, 26].
* [cite_start]Styling is done using CSS/Tailwind/Styled Components[cite: 24].
* [cite_start]React Router is used to manage routes like `/quiz` and `/results`[cite: 29].

### How to Run the Project

To get this project up and running locally, follow these simple steps:

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/Siddharth-Mishra-23/quiz-app.git](https://github.com/Siddharth-Mishra-23/quiz-app.git)
    ```
    (Note: Replace the URL with your actual repository URL.)

2.  **Navigate to the project directory**:
    ```bash
    cd quiz-app
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

4.  **Start the development server**:
    ```bash
    npm start
    ```
    This command will run the app in development mode and open it in your default web browser at `http://localhost:3000`.

### Bonus Features Implemented
*(List any bonus features you've implemented here, such as a timer per question, a progress indicator, or persistent high scores.)*
* [cite_start][e.g., Progress indicator (Question 3 of 10)] [cite: 46]
* [cite_start][e.g., Timer per question that auto-locks the answer] [cite: 45]
* [cite_start][e.g., Persistent high scores via localStorage] [cite: 48]
