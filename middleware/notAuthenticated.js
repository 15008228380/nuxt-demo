export default function ({ store, redirect }) {
  // 如果已经登录,再访问登录/注册  跳转到首页
  if (store.state.user) {
    return redirect('/')
  }
}
