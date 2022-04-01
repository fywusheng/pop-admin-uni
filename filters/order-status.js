export default status => {
  switch (parseInt(status)){
  case 10:
    return '待付款'
  case 20:
    return '待发货'
  case 30:
    return '待收货'
  case 40:
    return '待评价'
  case 50:
    return '已完成'
  case 90:
    return '订单取消'
  case 100:
    return '交易取消'
  case 999:
    return '退换货'
  }
}
