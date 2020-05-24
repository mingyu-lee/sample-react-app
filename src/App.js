import React from 'react';
import PropTypes from 'prop-types';

const todos = [
    {
        id: 1,
        name: '자바 공부하기',
        imageUrl: 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png'
    },
    {
        id: 2,
        name: '리액트 공부하기',
        imageUrl: 'https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png'
    },
    {
        id: 3,
        name: '도커 공부하기',
        imageUrl: 'https://miro.medium.com/proxy/1*9hGvYE5jegHm1r_97gH-jQ.png'
    },
    {
        id: 4,
        name: '운동하기',
        imageUrl: 'https://thumbs.gfycat.com/FittingIdenticalAtlanticspadefish-mobile.jpg'
    }
]

Todos.propTypes = {
    name: PropTypes.string.isRequired,
    // will be error
    // name: PropTypes.number.isRequired,
    imageUrl: PropTypes.string
}

function Todos({name, imageUrl}) {
    return (
        <li>
            <input type="checkbox" name="todo"/>
            <label style={{marginLeft: 2}}>{name}</label><br/>
            <img src={imageUrl} style={{width: 100}} alt={name}/>
        </li>
    );
}

function App() {
  return (
    <div>
      <form>
        <ul>
            {todos.map(todo => <Todos key={todo.id} name={todo.name} imageUrl={todo.imageUrl}/>)}
        </ul>
      </form>
    </div>
  );
}

export default App;
