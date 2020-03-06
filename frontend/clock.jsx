import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className='clock-container'>
        <h1>Clock</h1>
        <div className='clock'>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
          <h2>{this.state.date.toDateString()}</h2>
        </div>
      </div>
    );
  }
}

export default Clock;
