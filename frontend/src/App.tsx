import React, {useCallback, useState} from 'react';

import './App.css';
import api from './services/api';

function App() {
  const [data,setData] = useState({})
  const getData = useCallback(async () => {
    const response = await api.get('cases');
    console.log(response.data);
    setData(response.data);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={getData}>

        <button type="submit">Testar</button>
        </form>

      </header>
    </div>
  );
}

export default App;
