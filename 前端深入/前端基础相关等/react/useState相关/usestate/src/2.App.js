import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
    // 看他是否会触发APP组件的更新
    console.log('app')

    // 1. 传入这种重复的内容，不会触发更新
    // const [title, setTitle] = useState('React')

    // const [info, setInfo] = useState({
    //     a: 1
    // })

    // 2. 触发更新
    // function changeInfo() {
    //     setInfo({
    //         a: 1
    //     })
    // }

    // 3. 不触发更新
    // const obj = {
    //     a: 1
    // }
    // const [info1, setInfo1] = useState(obj)
    // function changeInfo1() {
    //     setInfo1(obj)
    // }

    // 4. 
    const [info, setInfo] = useState({
        name: '小也深深',
        age: 34
    });

    const changeInfo = () => {
        setInfo((prevInfo) => {
            const newInfo = {
                name: '小也深深',
                age: 34,
                hobby: '旅游'
            }
            // return {...prevInfo, ...newInfo}  
            return Object.assign(newInfo, prevInfo)
        })
    }



    return (
        <div>
            {/* 1.  */}
            {/* <h1>{title}</h1>
            <button onClick={() => setTitle(title + '1')}>不触发组件更新</button> */}
            
            {/* 2.  */}
            {/* <h1>{info.a}</h1>
            <button onClick={changeInfo}>触发更新</button> */}

            {/* 3.  */}
            {/* <h1>{info1.a}</h1>
            <button onClick={changeInfo1}>不触发更新</button> */}

            {/* 4.  */}
            <h1>{info.age}</h1>
            <h1>{info.name}</h1>
            <h1>{info.hobby}</h1>
            <button onClick={changeInfo}>...使用</button>
        </div>
    )
}

export default App;
