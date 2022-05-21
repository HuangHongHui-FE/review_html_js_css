import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// 1. 

// function Child({score}) {
//     function getScoreClass(score) {
//         if(score > 90 && score <= 100){
//             return 'A+';
//         }else if(score > 85 && score <= 90){
//             return 'A'
//         }else{
//             return "C"
//         }
//     }
//     const [scoreClass, setScoreClass] = useState(() => {
//         const initialState = getScoreClass(score)
//         return initialState
//     })

//     return (
//         <div>
//             <h1>
//                 学生等级: {scoreClass}
//             </h1>
//         </div>
//     )
// }


// function App() {
//     return (
//         <Child score="80"></Child>
//     )

// }





// 2. 注意打印，多次点击change title， 注意app 与 child组件的渲染情况

function Child ({title}){
    console.log('Child')
    return (
        <div>
            <h2>Child: {title}</h2>
        </div>
    )
}


function App(){
    console.log('app')

    const [title, setTitle] = useState('React')
    const [subTitle, setSubTitle] = useState('React hooks')

    const changeTitle = () => {
        setTitle('React App')
        setSubTitle('React hooks App')
    }


    return (
        <>
            <h2>App main: {title}</h2>
            <h2>App sub: {subTitle}</h2>
            <Child title={title} />
            <button onClick={changeTitle}>change title</button>
        </>
        
    )
}

export default App;
