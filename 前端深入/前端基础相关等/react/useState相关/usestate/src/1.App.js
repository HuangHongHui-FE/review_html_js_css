import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Title({propTitle}) {

  // 自己定义的数据可以，组件传过来的数据也可以
  // const [title, setTitle] = useState("react")
  const [title, setTitle] = useState(propTitle)

  return (
    <div className="App">
      <h1>{title}</h1>

      <button onClick={() => setTitle('aaa')}>
        第一种
      </button>

      {/* 中间直接一个回调函数! */}
      <button onClick={() => setTitle((preTitle) => preTitle+'111')}>
        第二种
      </button>
    </div>
  );
}



function App(){
  return (
    <Title propTitle={"React"}></Title>
  )
}

export default App;
