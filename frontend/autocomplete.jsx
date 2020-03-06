import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      filteredList: this.props.fruits
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let input = e.target.value;
    let filtered = this.props.fruits.filter(fruit =>
      fruit.startsWith(input.toLowerCase())
    );

    this.setState({
      inputVal: input,
      filteredList: filtered
    });
  }

  handleClick(e) {
    let input = e.target.textContent;
    let filtered = this.props.fruits.filter(
      fruit => fruit == input.toLowerCase()
    );
    this.setState({
      inputVal: input,
      filteredList: filtered
    });
  }

  render() {
    let fruitList = this.state.filteredList.map((fruit, idx) => (
      <li key={idx}>{fruit}</li>
    ));
    return (
      <div className='autocomplete-container'>
        <h1>Autocomplete</h1>
        <div className='autocomplete'>
          <input
            type='text'
            placeholder='Search'
            value={this.state.inputVal}
            onChange={this.handleChange}
          />
          <ul onClick={this.handleClick}>{fruitList}</ul>
        </div>
      </div>
    );
  }
}

export default Autocomplete;
