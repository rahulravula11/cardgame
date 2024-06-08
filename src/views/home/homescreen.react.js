import React from "react";

class HomeScreen extends React.Component {
  render() {
    const cardStyle = {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: "15px",
      padding: "20px 30px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Roboto, sans-serif",
      maxWidth: "400px",
      margin: "0 auto",
    };

    const buttonStyle = {
      backgroundColor: "#4CAF50",
      border: "none",
      color: "white",
      padding: "10px 20px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "10px 2px",
      borderRadius: "5px",
      transitionDuration: "0.4s",
      cursor: "pointer",
    };

    return (
      <div
        style={{
          backgroundColor: "#6a0dad",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={cardStyle}>
          <h1>Welcome to the Multiplayer Card Game</h1>
          <p>This is the home screen of our multiplayer card game.</p>
          <button style={buttonStyle} onClick={this.handleStartGame}>
            Start Game
          </button>
        </div>
      </div>
    );
  }

  handleStartGame = () => {
    console.log("Starting a new game...");
  };
}

export default HomeScreen;
