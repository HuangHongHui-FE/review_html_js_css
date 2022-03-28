import Element from './Element'

function createElement(type, props, children){
    return new Element(type, props, children);
}


// 为节点设置属性
function setAttrs(node, prop, value){
    switch(prop){
        case 'value':
            if(node.tagName === 'Input' || node.tagName == 'TEXTAREA'){
                node.value = value
            }else{
                node.setAttribute(prop, value)
            };
            break;
        case 'style':
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(prop, value)
            break;
    }
}


// 渲染成真实DOM
function render(vDom){
    const { type, props, children } = vDom;

    // 元素节点
    const el = document.createElement(type);

    // 遍历每个属性
    for(let key in props){
        // 再定义一个函数来为节点来设置属性
        setAttrs(el, key, props[key]);
    }

    // children节点的循环渲染
    children.map(c => {
        if(c instanceof Element){
            c = render(c);
        }else{
            // 创建文本节点
            c = document.createTextNode(c)
        }
        el.appendChild(c);
    })

    return el
}


// 渲染dom的函数
function renderDom(el, rootEl){
    rootEl.appendChild(el)
}


export {
    createElement,
    render,
    // 打补丁的时候也用，所以导出去
    setAttrs,
    renderDom
}