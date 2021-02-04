import "./App.css";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      <Header title="Quizzes" />
      <div className="App-main">
        <Quiz />
      </div>
    </div>
  );
}

export default App;
