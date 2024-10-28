import logo from './logo.svg';
import './App.css';

import axios from 'axios';

// Define multiple requests to simulate different API calls
const fetchData1 = () => axios.get('http://localhost:3009/user');
const fetchData2 = () => axios.get('http://localhost:3009/nonexistent');  // will fail
const fetchData3 = () => axios.get('http://localhost:3009/user');

const fetchAllDataUsingPromiseAll = async () => {
  try {
    const responses = Promise.all([fetchData1(), fetchData2(), fetchData3()]);
    console.log('Promise.all responses:', responses.map(res => res.data));
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }
};

const fetchAllDataUsingPromiseAllSettled = async () => {
  // Using Promise.allSettled
  const responses = await Promise.allSettled([fetchData1(),  fetchData3()]);
  console.log('Promise.allSettled responses:', responses);
};

function App() {
  return (
    <div className="App">
      <button onClick={fetchAllDataUsingPromiseAll}>Fetch Data with Promise.all</button>
      <button onClick={fetchAllDataUsingPromiseAllSettled}>Fetch Data with Promise.allSettled</button>
    </div>
  );
}

export default App;