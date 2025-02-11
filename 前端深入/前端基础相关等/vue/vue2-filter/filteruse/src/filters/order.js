export default {
    setOrderStatus(status){
        switch (status){
            case 1:
                return '待付款'
            case 2:
                return '待发货'
            case 3:
                return '待收货'
            case 4:
                return '待评价'
            default:
                return '未获取到状态'
        }
    },
    setStatusStyle(statusString){
        switch (statusString){
            case '待付款':
                return 'not-pay'
            case '待发货':
                return 'not-send'
            case '待收货':
                return 'not-receive'
            case '待评价':
                return 'not-comment'
            default:
                return '';
        }
    }
}