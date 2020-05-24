import React from 'react';

class App extends React.Component {
    state = {
        count: 0
    };
    increase = () => {
        console.log("increase");
    };
    decrease = () => {
        console.log("decrease");
    };
    render() {
        return <div>
            <h3>Count: {this.state.count}</h3>
            <button onClick={this.increase}>Increase</button>
            <button onClick={this.decrease}>Decrease</button>
        </div>
        ;
    }
}

export default App;
