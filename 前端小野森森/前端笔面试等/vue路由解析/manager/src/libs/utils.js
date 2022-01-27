// 处理变成树形结构的数据

function formatRouterTree(data){
    let parents = data.filter(p => p.pid === 0),
        children = data.filter(c => c.pid !== 0);

    dataToTree(parents, children);
    function dataToTree(parents, children){
        parents.map((p) => {
            children.map((c, i) => {
                if(c.pid === p.id){  // 证明c是p的儿子
                    let _c = JSON.parse(JSON.stringify(children));
                    _c.splice(i, 1)
                    dataToTree([c], _c);
                }

                if(p.children){
                    p.children.push(c);
                }else{
                    p.children = [c];
                }
            })
        })
    }

    return parents;
}

// 树形结构数据，变成路由形式
function generateRouter(userRouters){
    let newRouters = userRouters.map((r)=>{
        let routes = {
            path: r.path,
            name: r.name,
            component: () => import (`@/views/${r.name}`)
        }

        if(r.children){
            routes.children = generateRouter(r.children);
        }

        return routes;
    })

    return newRouters;
}

export {
    formatRouterTree,
    generateRouter
}