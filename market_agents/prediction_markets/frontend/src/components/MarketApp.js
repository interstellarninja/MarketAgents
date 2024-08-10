import React, { useState } from 'react';
import axios from 'axios';

const MarketApp = () => {
    const [marketPrices, setMarketPrices] = useState({});
    const [terminalLogs, setTerminalLogs] = useState([]);

    // Function to trigger simulation start via API
    const startSimulation = async () => {
        try {
            await axios.post('http://localhost:5000/api/start_simulation');
        } catch (error) {
            console.error("Error starting simulation:", error);
        }
    };

    return (
        <div>
            <button onClick={startSimulation}>Start Simulation</button>
            <div>
                <h2>Market Prices</h2>
                <pre>{JSON.stringify(marketPrices, null, 2)}</pre>
            </div>
            <div>
                <h2>Terminal Logs</h2>
                <pre>{terminalLogs.map((log, idx) => <p key={idx}>{log}</p>)}</pre>
            </div>
        </div>
    );
};

export default MarketApp;