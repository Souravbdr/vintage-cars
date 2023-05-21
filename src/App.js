import './App.css';
import Form from './pages/Form/Form';
import { Route, Routes } from 'react-router-dom';
import Results from './pages/Results/Results';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('https://vintagecarserver-souravcricket1997.b4a.run/api/feedback/all');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/results" element={<Results feedbacks={feedbacks}/>} />
      </Routes>
    </div>
  );
}

export default App;
