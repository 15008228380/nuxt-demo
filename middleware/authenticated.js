/**
 * 验证是否登录的中间件
 * 路由渲染之前调用
 */
export default function ({ store, redirect }) {
  console.log('=============中间件 路由渲染之前调用==========')
  // 没有登录 重定向到login
  if (!store.state.user) {
    return redirect('/login')
  }
}
