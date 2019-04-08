// 为组件提供install 方法,供组件对外按需引入
import XrTest from './src/test'

XrTest.install = Vue => {
  Vue.component(XrTest.name, XrTest)
}

export default XrTest

// 这步的精髓就在于给组件扩展一个 install 方法，至于为什么要扩展这个方法，文章开头已经说到了，是因为 Vue.use() 的需要，use 会默认调用 install 方法安装，仅此而已
