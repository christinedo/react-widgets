import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };
  }

  handleClick(idx) {
    this.setState({ selected: idx });
  }

  render() {
    const headers = this.props.information.map((tab, idx) => (
      <li
        className={idx == this.state.selected ? 'selected' : ''}
        key={idx}
        onClick={this.handleClick.bind(this, idx)}
      >
        <span>{tab.title}</span>
      </li>
    ));
    return (
      <div className='tabs'>
        <h1>Tabs</h1>
        <ul>{headers}</ul>
        <article>{this.props.information[this.state.selected].content}</article>
      </div>
    );
  }
}

export default Tabs;
