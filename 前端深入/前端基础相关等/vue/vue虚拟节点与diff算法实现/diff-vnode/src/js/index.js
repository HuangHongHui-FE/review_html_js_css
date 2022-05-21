// console.log('1')
import { createElement, render, renderDom } from "./virtualDom";

import domDiff from './domDiff';  // 对比新旧dom，打补丁

import doPatch from './doPatch'

const vDom1 = createElement('ul', {
    class: 'list',
    style: 'width: 300px; height: 300px; background-color: orange'
}, [
    createElement('li', {
        class: 'item',
        'data-index': 0
    },[
        createElement('p', {class: 'text'}, ['第1个列表项'])
    ]),
    createElement('li', {
        class: 'item',
        'data-index': 1
    },[
        createElement('p', {
            class: 'text'
        },[
            createElement('span', {
                class: 'title'
            }, [
                '第2个列表项'
            ])
        ])
    ]),
    createElement('li', {
        class: 'item',
        'data-index': 2
    }, ['第3个列表项'])
]);

console.log(vDom1)

// 虚拟节点转换为真实的dom节点
const rDom = render(vDom1)
// console.log(rDom)

// 渲染真实dom到页面
renderDom(rDom, document.getElementById('app'))



// 对比新旧虚拟节点的差异,返回要打的补丁包
const patches = domDiff({}, vDom1);  // 传入新旧虚拟dom


// 给真实dom打补丁
doPatch(rDom, patches)

console.log(patches)


