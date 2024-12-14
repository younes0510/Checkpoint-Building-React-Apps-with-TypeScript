import { Component } from 'react';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
 
  state: CounterState = { count: 0 };

  
  plus = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="p-4 bg-gray-100 rounded-md shadow-md max-w-sm mx-auto">
        <p className="text-lg font-medium text-gray-700">
          Count: <span className="text-black">{this.state.count}</span>
        </p>
        <button
          onClick={this.plus}
          className="mt-4 px-4 py-2 bg-black text-white rounded "
          
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
