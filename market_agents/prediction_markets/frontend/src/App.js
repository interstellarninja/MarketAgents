import React from 'react';
import MarketApp from './components/MarketApp'; // Update the import path

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Prediction Market Simulation</h1>
            </header>
            <MarketApp />
        </div>
    );
}

export default App;