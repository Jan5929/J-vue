// Store: 统一存储state， 并且是响应式的
// 它提供给用户一些api： commit/dispath
let Vue
class Store {
  constructor (options) {
    // 保持从main.js 传过来的选项
    this._mutations = options.mutations
    this._actions = options.actions

    // 1.对state做响应式处理
    this._vm = new Vue({
      data () {
        // return options.state
        // 不做代理
        return {
          $$state: options.state
        }
      },
      computed: {}
    })
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
    // 获取getters 对象
    const getters = options.getters
    // 利用computed 缓存特性
    for (const key in getters) {
      this._vm.$options.computed[key] = getters[key](options.state)
    }
    this.getters = this._vm.$options.computed
  }

  // 绑定this
  get state () {
    return this._vm._data.$$state
  }

  set state (v) {
    console.log('请使用repalceState重置state')
  }

  commit (type, payload) {
    // 根据type从用户配置的mutations中获取那个函数
    const entry = this._mutations[type]
    if (!entry) {
      console.error('unknowm mutation!')
    }
    entry(this.state, payload)
  }

  dispatch (type, payload) {
    const entry = this._actions[type]
    if (!entry) {
      console.error('unknowm mutation!')
    }
    entry(this, payload)
  }
}

function install (_Vue) {
  // 注册$store
  Vue = _Vue

  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}
// 导出的对象是Vuex
export default {
  Store,
  install
}
