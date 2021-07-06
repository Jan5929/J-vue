/**
 * vue 插件形式：
 *           实现一个install 方法
 *           该方法会在use的时候被调用
 */
// import Home from '../views/J-home/index'
let Vue
class JVueRouter {
  constructor (options) {
    // 选项中包含了路由的配置信息
    this.$options = options
    // 需要将current属性声明为响应式 new vue definproperty proxy
    Vue.util.defineReactive(
      this,
      'current',
      window.location.hash.slice(1) || '/'
    )
    // 监听hashchang事件，并且在变化的时候响应
    window.addEventListener('hashchange', () => {
      // hash : #/about
      this.current = window.location.hash.slice(1) || '/'
      // console.log(this.current)
    })
  }
}

/**
 * 形参1是Vue的构造函数
 */
JVueRouter.install = function (_vue) {
  // 传人构造函数，我们可以修改他的原型，起扩展的作用
  Vue = _vue
  // install 中 this 是谁？  -> JVueRouter

  // 1.注册$router, 在组件中可以访问 this.$router

  // 延迟执行，等到router实例创建之后
  // 全局混入: Vue.mixn
  Vue.mixin({
    beforeCreate () {
      // 此处的 this 指向 组件 实例
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 2. 注册router-link 和 router-view 全局组件
  /**
   * runtime 版本 不能使用template 不带编译器
   */
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    // template: '<a>0xxxx</a>'
    render (h) {
      // h 是 createMelment 返回VNode
      // 获取插槽内容
      return h(
        'a',
        {
          attrs: {
            href: '#' + this.to
          }
        },
        this.$slots.default
      )
    }
  })
  Vue.component('router-view', {
    // template: '<div>00xx</div>'
    render (h) {
      // 数据响应式： 数据变化可侦听，使用这些数据组件会和响应式数据产生依赖关系
      // 将来响应式数据发生变化，这些组件会重新渲染
      // 0. 获取router实例
      console.log(this.$router.$options, this.$router.current)
      let component = null
      const route = this.$router.$options.routes.find(
        route => route.path === this.$router.current
      )
      if (route) {
        component = route.component
      }
      // h 是 createMelment 返回VNode
      // 1. 获取hash部分，获取path
      // 2. 根据path， 从路由表中获取组件
      return h(component)
    }
  })
}

export default JVueRouter
