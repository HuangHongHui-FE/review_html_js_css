import Carousel from './Carousel'
import CarItem from './Carousel/Item'
import TreeMenu from './TreeMenu'
import MenuItem from './TreeMenu/MenuItem'
import SubMenu from './TreeMenu/SubMenu'
import ReSubMenu from './TreeMenu/ReSubMenu'

let JsppUI = {}

JsppUI.install = function (Vue) {
    // 轮播图
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarItem.name, CarItem)

    // 无限多级菜单
    Vue.component(TreeMenu.name, TreeMenu)
    Vue.component(MenuItem.name, MenuItem)
    Vue.component(SubMenu.name, SubMenu)
    Vue.component(ReSubMenu.name, ReSubMenu)
}


export default JsppUI;