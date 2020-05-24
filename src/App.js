import React from 'react';

function Todos({todo}) {
    return (
        <li>
            <input type="checkbox" name="todo"/>
            <label style={{marginLeft: 2}}>{todo}</label>
        </li>
    );
}

function App() {
  return (
    <div>
      Hello Sample React App!!!<br/>
      <form>
        <ul>
            <Todos todo="리액트 공부하기" />
            <Todos todo="자바 공부하기" />
            <Todos todo="도커 공부하기" />
            <Todos todo="운동하기" />
        </ul>
      </form>
    </div>
  );
}

export default App;
