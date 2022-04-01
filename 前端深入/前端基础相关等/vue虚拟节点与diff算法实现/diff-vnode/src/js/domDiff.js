import {
    ATTR,
    TEXT,
    REPLACE,
    REMOVE
} from './patchTypes';

let patches = {}, vnIndex = 0;

function domDiff(oldVDom, newVDom){

    let index = 0;  // 每个vNode深度遍历的时候用的。
    
    vNodeWalk(oldVDom, newVDom, index);  // 对比新旧DOM的方法

    return patches;
}



function vNodeWalk(oldNode, newNode, index){
    let vnPatch = [];

    if(!newNode){
        vnPatch.push({
            type: REMOVE,
            index
        })
    // 如果两个都是文本节点
    }else if(typeof oldNode == 'string' && typeof newNode == 'string'){
        if(oldNode != newNode){
            // 新增补丁
            vnPatch.push({
                type: TEXT,
                text: newNode
            })
        }
    // 元素类型相同，则对比属性
    }else if(oldNode.type == newNode.type){
        const attrPatch = attrsWalk(oldNode.props, newNode.props)  // 对比新旧虚拟node属性
        // console.log(attrPatch)

        if(Object.keys(attrPatch).length > 0){
            vnPatch.push({
                type: ATTR,
                attrs: attrPatch
            })
        }

        // 递归儿子们
        childrenWalk(oldNode.children, newNode.children)
    // 啥都不同，直接新增进去新的node
    }else{
        vnPatch.push({
            type: REPLACE,
            newNode
        })
    }

    // 看经过一些列操作后vnPatch是不是有新打好的补丁
    if(vnPatch.length > 0){
        patches[index] = vnPatch;
    }
}


function attrsWalk(oldAttrs, newAttrs){
    let attrPatch = {};

    for(let key in oldAttrs){
        // 都有属性，但是新旧属性不一样,修改属性
        if(oldAttrs[key] !== newAttrs[key]){
            attrPatch[key] = newAttrs[key];
        }

        // 老虚拟dom没有这个属性，则新增属性
        for(let key in newAttrs){
            if(!oldAttrs.hasOwnProperty(key)){
                attrPatch[key] = newAttrs[key];
            }
        }
    }

    return attrPatch;

}


function childrenWalk(oldChildren, newChildren){
    oldChildren.map((c, idx) => {
        vNodeWalk(c, newChildren[idx], ++vnIndex)
    })
}


export default domDiff;