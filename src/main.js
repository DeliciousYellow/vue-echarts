import Vue from 'vue'
import _ from 'lodash'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as Scroll from "./assets/js/seamscroll.min";
import App from './App'
import router from './router'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype._ = _
Vue.prototype.Scroll = Scroll


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
