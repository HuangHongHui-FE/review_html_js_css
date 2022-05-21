export default {
    bind(el, binding, vNode) {
        // console.log('bind')  // 一上来就会打印
        // console.log(el)
        // console.log(binding)
        // console.log(vNode)
        const _ops = binding.value,
            _c = el.getElementsByClassName(_ops.className);

        // 设置选中的class
        _c[_ops.curIdx].className += ` ${_ops.activeClass}`;
    },

    update(el, binding, vNode) {
        // console.log('update')  // 点击不同的选项时会打印
        const _ops = binding.value,
            _oOps = binding.oldValue,
            _c = el.getElementsByClassName(_ops.className);

        _c[_oOps.curIdx].className = `${_oOps.className}`
        _c[_ops.curIdx].className += ` ${_ops.activeClass}`


    }
}