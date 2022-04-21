import React from 'react';
import Counter from './components/Counter'
import FreeSeats from './components/FreeSeats'
import Table from './components/Table';

function App() {
    return (
      <div className="App">
        <Counter />
        <FreeSeats />
        <Table />
      </div>
    );
  }
  
  export default App;