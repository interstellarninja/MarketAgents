import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AgentTerminal = () => {
    const [logs, setLogs] = useState([]);

    // Function to fetch logs from the backend
    const fetchLogs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/logs'); // Update with your actual endpoint
            setLogs(response.data);
        } catch (error) {
            console.error("Error fetching logs:", error);
        }
    };

    useEffect(() => {
        fetchLogs(); // Fetch logs when the component mounts
    }, []);

    return (
        <div className="terminal">
            <h2>Agent Terminal</h2>
            <pre>{logs.join('\n')}</pre>
        </div>
    );
};

export default AgentTerminal;