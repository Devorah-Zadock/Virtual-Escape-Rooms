import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      initialTime: 600000,
      currentTime: 600000,
    };
  }

  componentDidMount() {
    this.startCountdown();
  }

  componentWillUnmount() {
    this.stopCountdown();
  }

  startCountdown = () => {
    this.countdownInterval = setInterval(() => {
      this.setState(prevState => {
        if (prevState.currentTime <= 0) {
          this.stopCountdown();
          if (this.props.onCountdownComplete) {
            this.props.onCountdownComplete(); // Trigger the completion event
          }
          return { currentTime: 0 };
        }
        return { currentTime: prevState.currentTime - 1000 };
      });
    }, 1000);
  }

  stopCountdown = () => {
    clearInterval(this.countdownInterval);
  }

  formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000) / 60);

    return `${minutes}:${seconds}`;
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div className="countdown-timer">
        {this.formatTime(currentTime)}
      </div>
    );
  }
}

export default Stopwatch;
