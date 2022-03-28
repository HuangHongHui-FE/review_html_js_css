// 补丁测试,对比虚拟节点差异
const patches = {
    0: [
        {
            type: 'ARRT',
            attr: {
                class: 'list-wrap'
            }
        }
    ],
    2: [
        {
            type: 'ATTR',
            attr: {
                class: 'title'
            }
        }
    ],
    3: [
        {
            type: 'TEXT',
            attr: '特殊列表项'
        }
    ],
    6: [
        {
            type: 'REMOVE',
            index: 6
        }
    ],
    7: [
        {
            type: 'REPLACE',
            newNode: newNode
        }
    ]
}

