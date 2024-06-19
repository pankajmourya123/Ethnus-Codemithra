import React from 'react';
import Table from './Components/Table/Table';
import Statistics from './Components/Statistics/Statistics';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Transaction Dashboard</h1>
      </header>
      <main className="App-content">
        <Table />
       
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
