import { useState, useEffect } from 'react';
import { questions as mockQuestions } from '../data/questions';

export function useQuizAPI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    // Simulate an API call...
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        // Here we simulate a 1-second network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In the future, replace this with: 
        // const response = await fetch('https://your-api.com/questions');
        // const data = await response.json();
        
        const shuffleArray = (array) => {
          let curr = array.length, randomIndex;
          while (curr !== 0) {
            randomIndex = Math.floor(Math.random() * curr);
            curr--;
            [array[curr], array[randomIndex]] = [array[randomIndex], array[curr]];
          }
          return array;
        };
        const responseData = shuffleArray([...mockQuestions]);

        if (isMounted) {
          setData(responseData);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch questions');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchQuestions();

    return () => {
      isMounted = false;
    };
  }, []);

  const reshuffle = () => {
    if (data) {
      const shuffleArray = (array) => {
        let curr = array.length, randomIndex;
        while (curr !== 0) {
          randomIndex = Math.floor(Math.random() * curr);
          curr--;
          [array[curr], array[randomIndex]] = [array[randomIndex], array[curr]];
        }
        return array;
      };
      setData(shuffleArray([...data]));
    }
  };

  return { questions: data, loading, error, reshuffle };
}
