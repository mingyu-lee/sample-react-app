import React from 'react';

class App extends React.Component {
    state = {
        count: null
    };
    increase = () => {
        // this.state를 직접 변경하지 말자, 어차피 동작 안된다
        // 왜냐하면, React는 render 함수를 새로고침하지 않는다.
        // this.setState()를 사용하면 render 함수를 다시 호출하고 virtual DOM을 활용하여 빠르게 바뀐 부분만 렌더링한다.
        this.setState(current => ({count: current.count + 1}));
    };
    decrease = () => {
        // 비추천한다, 외부의 상태 의존하지 않는게 좋은 방법이다.
        // this.setState({count: this.state.count - 1});
        this.setState(current => ({count: current.count - 1}));
    };
    componentDidMount() {
        // 컴포넌트 라이프 사이클 Mounting 단계
        // 아래 메서드들은 컴포넌트의 인스턴스가 생성되어 DM 상에 삽입될 때에 순서대로 호출된다.
        // constructor()
        // static getDerivedStateFromProps()
        // render()
        // componentDidMount()
        // componentDidMount가 주로 사용된다.
        console.log("rendered")
        setTimeout(() => {
            this.setState({count: 0});
        }, 3000);

    };

    componentWillUnmount() {
        // 컴포넌트 라이프 사이클 Unmounting 단계
        // 컴포넌트가 DOM 상에서 제거될 때에 호출된다.
        console.log("unmounted")
    }

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
