import Vue from 'vue'
import App from './App.vue'
import { MdField, MdCheckbox } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

Vue.use(MdField, MdCheckbox);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
