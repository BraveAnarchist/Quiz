import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=31&type=multiple')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
