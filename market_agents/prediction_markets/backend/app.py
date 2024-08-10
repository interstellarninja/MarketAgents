from flask import Flask, jsonify, request
from prediction_markets import run_simulation, Market, Agent, PredictionMarketSimulation

app = Flask(__name__)

simulation = None

@app.route('/api/start_simulation', methods=['POST'])
def start_simulation():
    global simulation
    simulation = run_simulation()
    return jsonify({"status": "Simulation started"})

@app.route('/api/market_prices', methods=['GET'])
def get_market_prices():
    if simulation:
        prices = simulation.run_simulation_step()
        return jsonify(prices)
    return jsonify({"error": "Simulation not started"}), 400

if __name__ == '__main__':
    app.run(debug=True)
