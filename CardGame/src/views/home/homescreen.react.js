import React from "react";

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="home-screen">
        <h1>Welcome to the Multiplayer Card Game</h1>
        <p>This is the home screen of our multiplayer card game.</p>
        <button onClick={this.handleStartGame}>Start Game</button>
      </div>
    );
  }

  handleStartGame = () => {
    console.log("Starting a new game...");
  };
}

export default HomeScreen;
