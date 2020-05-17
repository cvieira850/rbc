import React, {useCallback, useState, useEffect} from 'react';

import './App.css';
import api from './services/api';

function App() {
  const [data,setData] = useState([]);

  useEffect(()=> {
    api.get('cases').then(response => {
      setData(response.data.cases);

    });

  }, [,setData]);

  const getData = useCallback(async (event) => {
    event.preventDefault();
    data.forEach(({ element }) => {
      console.log(element);

    });

  }, [data]);
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
